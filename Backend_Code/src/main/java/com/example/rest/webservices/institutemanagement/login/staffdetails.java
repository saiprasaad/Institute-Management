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
@Table(name="t_subdetails")
public class staffdetails {
	 @Id
	    @GeneratedValue
	    public int id;
		public int batch;
	    public String dept;
	    public int sem;
	    public String sec;
	    public String subcode;
	    public String staffid;
		public int getId() {
			return id;
		}
		public int getBatch() {
			return batch;
		}
		public String getDept() {
			return dept;
		}
		public int getSem() {
			return sem;
		}
		public String getSec() {
			return sec;
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
		public void setBatch(int batch) {
			this.batch = batch;
		}
		public void setDept(String dept) {
			this.dept = dept;
		}
		public void setSem(int sem) {
			this.sem = sem;
		}
		public void setSec(String sec) {
			this.sec = sec;
		}
		public void setSubcode(String subcode) {
			this.subcode = subcode;
		}
		public void setStaffid(String staffid) {
			this.staffid = staffid;
		}
	    
}
