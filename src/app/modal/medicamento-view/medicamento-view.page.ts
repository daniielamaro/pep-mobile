import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MedicamentoViewService } from './medicamento-view.service';

@Component({
  selector: 'app-medicamento-view',
  templateUrl: './medicamento-view.page.html',
  styleUrls: ['./medicamento-view.page.scss'],
})
export class MedicamentoViewPage implements OnInit {

  id: string;
  loading: boolean;
  medicamento: any;

  constructor(
    private medicamentoViewService: MedicamentoViewService,
    private router: Router,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    this.loading = true;
    (await this.medicamentoViewService.getMedicamentoById(this.id))
      .subscribe((resp: any) => {
        this.loading = false;
        this.medicamento = resp;
      });
  }

  // openReceita(receita: any){
  //   let pdfWindow = window.open("");

  //   pdfWindow.document.write('<html><head></head><body style="margin: 0; padding: 0;">');
  //   pdfWindow.document.write(
  //     "<iframe width='100%' height='100%' style='border:none;' frameBorder='0' src='data:application/pdf;base64, " +
  //     encodeURI(receita.binario) + "'></iframe>"
  //   );
  //   pdfWindow.document.write('</body></html>');

  // }

  editarMedicamento(id: string){
    this.router.navigateByUrl("/page/criar-medicamento/"+id);
    this.closeModal();
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
