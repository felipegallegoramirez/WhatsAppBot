import { Routes } from '@angular/router';
import { ListDiagramsComponent } from './pages/list-diagrams/list-diagrams.component';
import { DiagramsComponent } from './pages/diagrams/diagrams.component';

export const routes: Routes = [
    { path: 'List', component: ListDiagramsComponent },
    { path: 'Diagram', component: DiagramsComponent },
];
