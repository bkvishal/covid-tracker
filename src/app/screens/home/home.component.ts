import {Component, OnInit, ViewChild} from '@angular/core';
import {BackendApiService} from '../Service/backend-api.service';
import {MatTab} from '@angular/material/tabs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CountryModel} from './countryModel';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: CountryModel[];
  displayedColumns: string[] = ['country', 'cases', 'active', 'recovered',
    'todayCases', 'deaths', 'todayDeaths', 'todayRecovered'];
  dataSource: MatTableDataSource<CountryModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: BackendApiService) { }

  ngOnInit(): void {
    this.api.getAll()
      .subscribe((res : CountryModel[]) => {
        this.item = res;
        this.dataSource = new MatTableDataSource<CountryModel>(this.item);
        this.dataSource.paginator = this.paginator;
        console.log(res);
      } );
  }



}
