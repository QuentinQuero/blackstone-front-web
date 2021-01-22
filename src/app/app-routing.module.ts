import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
/* importer vos pages ici */
const routes: Routes = [
  { path: 'character', component: CharacterComponent }
  /* créer vos path ici avec votre component ici */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
