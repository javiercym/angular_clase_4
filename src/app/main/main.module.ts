import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { LateralComponent } from './lateral/lateral.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    ContenidoComponent,
    LateralComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
