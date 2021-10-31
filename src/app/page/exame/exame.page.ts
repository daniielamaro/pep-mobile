import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { UrlService } from 'src/app/shared/class/url-service';
import { ExameService } from './exame.service';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.page.html',
  styleUrls: ['./exame.page.scss'],
})
export class ExamePage implements OnInit {

  listaExameFull: any;
  listaExame: any;
  loading: boolean = false;
  mensagem: string;
  tiposExames: any;

  dataFiltrada: boolean = false;
  tipoFiltrado: boolean = false;

  dataFiltro: Date;
  tipoFiltro: string;

  constructor(
    private router: Router,
    private storage: StorageService,
    private urlService: UrlService,
    private exameService: ExameService)
  {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/exame") {
        this.loading = true;
         this.pageEnter();
      }
    });
  }

  ngOnInit() {}

  async pageEnter(){
    let user = await this.storage.get("user");
    let token = await this.storage.get("token");
    await this.urlService.validateToken(token);

    this.listaExameFull = undefined;
    this.listaExame = undefined;

    await this.getTiposExames();

    (await this.exameService.consultarListaExames(user.id))
      .subscribe((resp: any) => {
        this.listaExameFull = resp;
        this.listaExame = resp;

        if(this.listaExame.length == 0)
          this.mensagem = "Nenhum exame salvo";

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

  async getTiposExames(){
    (await this.exameService.consultarListaTiposExames())
      .subscribe((resp: any) => {
        this.tiposExames = resp;
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
      this.listaExame = this.listaExameFull.filter((item) => {
        return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
               new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
               new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear() &&
               item.tipo.id == this.tipoFiltro;
      });
      this.dataFiltrada = true;
    }else if(this.dataFiltro && !this.tipoFiltrado){
      this.listaExame = this.listaExameFull.filter((item) => {
        return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
               new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
               new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear();
      });
      this.dataFiltrada = true;
    }
  }

  filtroTipo(){
    if(this.tipoFiltro && this.dataFiltrada){
      this.listaExame = this.listaExameFull.filter((item) => {
        return new Date(item.diaRealizacao).getDate() == new Date(this.dataFiltro).getDate() &&
               new Date(item.diaRealizacao).getMonth() == new Date(this.dataFiltro).getMonth() &&
               new Date(item.diaRealizacao).getFullYear() == new Date(this.dataFiltro).getFullYear() &&
               item.tipo.id == this.tipoFiltro;
      });
      this.tipoFiltrado = true;
    }else if(this.tipoFiltro && !this.dataFiltrada){
      this.listaExame = this.listaExameFull.filter((item) => {
        return item.tipo.id == this.tipoFiltro;
      });
      this.tipoFiltrado = true;
    }
  }

  limparFiltro(){
    this.dataFiltro = undefined;
    this.tipoFiltro = undefined;
    this.listaExame = this.listaExameFull;
    this.dataFiltrada = false;
    this.tipoFiltrado = false;
  }

}
