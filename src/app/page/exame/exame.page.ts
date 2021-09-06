import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { ExameService } from './exame.service';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.page.html',
  styleUrls: ['./exame.page.scss'],
})
export class ExamePage implements OnInit {

  listaExame: any;
  loading: boolean = false;
  mensagem: string;

  constructor(private router: Router, private storage: StorageService, private exameService: ExameService) {
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

    this.exameService.consultarListaExames(user.id)
      .subscribe((resp: any) => {
        this.listaExame = resp;

        if(this.listaExame.length == 0)
          this.mensagem = "Nenhum exame salvo";

        this.loading = false;
      },
      error => {
        this.mensagem = error.error;
        this.loading = false;
      });
  }

}
