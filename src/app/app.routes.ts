import { Routes } from "@angular/router"
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ContatoComponent } from "./Institucional/contato/contato.component";
import { SobreComponent } from "./Institucional/sobre/sobre.component";
import { HomeComponent } from "./Navegacao/home/home.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";



export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component: ListaProdutoComponent },
    { path: 'produto-detalhe', component: ListaProdutoComponent },  
];