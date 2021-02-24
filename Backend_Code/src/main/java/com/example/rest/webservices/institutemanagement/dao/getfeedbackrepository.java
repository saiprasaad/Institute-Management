package com.example.rest.webservices.institutemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.rest.webservices.institutemanagement.login.subdetailsclass;

public interface getfeedbackrepository extends JpaRepository<subdetailsclass,Integer>{
	@Query(value="SELECT t_subdetails.subcode,g_subjects.subname from t_subdetails,g_subjects where t_subdetails.dept=?1 and t_subdetails.staffid=?2 and t_subdetails.sec=?3 and t_subdetails.sem=?4 and t_subdetails.subcode =g_subjects.subcode",nativeQuery = true)
	 List<subdetailsclass> viewsubdetails(String dept,String staffid,String sec,int sem);
		@Query(value="SELECT t_subdetails.subcode,g_subjects.subname from t_subdetails,g_subjects where t_subdetails.dept=?1 and t_subdetails.sec=?2 and t_subdetails.sem=?3 and t_subdetails.subcode =g_subjects.subcode",nativeQuery = true)
		 List<subdetailsclass> viewsubdetails1(String dept,String sec,int sem);
	 
}
