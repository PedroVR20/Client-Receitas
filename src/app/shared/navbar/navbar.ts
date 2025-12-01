import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 constructor(private router: Router) {}

 GoHome() {
    this.router.navigate(['/home']);
  }

  GoRecipes() {
    this.router.navigate(['/receitas']);
  }

}
