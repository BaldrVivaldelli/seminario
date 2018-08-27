package com.example.gatewayservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
import org.springframework.cloud.gateway.filter.factory.RequestRateLimiterGatewayFilterFactory;
import org.springframework.cloud.gateway.filter.ratelimit.RedisRateLimiter;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.data.redis.connection.SortParameters.Order;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.cloud.client.discovery.DiscoveryClient;

@EnableWebFluxSecurity
@SpringBootApplication
public class GatewayServicesApplication {

	@Bean
	DiscoveryClientRouteDefinitionLocator discoveryRoutes(DiscoveryClient dc, DiscoveryLocatorProperties dlp) {
		return new DiscoveryClientRouteDefinitionLocator(dc, dlp);
	}
	
	@Bean
	RouteLocator gatewayRoutes(RouteLocatorBuilder rlb, RequestRateLimiterGatewayFilterFactory rrls) {
		return rlb
				.routes()
				
				.route("start", t-> t.path("/start")
						.uri("http://start.spring.io:80"))
				//load balance proxy
				.route("lb", t-> t.path("/customers")
						.uri("lb://customer-services/customers"))
				//filtro medio cheto
				.route("hystrix_route", t-> t.path("/sinContingencia")
						.filters(f -> f.hystrix(c -> c.setName("slowcmd")))
								.uri("http://httpbin.org"))
				//filtro contingencia
				.route("rutaParaProbarCuandoExploteUnServicio", t-> t.path("/conContingencia")
						.filters(f -> f.hystrix(c -> c.setName("slowcmd").setFallbackUri("forward:/hystrixfallback")))
						.uri("fdma://customer-services/delay"))				
				//filtro DMA
				.route("fdma", t-> t.path("/fdma")
						.filters(f -> f.requestRateLimiter(c -> c.setRateLimiter(redisRateLimiter())))
						.uri("fdma://customer-services/customers"))
				.route("ng", t-> t.path("fdma/angular")
						.uri("ng://customer-services/angularTest"))
		
				.build();
	};
	
	@Bean
	RedisRateLimiter redisRateLimiter() {
		return new RedisRateLimiter(1, 2);
	}
	
	@Bean
	SecurityWebFilterChain springWebFilterChain(ServerHttpSecurity http) throws Exception {
		return http.httpBasic().and()
				.addFilterAt(corsWebFilter(), SecurityWebFiltersOrder.CSRF)
				.authorizeExchange()
				.pathMatchers("/fdma/**").authenticated()
				.anyExchange().permitAll()
				.and()
				.httpBasic()
				.and()
				.build();
	}

	@Bean
	public MapReactiveUserDetailsService reactiveUserDetailsService() {
		UserDetails user = User.withDefaultPasswordEncoder().username("user").password("pw").roles("USER").build();
		return new MapReactiveUserDetailsService(user);
	}
	
	@Bean
	CorsWebFilter corsWebFilter() {

		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.addAllowedOrigin("http://localhost:4200");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", config);
		return new CorsWebFilter(source);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(GatewayServicesApplication.class, args);
	}
}
