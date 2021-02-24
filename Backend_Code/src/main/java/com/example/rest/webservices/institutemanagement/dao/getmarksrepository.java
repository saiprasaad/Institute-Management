package com.example.rest.webservices.institutemanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.rest.webservices.institutemanagement.login.getmarks;

public interface getmarksrepository extends JpaRepository<getmarks,Integer>{
	@Query(value = "SELECT s_marks.id,s_marks.marks,s_marks.subcode,s_marks.staffid,g_subjects.subname FROM s_marks,g_subjects WHERE s_marks.subcode=g_subjects.subcode and rollno=?1 and testtype=?2 and g_subjects.sem=?3",nativeQuery = true)
	List<getmarks> findByRollno(String rollno,String testtype,int sem);

}
