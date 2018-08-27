package com.example.customerservices.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Customer {
	
	@Id
	private String id;
	public Customer() {
		super();
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Customer(String id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	private String name;
}
