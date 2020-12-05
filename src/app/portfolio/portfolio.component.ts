import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  categories = [
    {
      name: 'angular',
      label: 'Angular'
    },
    {
      name: 'flutter',
      label: 'Flutter'
    },
    {
      name: 'nodejs',
      label: 'NodeJs'
    }
  ];

  projects = [
    {
      images: [],
      category: 'angular',
      title: 'Codemarket',
      description: 'Codemarket'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
