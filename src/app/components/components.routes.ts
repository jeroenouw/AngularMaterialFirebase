import { AboutMeComponent } from'./about-me/about-me.component'
import { ContactComponent } from'./contact/contact.component'
import { DialogComponent, DialogResultDialog } from "./dialog/dialog.component";
import { PageNotFoundComponent } from './not-found/not-found.component';

export const componentRoutes = [
  {
    path: 'about-me', component: AboutMeComponent, children: [
    {path: 'contact', component: ContactComponent},
    {path: 'dialog', component: DialogComponent},
    {path: 'dialog-result', component: DialogResultDialog},
    {path: 'page-not-found-404', component: PageNotFoundComponent}
  ]
  },
];
