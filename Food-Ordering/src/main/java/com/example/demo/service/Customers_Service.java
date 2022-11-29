package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.model.Foodorder;
import com.example.demo.repository.Customer_Repo;

@Service
public class Customers_Service {

	@Autowired
	private Customer_Repo cust_repo;
	
	public String addCustomer(Customer customer) {
		if(!cust_repo.existsById(customer.getMobileno())) {
			cust_repo.save(customer);
			return "Account Created Sucessfully !!";
		}else {
			return "Account already exists !!";
		}
	}
	
	public String updatePass(String mobileno, String email, String password) {
		if(cust_repo.existsById(mobileno)) {
			if(cust_repo.findById(mobileno).get().getEmail().equals(email)) {
				Customer c = cust_repo.findById(mobileno).get();
				c.setPassword(password);
				cust_repo.save(c);
				return "Password updated Sucessfully !!";
			}else {
				return "Wrong Email id";
			}
		}else {
			return "Account does not exists !!";
		}
	}
	
	public Customer getCustomer(String id) {
		if(cust_repo.existsById(id)==true) {
			return cust_repo.findById(id).get();
		}
		return null;
	}
	
	public List<Customer> getCustomer() {
		return cust_repo.findAll();
	}
	
	public String updateCustomer(Customer customer) {
		if(cust_repo.existsById(customer.getMobileno())) {
			Customer c = cust_repo.findById(customer.getMobileno()).get();
			if(customer.getName() != null && customer.getName() != "") {
				c.setName(customer.getName());
			}
			if(customer.getEmail() != null && customer.getEmail() != "") {
				c.setEmail(customer.getEmail());
			}
			
			if(customer.getMobileno() != null && customer.getMobileno() != "") {
				c.setMobileno(customer.getMobileno());
			}
			cust_repo.save(c);
			return "Account Updated Sucessfully !!";
		}else {
			return "Account does not exists !!";
		}
	}
	
}
