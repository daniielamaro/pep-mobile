import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnderecoAtualService } from './endereco-atual.service';

@Component({
  selector: 'app-endereco-atual',
  templateUrl: './endereco-atual.page.html',
  styleUrls: ['./endereco-atual.page.scss'],
})
export class EnderecoAtualPage implements OnInit {

  coords: string;
  endereco: string;
  loading: boolean;
  editandoEnd: boolean = false;
  enderecoPre: string;

  constructor(
    private enderecoAtualService: EnderecoAtualService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    this.loading = true;
    (await this.enderecoAtualService.getEnderecoByCoords(this.coords))
      .subscribe((resp: any) => {
        this.loading = false;
        if(resp.results.length > 0){
          this.endereco = resp.results[0].formatted_address;
        }
      });
  }

  async editarEndereco(){
    this.loading = true;
    (await this.enderecoAtualService.getEnderecoByAddress(this.enderecoPre))
      .subscribe((resp: any) => {
        this.loading = false;
        if(resp.results.length > 0){
          this.endereco = resp.results[0].formatted_address;
          let location = resp.results[0].geometry.location;
          this.coords = location.lat+","+location.lng;
          this.editandoEnd = false;
        }
      });
  }

  closeModal(coords = null){
    this.modalController.dismiss(coords);
  }

}
