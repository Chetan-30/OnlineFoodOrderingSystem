package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Customer;
import com.example.demo.model.Foodorder;
import com.example.demo.repository.Customer_Repo;
import com.example.demo.service.Customers_Service;
import com.example.demo.service.Transactions_Service;

@CrossOrigin
@RestController
@RequestMapping("Customer/")
public class Customer_Controller {
	
	@Autowired
	private Transactions_Service Transaction_service;
	
	@Autowired
	private Customers_Service Customers_service;
	
	@Autowired
	private Customer_Repo repo;
	
//	Create Account --> SignUp

	@PostMapping("createAcc")
	public String createAcc(@RequestBody Customer customer) {
		return Customers_service.addCustomer(customer);
	}
//	Update Password --> Forgot Password
	@PostMapping("updatePassword/{mobileno}/{email}/{password}")
	public String updatePassword(@PathVariable String mobileno,@PathVariable String email,@PathVariable String password) {
		return Customers_service.updatePass(mobileno, email, password);
	}
	
//	Update Account Details
	@PutMapping("updateAcc")
	public String updateAcc(@RequestBody Customer customer) {
		return Customers_service.updateCustomer(customer);
	}
	
//	For login in React Native App or at frontend
	@GetMapping("getAccount/login/{mobileno}")
	public Customer getAccount(@PathVariable String mobileno) {
		return Customers_service.getCustomer(mobileno);
	}

//	Transaction History
	@GetMapping("orderhistory/{uniqueid}")
	public List<Foodorder> transactionHistory(@PathVariable int uniqueid){
		return Transaction_service.history(uniqueid);
	}
	
	@DeleteMapping("/delete/{mobileno}")
	public String deleteplayer(@PathVariable String mobileno) {
		if(repo.existsById(mobileno)==true) {
			repo.deleteById(mobileno);
			return "the User is deleted " + mobileno;
		}
		return "User not Found!";	
}
}
