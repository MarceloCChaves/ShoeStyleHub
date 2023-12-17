import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';

const routes: Routes = [
  {
    path:"",
    component: ListProductsComponent,
    pathMatch: "full"
  },
  {
    path: "cadastroProduto",
    component: CreateProductComponent
  },
  {
    path: 'editarProduto/:id',
    component: EditProductComponent
  },
  {
    path: 'deletarProduto/:id',
    component: DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
