import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  listaConsultaFull: any;
  listaConsulta: any;
  loading: boolean = false;
  mensagem: string;
  tiposConsultas: any;

  dataFiltrada: boolean = false;
  tipoFiltrado: boolean = false;

  dataFiltro: Date;
  tipoFiltro: string;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    private consultaService: ConsultaService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/consultas") {
        this.loading = true;
        this.pageEnter();
      }
    });
  }

  ngOnInit() {
  }

  async pageEnter(){
    let user = await this.storage.get("user");
    let token = await this.storage.get("token");
    await this.urlService.validateToken(token);

    this.listaConsultaFull = undefined;
    this.listaConsulta = undefined;

    await this.getTiposConsultas();

    (await this.consultaService.consultarListaConsultas(user.id))
      .subscribe((resp: any) => {
        this.listaConsultaFull = resp;
        this.listaConsulta = resp;

        if(this.listaConsulta.length == 0)
          this.mensagem = "Nenhuma consulta salva";

        this.loading = false;
      },
      error => {
        if(error.status == 401 || error.status == 403){
          this.storage.remove("user");
          this.router.navigateByUrl("");
        }
        this.mensagem = error.error;
        this.loading = false;
      });
  }

  async getTiposConsultas(){
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

  filtroData(){
    if(this.dataFiltro && this.tipoFiltrado){
      this.listaConsulta = this.listaConsultaFull.filter((item) => {
        return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
               new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
               new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear() &&
               item.tipo.id == this.tipoFiltro;
      });
      this.dataFiltrada = true;
    }else if(this.dataFiltro && !this.tipoFiltrado){
      this.listaConsulta = this.listaConsultaFull.filter((item) => {
        return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
               new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
               new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear();
      });
      this.dataFiltrada = true;
    }
  }

  filtroTipo(){
    if(this.tipoFiltro && this.dataFiltrada){
      this.listaConsulta = this.listaConsultaFull.filter((item) => {
        return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
               new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
               new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear() &&
               item.tipo.id == this.tipoFiltro;
      });
      this.tipoFiltrado = true;
    }else if(this.tipoFiltro && !this.dataFiltrada){
      this.listaConsulta = this.listaConsultaFull.filter((item) => {
        return item.tipo.id == this.tipoFiltro;
      });
      this.tipoFiltrado = true;
    }
  }

  limparFiltro(){
    this.dataFiltro = undefined;
    this.tipoFiltro = undefined;
    this.listaConsulta = this.listaConsultaFull;
    this.dataFiltrada = false;
    this.tipoFiltrado = false;
  }

}
