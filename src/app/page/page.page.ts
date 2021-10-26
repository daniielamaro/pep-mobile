import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/class/storage.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  rotaAtual: any;

  constructor(private storage: StorageService, private router: Router) {
    this.router.events.subscribe((evt) => {
      this.rotaAtual = this.router.url;
    });
  }

  ngOnInit() {}

  logout(){
    this.storage.remove("user");
    this.router.navigateByUrl("");
  }

}
