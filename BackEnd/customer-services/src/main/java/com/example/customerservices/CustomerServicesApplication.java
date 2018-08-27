package com.example.customerservices;

import java.time.Duration;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.example.customerservices.entities.Customer;
import com.example.customerservices.repository.CustomerRepository;

import reactor.core.publisher.Flux;

@EnableDiscoveryClient
@SpringBootApplication
@ComponentScan(basePackages = {"com.example.customerservices.controller","com.example.customerservices.entities", "com.example.customerservices.repository"})
public class CustomerServicesApplication {

	@Bean
	ApplicationRunner init(CustomerRepository cr) {
		return  args -> 
				cr.deleteAll()
				.thenMany(Flux.just("A","B","C").map( l-> new Customer(null,l)).flatMap(x -> cr.save(x)))
				.thenMany(cr.findAll())
				.subscribe(System.out::println);
	}
	public static void main(String[] args) {
		SpringApplication.run(CustomerServicesApplication.class, args);
	}

	 @Bean
	 public RouterFunction<?> routes(CustomerRepository cr){
		return RouterFunctions
				 				.route(RequestPredicates.GET("/customers"), r-> ServerResponse.ok().body(cr.findAll(), Customer.class))
								.andRoute(RequestPredicates.GET("/customers/{id}"), r-> ServerResponse.ok().body(cr.findById(r.pathVariable("id")), Customer.class))
								.andRoute(RequestPredicates.GET("/delay"), r-> ServerResponse.ok().body(Flux.just("Haciendo que explote el servicio").delayElements(Duration.ofSeconds(15)),String.class))
								.andRoute(RequestPredicates.POST("/angularTest"), r-> ServerResponse.ok().body(cr.findAll(), Customer.class))
								;
	 }
}
