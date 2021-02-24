package com.example.rest.webservices.institutemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest.webservices.institutemanagement.login.getmarks;
import com.example.rest.webservices.institutemanagement.login.subjectdetails;

public interface subjectrepo extends JpaRepository<subjectdetails,Integer>{
	  List<subjectdetails> findAll();
	  List<subjectdetails> findBySemAndDept(int sem,String dept);
	  
		@Query(value = "SELECT subname from g_subjects WHERE subcode in(select subcode from g_subjects where sem=?1 and dept=?2)",nativeQuery = true)
		List<String> findAllsubjects(int sem,String dept);
		@Query(value = "SELECT * from g_subjects WHERE subcode in(select subcode from g_subjects where sem=?1 and dept=?2)",nativeQuery = true)
		List<subjectdetails> findAllsubjectsdetails(int sem,String dept);
		@Query(value = "SELECT subname from g_subjects WHERE subcode =?1",nativeQuery = true)
		String findsubnamebysubcode(String subcode);
}
