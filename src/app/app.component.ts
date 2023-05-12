import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: true,
    imports: [HeaderComponent]
})
export class AppComponent {

}
