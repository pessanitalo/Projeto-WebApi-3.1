import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        MenuComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        HomeComponent,
        FooterComponent,
        MenuComponent
    ]
})
export class NavegacaoModule { }
