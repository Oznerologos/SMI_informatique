import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HeaderComponent } from "./header/header.component";
//import { FooterComponent } from "./footer/footer.component";
import { ConfigComponent } from "./config/config.component";
import { EzconfigComponent } from "./ezconfig/ezconfig.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {path: 'Config', component: ConfigComponent},
  {path: 'EZConfig', component: EzconfigComponent},
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
