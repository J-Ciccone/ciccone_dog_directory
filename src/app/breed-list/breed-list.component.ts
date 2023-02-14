import { Component, OnInit } from '@angular/core';
import { BreedDataService } from 'src/services/breedData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {

  constructor(private breedDataService: BreedDataService, private router: Router) { }

  breedList: string[] = [];

  ngOnInit(): void {
    /**
     * Fetch the list of dog breeds from the api using our breed data service
     */
    this.breedDataService.getAllBreeds().subscribe(breeds => {
      this.breedList = breeds;
    });
  }
  
  /**
   * Navigate to the breed specified by the selected list item
   * @param breed 
   */
  navigateToBreedDetail(breed: string) {
    this.router.navigate(['breed-list', breed]);
  }

  
}
