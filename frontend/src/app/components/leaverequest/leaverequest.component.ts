import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.scss']
})
export class LeaverequestComponent implements OnInit{
 

  data: any[] = []; // Your table data
  itemsPerPage = 3; // Number of items to display per page
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
        src:'../../../assets/schedule.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },

      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'

      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      }, {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '21st Jan to 24th',
        type: 'Casual',
        status: 'Pending',
        src:'../../../assets/schedule.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },

      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'

      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      }, {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '21st Jan to 24th',
        type: 'Casual',
        status: 'Pending',
        src:'../../../assets/schedule.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },

      {
        duration: '25th Feb to 28th',
        type: 'Annual',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'

      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      }, {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      {
        duration: '25th Feb to 28th',
        type: 'Medical',
        status: 'Approved',
        src:'../../../assets/coconut-tree.png'
      },
      // Add more data items as needed
    ];


    // Calculate the total number of pages
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);

    // Initialize the pages array
    this.updatePages();
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

  // Function to set the current page
  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateVisiblePages();
    }
  }

  // Function to navigate to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePages();
    }
  }

  // Function to navigate to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePages();
    }
  }

}
