import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-table',
  templateUrl: './manage-table.component.html',
  styleUrls: ['./manage-table.component.scss']
})
export class ManageTableComponent implements OnInit {

  selectedType: string | null = 'Sort by';
  originalData: any[] = [];
  data: any[] = []; // Your table data
  itemsPerPage = 5; // Number of items to display per page
  currentPage = 1; // Current page number
  totalPages!: number;
  pages: number[] = [];
  visiblePages: number[] = [];
  constructor() {}

  ngOnInit(): void {
    // Populate your data here (replace with your actual data)
    this.data = [
      {
        duration: '21st Jan to 24th',
        type: 'Casual',
        status: 'Pending',
        src:'../../../assets/schedule.png',
        day: '1 Day',
        dot: '../../../assets/woman-128.png',
        name: 'Cameron Williomson',
        round: ''
      },
      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Denied',
        src:'../../../assets/coconut-tree.png',
        day: 'Half Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Jenny Willson'
      },

      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png',
        day: 'Half Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Lesile Alexander '
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/medical.png',
        day: '2 Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Guy Swaking'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/medical.png',
        dot:'	../../../assets/woman-128.png',
        name: 'Guy Swaking'
      },
     
      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Denied',
        src:'../../../assets/coconut-tree.png',
        day: 'Half Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Jenny Willson'
      },

      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png',
        day: 'Half Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Lesile Alexander '
      },
      {
        duration: '21st Jan to 24th',
        type: 'Casual',
        status: 'Pending',
        src:'../../../assets/schedule.png',
        day: '1 Day',
        dot: '../../../assets/woman-128.png',
        name: 'Cameron Williomson',
        round: ''
      },
     
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/medical.png',
        dot:'	../../../assets/woman-128.png',
        name: 'Guy Swaking'
      },
      {
        duration: '21st Jan to 24th',
        type: 'Casual',
        status: 'Pending',
        src:'../../../assets/schedule.png',
        day: '1 Day',
        dot: '../../../assets/woman-128.png',
        name: 'Cameron Williomson',
        round: ''
      },
     

      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png',
        day: 'Half Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Lesile Alexander '
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/medical.png',
        day: '2 Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Guy Swaking'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/medical.png',
        day: '2 Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Guy Swaking'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/medical.png',
        dot:'	../../../assets/woman-128.png',
        name: 'Guy Swaking'
      },
      {
        duration: '21st Jan to 24th',
        type: 'Casual',
        status: 'Pending',
        src:'../../../assets/schedule.png',
        day: '1 Day',
        dot: '../../../assets/woman-128.png',
        name: 'Cameron Williomson',
        round: ''
      },
      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Denied',
        src:'../../../assets/coconut-tree.png',
        day: 'Half Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Jenny Willson'
      },

      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png',
        day: 'Half Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Lesile Alexander '
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/medical.png',
        day: '2 Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Guy Swaking'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/medical.png',
        dot:'	../../../assets/woman-128.png',
        name: 'Guy Swaking'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/medical.png',
        dot:'	../../../assets/woman-128.png',
        name: 'Guy Swaking'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png',
        day: 'Half Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Lesile Alexander '
      },
      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Denied',
        src:'../../../assets/coconut-tree.png',
        day: 'Half Day',
        dot:'	../../../assets/woman-128.png',
        name: 'Jenny Willson'
      },
      
    ];

    this.originalData = [...this.data];

    // Calculate the total number of pages
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);

    // Initialize the pages array
    this.updatePages();
  }

 
  filterDataByType(): void {
    if (this.selectedType === 'All') {    
      this.data = [...this.originalData];
    } else if (this.selectedType) {    
      this.data = this.originalData.filter(item => item.type === this.selectedType);
    } else { 
      this.data = [...this.originalData];
    }
  

    // Recalculate the total number of pages and update the pages array
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    this.updatePages();
  
    // Reset the current page to 1
    this.currentPage = 1;
  }

  // Helper function to update the pages array
  updatePages(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.updateVisiblePages();
  }

  updateVisiblePages(): void {
    const maxVisiblePages = 5; // Adjust the number of visible pages as needed
    const middlePage = Math.floor(maxVisiblePages / 2);

    if (this.totalPages <= maxVisiblePages) {
      this.visiblePages = this.pages;
    } else if (this.currentPage <= middlePage) {
      this.visiblePages = this.pages.slice(0, maxVisiblePages);
    } else if (this.currentPage >= this.totalPages - middlePage) {
      this.visiblePages = this.pages.slice(this.totalPages - maxVisiblePages);
    } else {
      this.visiblePages = this.pages.slice(
        this.currentPage - middlePage - 1,
        this.currentPage + middlePage
      );
    }
  }


  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateVisiblePages();
    }
  }

 
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePages();
    }
  }

 
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePages();
    }
  }

}
