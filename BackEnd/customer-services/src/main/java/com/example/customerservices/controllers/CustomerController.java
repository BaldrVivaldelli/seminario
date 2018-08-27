package com.example.customerservices.controllers;



import java.time.Duration;

import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.example.customerservices.entities.Customer;
import com.example.customerservices.repository.CustomerRepository;

import reactor.core.publisher.Flux;

public class CustomerController {

	 @Bean
	 public RouterFunction<?> routes(CustomerRepository cr){
		return RouterFunctions
				 				.route(RequestPredicates.GET("/customers"), r-> ServerResponse.ok().body(cr.findAll(), Customer.class))
				 				.andRoute(RequestPredicates.POST("/probandoPost"), r-> ServerResponse.ok().body(cr.findAll(), Customer.class))
								.andRoute(RequestPredicates.GET("/customers/{id}"), r-> ServerResponse.ok().body(cr.findById(r.pathVariable("id")), Customer.class))
								.andRoute(RequestPredicates.GET("/delay"), r-> ServerResponse.ok().body(Flux.just("Haciendo que explote el servicio").delayElements(Duration.ofSeconds(10)),String.class))
								;
	 }
}
