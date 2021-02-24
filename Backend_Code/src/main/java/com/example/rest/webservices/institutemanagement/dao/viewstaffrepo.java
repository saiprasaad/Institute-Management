package com.example.rest.webservices.institutemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest.webservices.institutemanagement.login.subdetailsclass;
import com.example.rest.webservices.institutemanagement.login.viewstaffdetails;

public interface viewstaffrepo extends JpaRepository<viewstaffdetails,Integer>{
	List<viewstaffdetails> findAll();
	  @Query(value = "SELECT t_subdetails.subcode,t_subdetails.staffid,t_details.staffname,g_subjects.subname FROM t_subdetails,t_details,g_subjects where g_subjects.subcode=t_subdetails.subcode and t_subdetails.staffid=t_details.staffid and t_subdetails.sem=?1 and t_subdetails.batch=?2 and t_subdetails.dept=?3 and t_subdetails.sec=?4",nativeQuery = true)
		List<viewstaffdetails> viewStaffdetails(int sem,int batch,String dept,String sec);
		
	 
}
