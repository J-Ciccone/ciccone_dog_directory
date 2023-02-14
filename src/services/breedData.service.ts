import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreedDataService {
  private baseUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  /** 
   * Calls to the api can utilize a pipe to get the message property from the response
   * rather than calling the function in our components and having to rewrite logic to extract the message
   * */

  /**
   * Retreives a list of all dog breeds from the API.
   * @returns An Observable that emits an array of strings containing all dog breeds.
   * */
  getAllBreeds(): Observable<string[]> {
    const breedListUrl = `${this.baseUrl}/breeds/list`;
    return this.http
      .get<{ message: string[] }>(breedListUrl)
      .pipe(map((response) => response.message));
  }

  /**
   * Retreives an image string for the given breed.
   * @returns An Observable that emits a string for this breeds image.
   * */
  getRandomImageByBreed(breedName: string): Observable<string> {
    const specificBreedUrl = `${this.baseUrl}/breed/${breedName}/images/random`;
    return this.http
      .get<{ message: string }>(specificBreedUrl)
      .pipe(map((response) => response.message));
  }
}
