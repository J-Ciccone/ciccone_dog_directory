import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedListComponent } from './breed-list/breed-list.component';
import { BreedInformationComponent } from './breed-information/breed-information.component';


/**
 * Sets the routes we will use in this application,
 * the list of dog breeds and a page specific to the breedId selected from the list.
 * Any other path will reroute to the breed list
 */
const routes: Routes = [
  { path: 'breed-list', component: BreedListComponent },
  { path: 'breed-list/:breedId', component: BreedInformationComponent },
  { path: '**', redirectTo: 'breed-list' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
