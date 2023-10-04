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
