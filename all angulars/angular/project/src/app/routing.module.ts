import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { Work2Component } from './work2/work2.component';
import { WorkComponent } from './work/work.component';
import { ProductComponent } from './product/product.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TreeFlatOverviewExample } from './tree/tree.component';
import { ProductDetailComponent } from './product/product-details/product-detail.component';
import { ProductDetailsGuard } from './product/product-guards/product-details.guard';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroesComponent } from './heroes/heroes.component';




const routes: Routes = [
    {
        path: 'members',
        component: MembersComponent
      },
      {
        path: 'work2',
        component: Work2Component
      },
      {
        path: 'work',
        component: WorkComponent
      },
      {
        path: '',
        redirectTo: '/product',
        pathMatch: 'full'
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'materials',
        component: MaterialTestComponent
      },
      {
        path: 'carousel',
        component: CarouselComponent
      },
      {
        path: 'tree',
        component: TreeFlatOverviewExample
      },
      {
        path: 'product/:id',
        canActivate: [ ProductDetailsGuard],
        component: ProductDetailComponent
      },
      {
        path: 'crisis',
        component: CrisisCenterComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
