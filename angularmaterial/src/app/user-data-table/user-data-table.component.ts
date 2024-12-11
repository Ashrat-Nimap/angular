import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface userdetails {
  firstname:string,
  lastname:string,
  age:number,
  email:string
}

const ELEMENT_DATA: userdetails[] = [
  { firstname: 'Ashrat', lastname: 'Shaikh', age: 23 ,email: 'shaikhashratali899@gmail.com'},
  { firstname: 'Prerna', lastname: 'Gupta', age: 22 ,email: 'prernagupta@gmail.com'},
  { firstname: 'Aman', lastname: 'kanojiya', age: 24 ,email: 'amank@gmail.com'},
  { firstname: 'Aftab', lastname: 'Shaikh', age: 23 ,email: 'aftabs@gmail.com'},
  { firstname: 'Shahid', lastname: 'Shaikh', age: 23 ,email: 'shahidsha@gmail.com'},
  { firstname: 'Preeti', lastname: 'shah', age: 23 ,email: 'preetisha@gmail.com'},
  { firstname: 'Nisha', lastname: 'khan', age: 23 ,email: 'nishakha@gmail.com'},
  { firstname: 'hema', lastname: 'Solanki', age: 23 ,email: 'hemasolanki@gmail.com'},

];
@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrl: './user-data-table.component.css',
  
})
export class UserDataTableComponent implements AfterViewInit{

  displayedColumns: string[] = ['firstname', 'lastname', 'age','email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator ;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
