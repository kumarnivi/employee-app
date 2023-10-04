import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent {

  selectedNavItemText: string = 'Admin view';

  updateSelectedNavItemText(text: string) {
    this.selectedNavItemText = text;
  }

}
