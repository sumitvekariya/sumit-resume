import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sumit-resume';
  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const node2 = document.createElement('script');
        node2.src = 'assets/js/glitche-scripts.js';
        node2.type = 'text/javascript';
        node2.async = true;
        document.getElementsByTagName('head')[0].appendChild(node2);
      }
    });
  }

  redirectTo(redirect: string): void {
    setTimeout(() => {
      this.router.navigate([redirect]);
    }, 550);
  }
}
