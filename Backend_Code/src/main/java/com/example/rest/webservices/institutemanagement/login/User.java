package com.example.rest.webservices.institutemanagement.login;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="s_details")
public class User {
    @Id
    @GeneratedValue
    public int id;
	public String rollno;
    public String name;
    public String degree;
    public int batch;
    public String dept;
    public String sec;
    public String password;
    
    public String address;
    public int pincode;
    public String phoneno;
    public String emailid;
    public String quota;
    public String gender;
    public String dayorhostel;

	public int getId() {
		return id;
	}
	public String getRollno() {
		return rollno;
	}
	public String getName() {
		return name;
	}
	public String getDegree() {
		return degree;
	}
	public int getBatch() {
		return batch;
	}
	public String getDept() {
		return dept;
	}
	public String getSec() {
		return sec;
	}
	public String getPassword() {
		return password;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public void setBatch(int batch) {
		this.batch = batch;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public void setSec(String sec) {
		this.sec = sec;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setRollno(String rollno) {
		this.rollno = rollno;
	}
	
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getQuota() {
		return quota;
	}
	public void setQuota(String quota) {
		this.quota = quota;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDayorhostel() {
		return dayorhostel;
	}
	public void setDayorhostel(String dayorhostel) {
		this.dayorhostel = dayorhostel;
	}
	
	
	
//	public User(String rollNo, String name, String degree, String batch, String dept, String sec, String password) {
//		super();
//		this.rollno = rollNo;
//		this.name = name;
//		this.degree = degree;
//		this.batch = batch;
//		this.dept = dept;
//		this.sec = sec;
//		this.password = password;
//	}
    
	
}
