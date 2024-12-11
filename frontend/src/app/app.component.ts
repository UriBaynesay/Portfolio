import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
