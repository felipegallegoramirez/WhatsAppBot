import { Component, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-diagrams',
  standalone: true,
  imports: [],
  templateUrl: './form-diagrams.component.html',
  styleUrl: './form-diagrams.component.css'
})
export class FormDiagramsComponent {
  @Input()item:string=""
  @Output() Close = new EventEmitter<string>();


  close() {
    console.log("asd")
    this.Close.emit("value");
  }
}
