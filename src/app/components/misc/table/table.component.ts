import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  database = new DataBase();
  dataSource: dataSource | null;

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new dataSource(this.database, this.sort);
  }
}

// Local data
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}

export class DataBase {
  // Stream that emits whenever the data has been modified
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users
    for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  // Adds a new user to the database
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  // Builds and returns a new User
  private createNewUser() {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: (this.data.length + 1).toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
}

// Data source to provide what data should be rendered in the table
export class dataSource extends DataSource<any> {
    constructor(private database: DataBase, private sort: MatSort) {
    super();
    }

    connect(): Observable<UserData[]> {
    const displayDataChanges = [
        this.database.dataChange,
        this.sort.sortChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
        return this.getSortedData();
    });
    }

    disconnect() {}

    // Sorting the database data
    getSortedData(): UserData[] {
    const data = this.database.data.slice();
    if (!this.sort.active || this.sort.direction === '') { return data; }

    return data.sort((a, b) => {
        let propertyA: number|string = '';
        let propertyB: number|string = '';

        switch (this.sort.active) {
        case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;
        case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
        }

        const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

        return (valueA < valueB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
    });
    }
}
