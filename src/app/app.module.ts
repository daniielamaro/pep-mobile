import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Drivers } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UrlService } from './shared/class/url-service';
import { StorageService } from './shared/class/storage.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingPageModule } from './loading/loading.module';
import { FotoperfilPageModule } from './modal/fotoperfil/fotoperfil.module';

import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { EnderecoAtualPageModule } from './modal/endereco-atual/endereco-atual.module';
import { EnderecoConfirmacaoPageModule } from './modal/endereco-confirmacao/endereco-confirmacao.module';
import { MedicamentoViewPageModule } from './modal/medicamento-view/medicamento-view.module';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingPageModule,
    FotoperfilPageModule,
    EnderecoAtualPageModule,
    EnderecoConfirmacaoPageModule,
    MedicamentoViewPageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UrlService,
    LocationAccuracy,
    Geolocation,
    AndroidPermissions,
    AuthGuard,
    StorageService,
    DocumentViewer
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
