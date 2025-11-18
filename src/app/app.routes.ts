import { Routes } from '@angular/router';
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
