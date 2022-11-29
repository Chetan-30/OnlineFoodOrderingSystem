package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Foodorder;
import com.example.demo.repository.Order_Repo;

@RestController
public class FoodOrderController {

	@Autowired
	private Order_Repo repo;
	
	@PostMapping("/insertitem")
	public String createitem(@RequestBody Foodorder order){
		repo.save(order);
		return "Ok";
}
}
