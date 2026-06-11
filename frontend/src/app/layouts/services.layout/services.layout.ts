import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-services.layout',
  imports: [ CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './services.layout.html',
  styleUrl: './services.layout.css',
})
export class ServicesLayout {}
