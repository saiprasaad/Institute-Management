package com.example.rest.webservices.institutemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest.webservices.institutemanagement.login.User;

public interface Userrepository extends JpaRepository<User,Integer>{
User findByrollno(String rollno);
@Query(value = "select dept from s_details where rollno=?1",nativeQuery = true)
String findDept(String rollno);

@Query(value="select name from s_details where rollno=?1",nativeQuery=true)
String findName(String rollno);
}
