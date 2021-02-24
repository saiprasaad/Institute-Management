package com.example.rest.webservices.institutemanagement.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest.webservices.institutemanagement.login.User;

import java.util.Collection;
import java.util.List;

public interface loginrepository extends JpaRepository<User,Integer> {
//    List<User> findByEmail(String email);
    User findByrollno(String rollno);
    
//    User findRollNoBy(int id);
   @Query(value = "select * from s_details where dept=?1 and sec=?2 and batch=?3",nativeQuery = true)
    List<User> findAllRollNo(String dept,String sec,int batch);
    
    
    
}