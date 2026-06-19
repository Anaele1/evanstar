import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-services.layout',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './services.layout.html',
  styleUrl: './services.layout.css',
})
export class ServicesLayout {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
