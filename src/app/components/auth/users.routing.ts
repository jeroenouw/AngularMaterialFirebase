import { Routes, RouterModule } from '@angular/router';

/*
import { TestComponent } from './test';
import { TestComponent } from './test';
import { TestComponent } from './test';
import { TestComponent } from './test';
*/
const usersRoutes: Routes = [
    /*{ path: '', component: TestComponent, children: [
        { path: '', component: TestComponent },
        { path: 'new', component: TestComponent },
        { path: ':id', component: TestComponent },
        /{ path: ':id/edit', component: TestComponent }
    ] }*/
];

export const UsersRouting = RouterModule.forChild(usersRoutes);
