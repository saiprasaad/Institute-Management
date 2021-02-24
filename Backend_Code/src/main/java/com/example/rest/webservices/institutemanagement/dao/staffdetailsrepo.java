package com.example.rest.webservices.institutemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest.webservices.institutemanagement.login.staffinfo;

public interface staffdetailsrepo extends JpaRepository<staffinfo,Integer>{
	staffinfo findByStaffid(String staffid);
	List<staffinfo> findAll();
	@Query(value = "SELECT CONCAT(staffid, ' ',staffname) from t_details",nativeQuery = true)
	List<String> findAllStaffs();
	@Query(value = "SELECT DISTINCT CONCAT(staffid, ' ',staffname) from t_details where staffid in(select staffid from t_subdetails where subcode=?1 and sec=?2)",nativeQuery = true)
	String findStaffbySubcode(String subcode,String sec);
	@Query(value = "SELECT DISTINCT staffname from t_details where staffid in(select staffid from t_subdetails where subcode=?1 and sec=?2)",nativeQuery = true)
	String findStaffNamebySubcode(String subcode,String sec);

}
