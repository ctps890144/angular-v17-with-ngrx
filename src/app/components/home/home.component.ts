import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private dataService: DataService) {
    if (this.dataService.allLoc.length === 0) {
      this.dataService.initAllData().subscribe();
    }
  }

  get allLoc() {
    return this.dataService.allLoc;
  }
}
