import { Component, OnInit } from '@angular/core';
import { Router,  } from '@angular/router';
import { NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {
  

  activeLink: string = '/';

  activeButton: number | null = 1;

  isSidebarOpen = true;
  shouldDisplayContent = false; 
  marginRightValue = '250px'; 
  translateXValue = '0'; 
 

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.shouldDisplayContent = !this.isSidebarOpen; 
  
    
    this.translateXValue = this.isSidebarOpen ? '0' : '-100px';
  }

  showContentt(buttonNumber: number) {
    this.activeButton = buttonNumber;

  }

  openModal(){
    const modelDiv =   document.getElementById('myModel');
  if(modelDiv != null){
    modelDiv.style.display = 'block';
  }
  }
  
  closeModel(){
    const modelDiv =   document.getElementById('myModel');
  if(modelDiv != null){
    modelDiv.style.display = 'none';
  }
  }

}
