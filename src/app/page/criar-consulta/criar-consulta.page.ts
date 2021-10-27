import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { ConsultaService } from '../consulta/consulta.service';

@Component({
  selector: 'app-criar-consulta',
  templateUrl: './criar-consulta.page.html',
  styleUrls: ['./criar-consulta.page.scss'],
})
export class CriarConsultaPage implements OnInit {

  tiposConsultas: any;
  user: any;

  dataConsulta: any;
  tipoConsulta: any;
  publico: any;
  resumo: any;
  observacoes: any;

  constructor(private consultaService: ConsultaService, private router: Router, private storage: StorageService) { }

  async ngOnInit() {
    this.getTiposExames();
    this.user = await this.storage.get("user");
  }

  async getTiposExames(){
    (await this.consultaService.consultarListaTiposConsultas())
      .subscribe((resp: any) => {
        this.tiposConsultas = resp;
      },
      error => {
        if(error.status == 401 || error.status == 403){
          this.storage.remove("user");
          this.router.navigateByUrl("");
        }
      });
  }

  async salvarConsulta(){
    let request = {
      idPaciente: this.user.id,
      idTipoConsulta: this.tipoConsulta,
      diaRealizacao: this.dataConsulta.split("T")[0],
      publico: this.publico,
      resumo: this.resumo,
      observacoes: this.observacoes
    };

    this.dataConsulta = undefined;
    this.tipoConsulta = undefined;
    this.publico = false;
    this.resumo = undefined;
    this.observacoes = undefined;

    (await this.consultaService.salvarConsulta(request))
      .subscribe(() => {
        this.router.navigateByUrl("/page/consulta");
      },
      error => {
        if(error.status == 401 || error.status == 403){
          this.storage.remove("user");
          this.router.navigateByUrl("");
        }
      });
  }

}
