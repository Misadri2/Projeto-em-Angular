import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';  //Para deixar a moeda em real e com vírgula
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { MenuComponent } from './Navegacao/menu/menu.component';
import { HomeComponent } from './Navegacao/home/home.component';
import { FooterComponent } from './Navegacao/footer/footer.component';
import { SobreComponent } from './Institucional/sobre/sobre.component';
import { ContatoComponent } from './Institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    

  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
