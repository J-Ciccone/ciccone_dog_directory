import { Component, OnInit } from '@angular/core';
import { BreedDataService } from 'src/services/breedData.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breed-information',
  templateUrl: './breed-information.component.html',
  styleUrls: ['./breed-information.component.css'],
})
export class BreedInformationComponent implements OnInit {
  selectedBreed: string = '';
  breedImageUrl: string = '';

  constructor(
    private breedDataService: BreedDataService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    /**
     * When we navigate to a breed specific page, get the breed id from the url params
     * use this url to display the current breeds image by utilizing the Breed data service
     */
    this.activeRoute.params.subscribe((params) => {
      this.selectedBreed = params['breedId'];
      this.breedDataService
        .getRandomImageByBreed(this.selectedBreed)
        .subscribe((imgUrl) => {
          this.breedImageUrl = imgUrl;
        });
    });
  }

  /**
   * When a user selects the back button this function
   * will use the router to return them to the homepage
   */
  navigateHome() {
    this.router.navigate(['breed-list']);
  }

  /**
   * Trigger a new call to the breed image api to generate a new image for the user to viewbre
   */
  newImage() {
    this.breedDataService
      .getRandomImageByBreed(this.selectedBreed)
      .subscribe((imgUrl) => {
        this.breedImageUrl = imgUrl;
      });
  }
}
