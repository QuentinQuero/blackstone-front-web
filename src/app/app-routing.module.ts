import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Character_pageComponent } from './pages/character/character_page.component';
/* importer vos pages ici */
const routes: Routes = [
  { path: 'character', component: Character_pageComponent }
  /* créer vos path ici avec votre component ici */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
