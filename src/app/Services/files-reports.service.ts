import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../Interfaces/IFileUser';
import { IContrato } from '../Interfaces/IContratoUser';

@Injectable({
  providedIn: 'root'
})
export class FilesReportsService {

  private http = inject(HttpClient);

  DownloadFile(Usuario:Usuario[], type: string){

    this.http.post(`https://localhost:7219/api/filesusers/${type}`, Usuario, {
      responseType: 'blob'
    })
    .subscribe(blob =>{
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a")
      a.href = url,
      a.download = `Usuario.${type}`
      a.click();
      window.URL.revokeObjectURL(url);
    })
  }

  DownloadTemplate(usuario:IContrato[]){
    this.http.post("https://localhost:7219/api/plantillas", usuario, {
      responseType: 'blob'
    })
    .subscribe(blob =>{
      const Url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = Url;
      a.download = "Contrato.pdf"
      a.click();
      window.URL.revokeObjectURL(Url);
    })
  }
}
