import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { ExameService } from '../exame/exame.service';
import { MedicamentoService } from './medicamento.service';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.page.html',
  styleUrls: ['./medicamento.page.scss'],
})
export class MedicamentoPage implements OnInit {

  listaMedicamentos: any;
  loading: boolean = false;
  mensagem: string;

  constructor(private router: Router, private storage: StorageService, private medicamentoService: MedicamentoService) {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd && this.router.url == "/page/medicamento") {
        this.loading = true;
         this.pageEnter();
      }
    });
  }

  ngOnInit() {}

  async pageEnter(){
    let user = await this.storage.get("user");
    this.listaMedicamentos = undefined;

    (await this.medicamentoService.consultarListaMedicamentos(user.id))
      .subscribe((resp: any) => {
        this.listaMedicamentos = resp;

        if(this.listaMedicamentos.length == 0)
          this.mensagem = "Nenhum medicamento salvo";

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

}
