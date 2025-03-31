import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'servicio',
        component: AppComponent
    },
    {
        path: 'templates',
        component: TemplateComponent
    }
];
