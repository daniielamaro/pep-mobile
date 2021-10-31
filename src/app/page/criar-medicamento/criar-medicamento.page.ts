import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/class/storage.service';
import { MedicamentoService } from '../medicamento/medicamento.service';

@Component({
  selector: 'app-criar-medicamento',
  templateUrl: './criar-medicamento.page.html',
  styleUrls: ['./criar-medicamento.page.scss'],
})
export class CriarMedicamentoPage implements OnInit {

  user: any;

  nome: any;
  numQuantidade: any;
  tipoQuantidade: any;
  outraQuantidade: any;
  numIntervalo: any;
  tipoIntervalo: any;
  outroIntervalo: any;
  usoContinuo: any;
  dataInicio: any;
  dataTermino: any;
  publico: any;

  constructor(private medicamentoService: MedicamentoService, private router: Router, private storage: StorageService) { }

  async ngOnInit() {
    this.user = await this.storage.get("user");
  }

  async salvarMedicamento(){
    let request = {
      idPaciente: this.user.id,
      nome: this.nome,
      numQuantidade: this.numQuantidade ? Number(this.numQuantidade) : 0,
      tipoQuantidade: this.tipoQuantidade,
      outraQuantidade: this.outraQuantidade,
      numIntervalo: this.numIntervalo ? Number(this.numIntervalo) : 0,
      tipoIntervalo: this.tipoIntervalo,
      outroIntervalo: this.outroIntervalo,
      publico: this.publico,
      dataInicio: this.dataInicio,
      dataTermino: this.dataTermino,
      usoContinuo: this.usoContinuo
    };

    this.nome = undefined;
    this.numQuantidade = undefined;
    this.tipoQuantidade = undefined;
    this.outraQuantidade = undefined;
    this.numIntervalo = undefined;
    this.tipoIntervalo = undefined;
    this.outroIntervalo = undefined;
    this.usoContinuo = undefined;
    this.dataInicio = undefined;
    this.dataTermino = undefined;
    this.publico = undefined;

    (await this.medicamentoService.salvarMedicamento(request))
      .subscribe(() => {
        this.router.navigateByUrl("/page/medicamento");
      },
      error => {
        if(error.status == 401 || error.status == 403){
          this.storage.remove("user");
          this.router.navigateByUrl("");
        }
      });
  }

}
