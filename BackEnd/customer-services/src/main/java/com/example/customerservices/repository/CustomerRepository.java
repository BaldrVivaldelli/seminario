package com.example.customerservices.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.example.customerservices.entities.Customer;

public interface CustomerRepository extends ReactiveMongoRepository<Customer,String>{

}
