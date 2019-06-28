import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembersComponent } from './members/members.component';
import { ProductComponent } from './product/product.component';
import { RouterModule} from '@angular/router';
import { SortPipe} from './sort';
import { StarPmComponent } from './star-pm/star-pm.component';
import { DemoMaterialModule } from './material-module/material-module.module';
import {  MaterialTestComponent,  } from './material-test/material-test.component';
import 'hammerjs';
import { TreeFlatOverviewExample } from './tree/tree.component';
import { ProductDetailsGuard } from './product/product-guards/product-details.guard';
import { ProductDetailComponent } from './product/product-details/product-detail.component';
import { FormsComponent } from './tree/forms/forms.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { MemberFormsComponent } from './members/member-forms/member-forms.component';
import { WorkComponent } from './work/work.component';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { SatDatepickerModule } from 'saturn-datepicker/src/datepicker';
import { SatNativeDateModule } from 'saturn-datepicker/src/datetime';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickComponent } from './carousel/slick/slick.component';
import { Work2Component } from './work2/work2.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { MassageComponent } from './heroes/massage/massage.component';
import { routingModule } from './routing.module';
import { ProductModule } from './productss/product.module';



@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    MembersComponent,
    ProductComponent,
    StarPmComponent,
    MaterialTestComponent,
    TreeFlatOverviewExample,
    ProductDetailComponent,
    FormsComponent,
    MemberFormsComponent,
    WorkComponent,
    CarouselComponent,
    SlickComponent,
    Work2Component,
    CrisisCenterComponent,
    HeroesComponent,
    HeroesListComponent,
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule, MatFormFieldModule, MatInputModule,
    SatDatepickerModule, SatNativeDateModule,
    Ng2CarouselamosModule,
    SlickCarouselModule,
    routingModule,
    
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
