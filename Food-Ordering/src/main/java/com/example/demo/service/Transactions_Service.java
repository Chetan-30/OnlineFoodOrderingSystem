package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Foodorder;
import com.example.demo.repository.Order_Repo;

@Service
public class Transactions_Service {
	
	Foodorder transaction = new Foodorder();

	@Autowired
	private Order_Repo tran_repo;	
	
	public List<Foodorder> history(int uniqueid) {

		return tran_repo.findAll().stream().
				filter(ab -> ((ab.getUniqueid() == uniqueid))).toList();
	}

}
