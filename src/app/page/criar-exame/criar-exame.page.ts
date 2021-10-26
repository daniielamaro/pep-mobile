import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { ExameService } from '../exame/exame.service';

@Component({
  selector: 'app-criar-exame',
  templateUrl: './criar-exame.page.html',
  styleUrls: ['./criar-exame.page.scss'],
})
export class CriarExamePage implements OnInit {

  tiposExames: any;
  user: any;

  dataExame: any;
  tipoExame: any;
  publico: any;
  arquivo: any;
  observacoes: any;

  constructor(private exameService: ExameService, private router: Router, private storage: StorageService) { }

  async ngOnInit() {
    this.getTiposExames();
    this.user = await this.storage.get("user");
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

  fileChange(e){
    let arquivoPre = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(arquivoPre);
    reader.onload = () => {
      this.arquivo = {
        name: arquivoPre.name,
        type: arquivoPre.type,
        binary: reader.result.toString().split(';')[1].split(',')[1]
      };
    };
  }

  async salvarExame(){
    let request = {
      arquivo: this.arquivo == undefined ? null : {
        nome: this.arquivo.name,
        tipo: this.arquivo.type,
        binario: this.arquivo.binary
      },
      dataRealizacao: this.dataExame.split("T")[0],
      idPaciente: this.user.id,
      idTipoExame: this.tipoExame,
      publico: this.publico,
      observacoes: this.observacoes
    };

    this.arquivo = undefined;
    this.dataExame = undefined;
    this.tipoExame = undefined;
    this.publico = false;
    this.observacoes = undefined;

    (await this.exameService.salvarExame(request))
      .subscribe(() => {
        this.router.navigateByUrl("/page/exame");
      },
      error => {
        if(error.status == 401 || error.status == 403){
          this.storage.remove("user");
          this.router.navigateByUrl("");
        }
      });
  }

}
