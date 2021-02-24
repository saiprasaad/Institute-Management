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
public class getmarks {
	 @Id
	 @GeneratedValue
	 public int id;
		public int marks;
	    public String subcode;
	    public String staffid;
	    public String subname;
		public int getId() {
			return id;
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
		public String getSubname() {
			return subname;
		}
		public void setId(int id) {
			this.id = id;
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
		public void setSubname(String subname) {
			this.subname = subname;
		}
	    

}
