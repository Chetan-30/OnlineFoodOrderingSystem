package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="Customers")
public class Customer {
	@Id
	private String mobileno;
	private String name;
	private String email;
	private String password;
	private int uniqueid;
}
