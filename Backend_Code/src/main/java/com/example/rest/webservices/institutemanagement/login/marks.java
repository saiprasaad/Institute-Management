package com.example.rest.webservices.institutemanagement.login;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="s_marks")
public class marks {
	 @Id
	 @GeneratedValue
	 public int id;
		public String rollno;
		public String testtype;
		public int marks;
	    public String subcode;
	    public String staffid;
		public int getId() {
			return id;
		}
		public String getRollno() {
			return rollno;
		}
		public String getTesttype() {
			return testtype;
		}
		public int getMarks() {
			return marks;
		}
		public String getSubcode() {
			return subcode;
		}
		public String getStaffid() {
			return staffid;
		}
		public void setId(int id) {
			this.id = id;
		}
		public void setRollno(String rollno) {
			this.rollno = rollno;
		}
		public void setTesttype(String testtype) {
			this.testtype = testtype;
		}
		public void setMarks(int marks) {
			this.marks = marks;
		}
		public void setSubcode(String subcode) {
			this.subcode = subcode;
		}
		public void setStaffid(String staffid) {
			this.staffid = staffid;
		}
	    
}
