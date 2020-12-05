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
        const removeScript = document.getElementById('script');
        removeScript?.remove();

        const node = document.createElement('script');
        node.src = 'assets/js/glitche-scripts.js';
        node.type = 'text/javascript';
        node.async = true;
        node.id = 'script';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    });
  }

  redirectTo(redirect: string): void {
    setTimeout(() => {
      this.router.navigate([redirect]);
    }, 400);
  }
}
