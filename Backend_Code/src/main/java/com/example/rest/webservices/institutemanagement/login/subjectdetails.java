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
@Table(name="g_subjects")
public class subjectdetails {
	@Id
    @GeneratedValue
    public int id;
    public String subcode;
	public String subname;
	public int sem;
	public String dept;
	public String getSubcode() {
		return subcode;
	}
	public String getSubname() {
		return subname;
	}
	public int getSem() {
		return sem;
	}
	public String getDept() {
		return dept;
	}
	public void setSubcode(String subcode) {
		this.subcode = subcode;
	}
	public void setSubname(String subname) {
		this.subname = subname;
	}
	public void setSem(int sem) {
		this.sem = sem;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	
}
