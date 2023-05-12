import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: true,
    imports: [HeaderComponent, RouterModule, HomeComponent]
})
export class AppComponent {

}
