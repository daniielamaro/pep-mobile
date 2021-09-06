import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/class/storage.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  constructor(private storage: StorageService, private router: Router) {}

  ngOnInit() {
  }

  logout(){
    this.storage.remove("user");
    this.router.navigateByUrl("");
  }

}
