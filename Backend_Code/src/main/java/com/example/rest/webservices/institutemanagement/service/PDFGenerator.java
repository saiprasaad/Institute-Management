package com.example.rest.webservices.institutemanagement.service;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.stream.Stream;

import com.example.rest.webservices.institutemanagement.dao.Userrepository;
import com.example.rest.webservices.institutemanagement.login.getmarks;
import com.example.rest.webservices.institutemanagement.login.marks;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
public class PDFGenerator {

	private static Logger logger = LoggerFactory.getLogger(PDFGenerator.class);
	public static ByteArrayInputStream marksPDFReport(List<getmarks> marks,String rollno,String name,String testtype) {
	Document document = new Document();

    ByteArrayOutputStream out = new ByteArrayOutputStream();
    try {
        
        PdfWriter.getInstance(document, out);
          document.open();
        Font font = FontFactory.getFont(FontFactory.COURIER, 14, BaseColor.BLACK);
        Paragraph para = new Paragraph(testtype.toUpperCase()+" Marks", font);
        para.setAlignment(Element.ALIGN_CENTER);
        Paragraph para1 = new Paragraph("Student RollNo: "+rollno, font);
        para1.setAlignment(Element.ALIGN_CENTER);
        Paragraph para2 = new Paragraph("Student Name: "+name, font);
        para2.setAlignment(Element.ALIGN_CENTER);
        document.add(para);
        document.add(para1);
        document.add(para2);
        document.add(Chunk.NEWLINE);
        PdfPTable table = new PdfPTable(3);
        // Add PDF Table Header ->
          Stream.of("Subject code","Subject Name","Marks")
            .forEach(headerTitle -> {
                PdfPCell header = new PdfPCell();
                Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
                header.setBackgroundColor(BaseColor.LIGHT_GRAY);
                header.setHorizontalAlignment(Element.ALIGN_CENTER);
                header.setBorderWidth(2);
                header.setPhrase(new Phrase(headerTitle, headFont));
                table.addCell(header);
            }); 
          for (getmarks var : marks) {
              PdfPCell subcodeCell = new PdfPCell(new Phrase(String.valueOf(var.getSubcode())));
              subcodeCell.setPaddingLeft(3);
              subcodeCell.setPaddingTop(3);
              subcodeCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
              subcodeCell.setHorizontalAlignment(Element.ALIGN_CENTER);
                table.addCell(subcodeCell);
 
                PdfPCell subnameCell = new PdfPCell(new Phrase(String.valueOf(var.getSubname())));
                subnameCell.setPaddingLeft(6);
                subnameCell.setPaddingTop(3);
                subnameCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                subnameCell.setHorizontalAlignment(Element.ALIGN_CENTER);
                table.addCell(subnameCell);
 
                PdfPCell marksCell = new PdfPCell(new Phrase(String.valueOf(var.getMarks())));
                marksCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                marksCell.setHorizontalAlignment(Element.ALIGN_CENTER);
                marksCell.setPaddingRight(6);
                marksCell.setPaddingTop(3);
                table.addCell(marksCell);
                
            }
          document.add(table);  
        document.close();
    }
    catch(DocumentException e) {
      logger.error(e.toString());
    }
    return new ByteArrayInputStream(out.toByteArray());
}
}
