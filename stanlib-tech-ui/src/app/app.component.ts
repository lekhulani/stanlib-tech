import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageHeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stanlib-tech-ui';
}
