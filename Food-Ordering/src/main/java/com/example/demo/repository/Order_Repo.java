package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Foodorder;


@Repository
public interface Order_Repo extends MongoRepository<Foodorder, Integer> {

}
