import { SuballocserviceService } from './../services/suballocservice.service';
import { MarksallocService } from './../services/marksalloc.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels'
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-staffdashboard',
  templateUrl: './staffdashboard.component.html',
  styleUrls: ['./staffdashboard.component.css']
})
export class StaffdashboardComponent implements OnInit {
  details:FormGroup;
  passcount:number;
  failcount:number;
  totalcount:number;
  passcountbysub:number;
  failcountbysub:number;
  totalcountbysub:number;
  isset:boolean=false;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    
    },  
  };
  public pieChartLabels: Label[] = [['Pass'], ['Fail']];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(0,255,0,0.3)','rgba(255,0,0,0.3)'],
    },
  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{ gridLines: {
      // display:false
  },
  ticks: {
    stepSize: 10,
    max : 100,
    min: 0
  }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    
    { data: [], label: 'Section A' },
    { data: [], label: 'Section B' },
    { data: [], label: 'Section C' }
  ];
  constructor(private fb:FormBuilder,private service:MarksallocService,private service1:SuballocserviceService) {
    this.details=this.fb.group({
      batch:[''],
      dept:[''],
      sem:[''],
      testtype:['']
    });
   }

  ngOnInit(): void {
  }
onsubmit()
{
  this.service1.getSubjectNames(this.details.get('sem').value,this.details.get('dept').value).subscribe(
    data2=>{
      // this.barChartLabels.push(data);
      for(let j=0;j<data2.length;j++)
      this.barChartLabels[j]=data2[j];
      // console.log(this.barChartData[0].data.length)  
      for(let i=0;i<this.barChartLabels.length;i++)
{
  this.service.getpasscountbysubject(this.details.get('sem').value,this.details.get('dept').value,this.details.get('testtype').value,this.barChartLabels[i],'A').subscribe(
    data1=>{
      this.passcountbysub=data1;
      // console.log(this.passcountbysub);
      // this.barChartData[0].data.push(data)
    }
  )
  this.service.getfailcountbysubject(this.details.get('sem').value,this.details.get('dept').value,this.details.get('testtype').value,this.barChartLabels[i],'A').subscribe(
    data1=>{
      this.failcountbysub=data1;

      // console.log(this.failcountbysub);
      this.totalcountbysub=this.passcountbysub+this.failcountbysub
      // console.log(this.totalcountbysub);
      // for(let k=0;k<this.barChartData[i].data.length;k++)
      // console.log((((this.passcountbysub)/(this.totalcountbysub))*100));
      this.barChartData[0].data[i]=(((this.passcountbysub)/(this.totalcountbysub))*100)
      // console.log(this.barChartData[i].data[i]);
    }
  )
}
for(let i=0;i<this.barChartLabels.length;i++)
{
  this.service.getpasscountbysubject(this.details.get('sem').value,this.details.get('dept').value,this.details.get('testtype').value,this.barChartLabels[i],'B').subscribe(
    data1=>{
      this.passcountbysub=data1;
      // console.log(this.passcountbysub);
      // this.barChartData[0].data.push(data)
    }
  )
  this.service.getfailcountbysubject(this.details.get('sem').value,this.details.get('dept').value,this.details.get('testtype').value,this.barChartLabels[i],'B').subscribe(
    data1=>{
      this.failcountbysub=data1;

      // console.log(this.failcountbysub);
      this.totalcountbysub=this.passcountbysub+this.failcountbysub
      // console.log(this.totalcountbysub);
      // for(let k=0;k<this.barChartData[i].data.length;k++)
      // console.log((((this.passcountbysub)/(this.totalcountbysub))*100));
      this.barChartData[1].data[i]=(((this.passcountbysub)/(this.totalcountbysub))*100)
      // console.log(this.barChartData[i].data[i]);
    }
  )
}
for(let i=0;i<this.barChartLabels.length;i++)
{
  this.service.getpasscountbysubject(this.details.get('sem').value,this.details.get('dept').value,this.details.get('testtype').value,this.barChartLabels[i],'C').subscribe(
    data1=>{
      this.passcountbysub=data1;
      // console.log(this.passcountbysub);
      // this.barChartData[0].data.push(data)
    }
  )
  this.service.getfailcountbysubject(this.details.get('sem').value,this.details.get('dept').value,this.details.get('testtype').value,this.barChartLabels[i],'C').subscribe(
    data1=>{
      this.failcountbysub=data1;

      // console.log(this.failcountbysub);
      this.totalcountbysub=this.passcountbysub+this.failcountbysub
      // console.log(this.totalcountbysub);
      // for(let k=0;k<this.barChartData[i].data.length;k++)
      // console.log((((this.passcountbysub)/(this.totalcountbysub))*100));
      this.barChartData[2].data[i]=(((this.passcountbysub)/(this.totalcountbysub))*100)
      // console.log(this.barChartData[i].data[i]);
    }
  )
}
      // console.log(data[0]);
    }
  )


  // this.service.getpasscountbysubject(this.details.get('sem').value,this.details.get('dept').value,this.details.get('sem').value,this.details.get('testtype').value)
  
  // console.log(this.pieChartData[0]);
  // console.log(this.details.get('batch').value);
  // console.log(this.details.get('dept').value);
  // console.log(this.details.get('testtype').value);
  // console.log(this.details.get('sem').value);
  this.service.getpasscount(this.details.get('sem').value,this.details.get('dept').value,this.details.get('testtype').value).subscribe(
    data=>{
      this.passcount=data;
      console.log(this.passcount);
      // console.log(data);
    }
  )
  this.service.getfailcount(this.details.get('sem').value,this.details.get('dept').value,this.details.get('testtype').value).subscribe(
    data=>{
      this.failcount=data;
      this.totalcount=this.passcount+this.failcount;
      // console.log(this.totalcount);
      this.pieChartData[0]=(this.passcount/this.totalcount)*100;
      this.pieChartData[1]=(this.failcount/this.totalcount)*100;
      // console.log(this.passcount/this.totalcount);
      // console.log(data);
    }
   
  )

  this.isset=true;
}
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}
}
