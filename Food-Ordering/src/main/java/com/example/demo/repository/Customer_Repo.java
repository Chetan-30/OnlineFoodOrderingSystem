package com.example.demo.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Customer;


@Repository
public interface Customer_Repo extends MongoRepository<Customer, String> {

}
