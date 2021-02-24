package com.example.rest.webservices.institutemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest.webservices.institutemanagement.login.getmarks;
import com.example.rest.webservices.institutemanagement.login.staffdetails;
import com.example.rest.webservices.institutemanagement.login.viewstaffdetails;

public interface subjectallocation extends JpaRepository<staffdetails,Integer>{
//	  staffdetails findBystaffid(String staffid);
	  List<staffdetails> findByStaffidAndBatch(String staffid,int batch);
	  

	 
}
