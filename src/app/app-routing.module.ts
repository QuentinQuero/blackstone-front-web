import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './Page/character/character.component';
import { GetcharacterComponent } from "./component/character/explorator/UR-025/getcharacter/getcharacter.component";
/* importer vos pages ici */
const routes: Routes = [
  { path: 'character', component: CharacterComponent },
  { path: 'characterget', component: GetcharacterComponent }
  /* créer vos path ici avec votre component ici */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
