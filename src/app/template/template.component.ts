import { Component, inject } from '@angular/core';
import { FilesReportsService } from '../Services/files-reports.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template',
  imports: [RouterOutlet],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  public service = inject(FilesReportsService);

  DownloadTemplate(){

    const usuario = [
      {
        nombre: "Jelias",
        edad: 21
      }
    ]

    this.service.DownloadTemplate(usuario)
  }
}
