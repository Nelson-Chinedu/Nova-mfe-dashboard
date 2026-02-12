import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
  displayedColumns: string[] = ['employee_name', 'department', 'job_title'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  employee_name: string;
  department: string;
  job_title: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { employee_name: 'Hydrogen', department: 'Design', job_title: 'Designer' },
  {
    employee_name: 'Helium',
    department: 'Marketing',
    job_title: 'Marketing Specialist',
  },
  {
    employee_name: 'Lithium',
    department: 'Engineering',
    job_title: 'Software Engineer',
  },
  {
    employee_name: 'Beryllium',
    department: 'Operations',
    job_title: 'Operations Manager',
  },
  { employee_name: 'Boron', department: 'Finance', job_title: 'Financial Analyst' },
];
