import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService){ }

  ngOnInit():void {
  
  }
}

