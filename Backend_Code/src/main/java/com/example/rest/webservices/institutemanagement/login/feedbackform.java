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
@Table(name="t_feedback")
public class feedbackform {
	 @Id
	    @GeneratedValue
	    public int id;
	    public String subcode;
	    public String staffid;
	    public String sec;
		public int t1;
		public int t2;
		public int t3;
		public int t4;
		public int batch;
		public String dept;
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getSubcode() {
			return subcode;
		}
		public void setSubcode(String subcode) {
			this.subcode = subcode;
		}
		public String getStaffid() {
			return staffid;
		}
		public void setStaffid(String staffid) {
			this.staffid = staffid;
		}
		public String getSec() {
			return sec;
		}
		public void setSec(String sec) {
			this.sec = sec;
		}
		public int getT1() {
			return t1;
		}
		public void setT1(int t1) {
			this.t1 = t1;
		}
		public int getT2() {
			return t2;
		}
		public void setT2(int t2) {
			this.t2 = t2;
		}
		public int getT3() {
			return t3;
		}
		public void setT3(int t3) {
			this.t3 = t3;
		}
		public int getT4() {
			return t4;
		}
		public void setT4(int t4) {
			this.t4 = t4;
		}
		public int getBatch() {
			return batch;
		}
		public void setBatch(int batch) {
			this.batch = batch;
		}
		public String getDept() {
			return dept;
		}
		public void setDept(String dept) {
			this.dept = dept;
		}
		
}
