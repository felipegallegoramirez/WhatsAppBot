import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDiagramsComponent } from '../../components/form-diagrams/form-diagrams.component';


@Component({
  selector: 'app-diagrams',
  standalone: true,
  imports: [FormDiagramsComponent,CommonModule],
  templateUrl: './diagrams.component.html',
  styleUrl: './diagrams.component.css'
})
export class DiagramsComponent  implements OnInit{
  ngOnInit(): void {
    // Obtener el elemento canvas y el contexto 2D
    var canvas = <HTMLCanvasElement>document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    if(ctx){
    // Dibujar un rectángulo en el canvas
    ctx.fillStyle = 'blue'; // Color del rectángulo
    ctx.fillRect(50, 50, 100, 50); // x, y, width, height
    }
  }
  state:boolean=false
  menu(){
    const menu=document.getElementById("menu")
    const menuButton=document.getElementById("menu_button")
    if(this.state){
      menu?.classList.add("oculto")
      menuButton?.classList.remove("oculto")
    }else{
      menuButton?.classList.add("oculto")
      menu?.classList.remove("oculto")
    }
    this.state=!this.state
  }

  subMenu(menu:number){
    const buttons=document.getElementsByClassName("menu_sup_button")
    const subMenu=document.getElementsByClassName("option")
    for(let i=0;i<3;i++){
      buttons[i].classList.remove("select")
      subMenu[i].classList.add("oculto")
    }
    buttons[menu].classList.add("select")
    subMenu[menu].classList.remove("oculto")
  }
  form:boolean=false
  close(a:any){
    this.form=!this.form
  }

}
