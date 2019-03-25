import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  
  ProcessInstance,
   ProcessService } from '@alfresco/adf-process-services';


@Component({
  selector: 'app-processlist',
  templateUrl: './processlist.component.html',
  styleUrls: ['./processlist.component.scss']
})
export class ProcesslistComponent implements OnInit {
  
  processInstanceDetails: ProcessInstance;


processId: string;
logService: any;

constructor(private activitiProcess: ProcessService,
   private route: ActivatedRoute,
   private router:Router) { }


ngOnInit() {
this.route.params.subscribe(params => {
const processId = params['processInstanceId'];
if (processId && processId !== '0') {
this.processId = params['processInstanceId'];
this.loadProcessDetails(this.processId);
}
})
}
loadProcessDetails(processId: string) {
if (processId) {
this.activitiProcess.getProcess(processId).subscribe(
(res: ProcessInstance) => {
this.processInstanceDetails = res;
}
);
}
}

onTaskClick(data: any) 
{
 this.router.navigate(['/apps',this.processId||0, 'task',data.value.id]); 
}



}