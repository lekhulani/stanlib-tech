import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home - World of Products'
    },
    {
        path: 'product-sales/:id',
        component: ProductComponent,
        title: 'Product Sales'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
