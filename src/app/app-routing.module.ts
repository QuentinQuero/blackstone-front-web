import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Character_pageComponent } from './pages/character/character_page.component';
import { StarshipsPageComponent} from './pages/starships-page/starships-page.component';
import {ChallengesComponent} from "./pages/exploration/challenges/challenges.component";
import {CharacterListPageComponent} from "./pages/character-list-page/character-list-page.component";
import { HomeComponent } from './pages/home/home.component';
import { ExplorationComponent } from './pages/exploration/exploration.component';


/* importer vos pages ici */
const routes: Routes = [
  { path: 'character_detail/:id', component: Character_pageComponent },
  { path: 'characters', component: CharacterListPageComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'starships', component:  StarshipsPageComponent },
  { path: 'exploration', component: ExplorationComponent },
  { path: '',   component: HomeComponent },
  /* créer vos path ici avec votre component ici */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
