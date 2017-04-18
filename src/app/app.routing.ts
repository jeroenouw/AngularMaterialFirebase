import { RouterModule, Routes } from '@angular/router';

//import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ContactComponent } from'./contact/contact.component'
import { AppComponent } from "./app.component";


const APP_ROUTES: Routes = [
  //{path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  //{path: 'shopping-list', component: ShoppingListComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: AppComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
