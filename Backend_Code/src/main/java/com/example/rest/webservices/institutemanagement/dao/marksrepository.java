package com.example.rest.webservices.institutemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest.webservices.institutemanagement.login.User;
import com.example.rest.webservices.institutemanagement.login.getmarks;
import com.example.rest.webservices.institutemanagement.login.marks;

public interface marksrepository extends JpaRepository<marks,Integer>{
//List<marks> findByRollno(String rollno);
	@Query(value = "SELECT COUNT(*) FROM `s_marks` WHERE subcode in(select subcode from g_subjects where sem=?1 and dept=?2) and testtype=?3 and marks>=60",nativeQuery = true)
	int findpasscount(int sem,String dept,String testtype);
	@Query(value = "SELECT COUNT(*) FROM `s_marks` WHERE subcode in(select subcode from g_subjects where sem=?1 and dept=?2) and testtype=?3 and marks<60",nativeQuery = true)
	int findfailcount(int sem,String dept,String testtype);
	@Query(value = "SELECT COUNT(*) FROM `s_marks` WHERE subcode in(select subcode from g_subjects where sem=?1 and dept=?2 and subname=?4) and testtype=?3 and marks>=60 and rollno in(select rollno from s_details where sec=?5)",nativeQuery = true)
	int findpasscountbysubject(int sem,String dept,String testtype,String sub_name,String sec);
	@Query(value = "SELECT COUNT(*) FROM `s_marks` WHERE subcode in(select subcode from g_subjects where sem=?1 and dept=?2 and subname=?4) and testtype=?3 and marks<60 and rollno in(select rollno from s_details where sec=?5)",nativeQuery = true)
	int findfailcountbysubject(int sem,String dept,String testtype,String sub_name,String sec);
	@Query(value="Select * from `s_marks` where staffid='TCS52'",nativeQuery = true)
	List<marks> findmarks();
}
