import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Character_pageComponent } from './pages/character/character_page.component';
import { ExplorationComponent } from "./pages/exploration/exploration.component";
import { MapComponent } from './components/exploration/map/map.component';

/* importer vos pages ici */
const routes: Routes = [
  { path: 'character_detail/:id', component: Character_pageComponent },
  { path: 'characters', component: CharacterListPageComponent },
  { path: 'combatmaps', component: MapComponent }
  { path: 'challenges', component: ChallengesComponent },
  { path: 'exploration', component: ExplorationComponent }
  /* créer vos path ici avec votre component ici */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
