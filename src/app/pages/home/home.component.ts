import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
