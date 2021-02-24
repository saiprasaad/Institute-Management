package com.example.rest.webservices.institutemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest.webservices.institutemanagement.login.feedbackform;

public interface feedbackrepository extends JpaRepository<feedbackform,Integer>{
	@Query(value="SELECT COUNT(t1) from t_feedback where batch=?1 and dept=?2 and sec=?3 and staffid=?4 and subcode=?5 and t1=?6",nativeQuery = true)
	 int gett1count(int batch,String dept,String sec,String staffid,String subcode,int p);
	@Query(value="SELECT COUNT(t2) from t_feedback where batch=?1 and dept=?2 and sec=?3 and staffid=?4 and subcode=?5 and t2=?6",nativeQuery = true)
	 int gett2count(int batch,String dept,String sec,String staffid,String subcode,int p);
	@Query(value="SELECT COUNT(t3) from t_feedback where batch=?1 and dept=?2 and sec=?3 and staffid=?4 and subcode=?5 and t3=?6",nativeQuery = true)
	 int gett3count(int batch,String dept,String sec,String staffid,String subcode,int p);
	@Query(value="SELECT COUNT(t4) from t_feedback where batch=?1 and dept=?2 and sec=?3 and staffid=?4 and subcode=?5 and t4=?6",nativeQuery = true)
	 int gett4count(int batch,String dept,String sec,String staffid,String subcode,int p);
}
