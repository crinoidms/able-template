import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateOneComponent } from './template-one/template-one.component';
import { TemplateTwoComponent } from './template-two/template-two.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateOneComponent,
  },{
    path: 'one',
    component: TemplateOneComponent,
  },{
    path: 'two',
    component: TemplateTwoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
