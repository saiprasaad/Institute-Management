package com.example.rest.webservices.institutemanagement;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.rest.webservices.institutemanagement.login.User;
import com.example.rest.webservices.institutemanagement.login.feedbackform;
import com.example.rest.webservices.institutemanagement.login.getmarks;
import com.example.rest.webservices.institutemanagement.login.marks;
import com.example.rest.webservices.institutemanagement.login.staffdetails;
import com.example.rest.webservices.institutemanagement.login.staffinfo;
import com.example.rest.webservices.institutemanagement.login.subjectdetails;
import com.example.rest.webservices.institutemanagement.login.viewstaffdetails;
import com.example.rest.webservices.institutemanagement.service.PDFGenerator;
import com.example.rest.webservices.institutemanagement.dao.Userrepository;
import com.example.rest.webservices.institutemanagement.dao.feedbackrepository;
import com.example.rest.webservices.institutemanagement.dao.getfeedbackrepository;
import com.example.rest.webservices.institutemanagement.dao.getmarksrepository;
import com.example.rest.webservices.institutemanagement.dao.loginrepository;
import com.example.rest.webservices.institutemanagement.dao.marksrepository;
import com.example.rest.webservices.institutemanagement.dao.staffdetailsrepo;
import com.example.rest.webservices.institutemanagement.dao.subjectallocation;
import com.example.rest.webservices.institutemanagement.dao.subjectrepo;
import com.example.rest.webservices.institutemanagement.dao.viewstaffrepo;
import com.example.rest.webservices.institutemanagement.login.subdetailsclass;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
@SpringBootApplication
@RestController
@CrossOrigin(origins="*")
public class InstitutemanagementApplication {
@Autowired
private loginrepository userrepo;

@PostMapping("/register")
public String register(@RequestBody User user)
{
	userrepo.save(user);
	 return "Hi " + user.getName() + " your Registration process successfully completed";
}
@GetMapping("/login/{rollno}")
public User login(@PathVariable String rollno)
{
	System.out.println(rollno);
	return userrepo.findByrollno(rollno);
}
@GetMapping("/findAll/{dept}/{sec}/{batch}")
public List<User> findAll(@PathVariable String dept,@PathVariable String sec,@PathVariable int batch)
{
	return userrepo.findAllRollNo(dept,sec,batch);
}
@Autowired
private subjectallocation subrepo;
@PostMapping("/suballoc")
public String subjectallocation(@RequestBody staffdetails sub)
{
	subrepo.save(sub);
	return "successfully saved";
}

@Autowired
private subjectallocation staffsub;
@GetMapping("/staffdetails")
public List<staffdetails> staffsubdetails()
{
	return staffsub.findAll();
}

@Autowired
private viewstaffrepo viewstaff;
@GetMapping("/viewstaffalloc/{sem}/{batch}/{dept}/{sec}")
public List<viewstaffdetails> viewstaffalloc(@PathVariable int sem,@PathVariable int batch,@PathVariable String dept,@PathVariable String sec)
{
	return viewstaff.viewStaffdetails(sem,batch,dept,sec);
}
@Autowired
private getfeedbackrepository getfeedbackrepo;
@GetMapping("/viewstaffdetails/{dept}/{staffid}/{sec}/{sem}")
public List<subdetailsclass> viewstaffdetails(@PathVariable String dept,@PathVariable String staffid,@PathVariable String sec,@PathVariable int sem)
{
	return getfeedbackrepo.viewsubdetails(dept, staffid, sec,sem);
}
@GetMapping("/viewstaffdetails1/{dept}/{sec}/{sem}")
public List<subdetailsclass> viewstaffdetails1(@PathVariable String dept,@PathVariable String sec,@PathVariable int sem)
{
	return getfeedbackrepo.viewsubdetails1(dept,sec,sem);
}
@Autowired
private subjectrepo subdetails;
@GetMapping("/subdetails/{sem}/{dept}")
public List<subjectdetails> staffsubdetails1(@PathVariable int sem,@PathVariable String dept)
{
	return subdetails.findBySemAndDept(sem, dept);
}
@GetMapping("/getAllsubjects/{sem}/{dept}")
public List<String> getAllSubjects(@PathVariable int sem,@PathVariable String dept)
{
	return subdetails.findAllsubjects(sem, dept);
}
@GetMapping("/getAllsubjectdetails/{sem}/{dept}")
public List<subjectdetails> getAllsubjectdetails(@PathVariable int sem,@PathVariable String dept)
{
	return subdetails.findAllsubjectsdetails(sem, dept);
}
@GetMapping("getSubname/{subcode}")
public String getSubname(@PathVariable String subcode)
{
	return this.subdetails.findsubnamebysubcode(subcode);
}
@Autowired
private marksrepository marksrepo;
@PostMapping("/marksalloc")
public String marksalloc(@RequestBody marks mark)
{
	marksrepo.save(mark);	
	return "marks added successfully";
}
@GetMapping("/getpasscount/{sem}/{dept}/{testtype}")
public int getpasscount(@PathVariable int sem,@PathVariable String dept,@PathVariable String testtype)
{
	return marksrepo.findpasscount(sem,dept,testtype);
}
@GetMapping("/getfailcount/{sem}/{dept}/{testtype}")
public int getfailcount(@PathVariable int sem,@PathVariable String dept,@PathVariable String testtype)
{
	return marksrepo.findfailcount(sem,dept,testtype);
}
@GetMapping("/getpasscountbysubject/{sem}/{dept}/{testtype}/{sub_name}/{sec}")
public int getpasscount(@PathVariable int sem,@PathVariable String dept,@PathVariable String testtype,@PathVariable String sub_name,@PathVariable String sec)
{
	return marksrepo.findpasscountbysubject(sem, dept, testtype, sub_name,sec);
}
@GetMapping("/getfailcountbysubject/{sem}/{dept}/{testtype}/{sub_name}/{sec}")
public int getfailcount(@PathVariable int sem,@PathVariable String dept,@PathVariable String testtype,@PathVariable String sub_name,@PathVariable String sec)
{
	return marksrepo.findfailcountbysubject(sem, dept, testtype, sub_name,sec);
}
@Autowired
private getmarksrepository getmarksrepo;
@GetMapping("/getMarksbyrollno/{rollno}/{testtype}/{sem}")
public List<getmarks> getMarks(@PathVariable String rollno,@PathVariable String testtype,@PathVariable int sem) 
{
//	System.out.println(rollno);
	return getmarksrepo.findByRollno(rollno,testtype,sem);
}

@Autowired
private staffdetailsrepo staffrepo;
@GetMapping("/stafflogin/{staffid}")
public staffinfo getAllStaffs(@PathVariable String staffid)
{
	return staffrepo.findByStaffid(staffid);
}
@GetMapping("/getAllStaffs")
public List<String> getAllStaffs()
{
	return staffrepo.findAllStaffs();
}
@GetMapping("/getStaffbysubcode/{subcode}/{sec}")
public String getStaffbysubcode(@PathVariable String subcode,@PathVariable String sec)
{
	return this.staffrepo.findStaffbySubcode(subcode,sec);
}
@GetMapping("/getStaffNamebysubcode/{subcode}/{sec}")
public String getStaffNamebysubcode(@PathVariable String subcode,@PathVariable String sec)
{
	return this.staffrepo.findStaffNamebySubcode(subcode,sec);
}
@Autowired
private Userrepository studentrepo;
@GetMapping("/getStudentDetails/{rollno}")
public User getStudentDetails(@PathVariable String rollno)
{
	return studentrepo.findByrollno(rollno);
}
@GetMapping("/getdept/{rollno}")
public String getDept(@PathVariable String rollno)
{
	return studentrepo.findDept(rollno);
}
@Autowired
private feedbackrepository feedbackrepo;
@PostMapping("/submitfeedback")
public String submitfeedback(@RequestBody feedbackform form)
{
	feedbackrepo.save(form);
	return "Feedback saved Successfully";
}
@GetMapping("/gett1count/{batch}/{dept}/{sec}/{staffid}/{subcode}/{p}")
public int gett1count(@PathVariable int batch,@PathVariable String dept,@PathVariable String sec,@PathVariable String staffid,@PathVariable String subcode,@PathVariable int p)
{
	return feedbackrepo.gett1count(batch, dept, sec, staffid, subcode ,p);
}
@GetMapping("/gett2count/{batch}/{dept}/{sec}/{staffid}/{subcode}/{p}")
public int gett2count(@PathVariable int batch,@PathVariable String dept,@PathVariable String sec,@PathVariable String staffid,@PathVariable String subcode,@PathVariable int p)
{
	return feedbackrepo.gett2count(batch, dept, sec, staffid, subcode ,p);
}
@GetMapping("/gett3count/{batch}/{dept}/{sec}/{staffid}/{subcode}/{p}")
public int gett3count(@PathVariable int batch,@PathVariable String dept,@PathVariable String sec,@PathVariable String staffid,@PathVariable String subcode,@PathVariable int p)
{
	return feedbackrepo.gett3count(batch, dept, sec, staffid, subcode ,p);
}
@GetMapping("/gett4count/{batch}/{dept}/{sec}/{staffid}/{subcode}/{p}")
public int gett4count(@PathVariable int batch,@PathVariable String dept,@PathVariable String sec,@PathVariable String staffid,@PathVariable String subcode,@PathVariable int p)
{
	return feedbackrepo.gett4count(batch, dept, sec, staffid, subcode ,p);
}
@Autowired
private getmarksrepository getmarksrepo1;

@GetMapping(value = "/pdf/marks/{rollno}/{testtype}/{sem}",
produces = MediaType.APPLICATION_PDF_VALUE)
public ResponseEntity<InputStreamResource> marksReport(@PathVariable String rollno,@PathVariable String testtype,@PathVariable int sem) throws IOException {
	 List<getmarks> marks1 = (List<getmarks>) getmarksrepo1.findByRollno(rollno, testtype, sem);
	 String name="";
	 name=getStudentName(rollno);
	ByteArrayInputStream bis = PDFGenerator.marksPDFReport(marks1,rollno,name,testtype);
	HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Disposition", "inline; filename=Marks.pdf");
    return ResponseEntity
            .ok()
            .headers(headers)
            .contentType(MediaType.APPLICATION_PDF)
            .body(new InputStreamResource(bis));
}
@Autowired
private Userrepository userrep;
@GetMapping("/getStudentName/{rollno}")
public String getStudentName(@PathVariable String rollno)
{
	return userrep.findName(rollno);
}
//@GetMapping("/studentdetails/{batch}/{subcode}")
//public List<String> studentdetails(@PathVariable int batch)
	public static void main(String[] args) {
		SpringApplication.run(InstitutemanagementApplication.class, args);
		System.out.println("Hello World");
	}

}
