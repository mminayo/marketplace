import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormularioUsuarioComponent } from './usuario/formulario-usuario/formulario-usuario.component';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { FormularioArticuloComponent } from './articulo/formulario-articulo/formulario-articulo.component';
import { FilterPipe } from './articulo/pipes/filter.pipe';
import { MostrarComponent } from './articulo/mostrar/mostrar.component';
import {ErrorTailorModule} from '@ngneat/error-tailor';
import {NgxPaginationModule} from 'ngx-pagination';
import { TotalArticulos } from './header/pipes/total-articulos.pipe';
import { MostrarPedidosComponent } from './pedidos/mostrar-pedidos/mostrar-pedidos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FormularioPedidosComponent } from './pedidos/formulario-pedidos/formulario-pedidos.component';
import { FilterPedidosPipe } from './pedidos/pipes/filter-pedidos.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

const routes:Routes=[
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'usuario/form',component:FormularioUsuarioComponent},
  {path:'usuario/form/:id',component:FormularioUsuarioComponent},
  {path:'articulos',component:ArticuloComponent},
  {path:'articulo/form',component:FormularioArticuloComponent},
  {path:'articulo/form/:id',component:FormularioArticuloComponent},
  {path:'articulo/mostrar/:id',component:MostrarComponent},
  {path:'pedidos', component:PedidosComponent},
  {path:'pedidos/form', component:FormularioPedidosComponent},
  {path:'pedidos/form/:id', component:FormularioPedidosComponent},
  {path:'pedidos/form/:nombreParcial', component:FormularioPedidosComponent},
  {path:'pedidos/:id', component:PedidosComponent},
  {path:'pedidos/mostrar/:id', component:MostrarPedidosComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    FormularioUsuarioComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ArticuloComponent,
    FormularioArticuloComponent,
    FilterPipe,
    MostrarComponent,
    TotalArticulos,
    MostrarPedidosComponent,
    PedidosComponent,
    FormularioPedidosComponent,
    FilterPedidosPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatMenuModule,
    RouterModule.forRoot(routes),
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es requerido',
          minlength: ({ requiredLength, actualLength }) =>
                      `Expect ${requiredLength} but got ${actualLength}`,

          invalidAddress: error => `Address isn't valid`
        }
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
