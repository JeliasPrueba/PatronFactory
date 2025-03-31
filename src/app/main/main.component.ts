import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FilesReportsService } from '../Services/files-reports.service';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  Builder = inject(FormBuilder)

  constructor( public services:FilesReportsService) {}

  Formulario = this.Builder.group({
    id: [1],
    nombre: ["", Validators.required],
    valorTotal: [0],
  
  })

  Download(format:string){

    var todayDate = new Date().toISOString().slice(0,10);




    const usuario = [
      {
        id: this.Formulario.controls.id.value ?? 1,
        nombre: this.Formulario.controls.nombre.value ?? "",
        fechaDeCreacion: todayDate,
        valorTotal: this.Formulario.controls.valorTotal.value ?? 0,
      }
    ]

    this.services.DownloadFile(usuario, format)
    
    console.log(todayDate);
  }

  private IndexBtn:number = 1;
  public class?:string = "BtnGenerator1"

  Avanzar(){
    ++this.IndexBtn

    if(this.IndexBtn > 3){
      this.IndexBtn = 1;
    }

    this.class = `BtnGenerator${this.IndexBtn}`
  }

  Atras(){
    --this.IndexBtn

    if(this.IndexBtn < 1){
      this.IndexBtn = 3;
    }

    this.class = `BtnGenerator${this.IndexBtn}`
  }

  
}
