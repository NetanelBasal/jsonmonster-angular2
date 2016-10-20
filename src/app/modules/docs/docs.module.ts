import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import docsRoutes from './docs.routes';

@NgModule({
  imports: [
    CommonModule,
    docsRoutes
  ],
  declarations: [DocsComponent]
})
export default class DocsModule {
}
