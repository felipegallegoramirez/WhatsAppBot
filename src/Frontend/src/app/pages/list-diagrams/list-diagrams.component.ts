import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDiagramsComponent } from '../../components/form-diagrams/form-diagrams.component';

@Component({
  selector: 'app-list-diagrams',
  standalone: true,
  imports: [FormDiagramsComponent,CommonModule],
  templateUrl: './list-diagrams.component.html',
  styleUrl: './list-diagrams.component.css'
})
export class ListDiagramsComponent {
  form:boolean=false
  close(a:any){
    this.form=!this.form
  }

}

