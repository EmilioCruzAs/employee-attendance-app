import { Routes } from '@angular/router';
import { Checker } from './modules/checker/checker';
import { Skeleton } from './layout/skeleton/skeleton';

export const routes: Routes = [

    {
        path:'registrar',
        component:Skeleton,
    },
    {
        path:'**', redirectTo:'registrar'
    }
];
