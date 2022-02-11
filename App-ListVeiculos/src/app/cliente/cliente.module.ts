import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente.route';


@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class ClienteModule { }