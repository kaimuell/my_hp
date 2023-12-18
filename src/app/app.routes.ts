import { Routes } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { LebenslaufComponent } from './lebenslauf/lebenslauf.component';

export const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
      },
    {
        path: 'kontakt',
        component: KontaktComponent,
        title: 'Kontakt'
      },
      {
        path: 'projekte',
        component: PortfolioComponent,
        title: 'Projekte'
      },
      {
        path: 'lebenslauf',
        component: LebenslaufComponent,
        title: 'Projekte'
      }

];
