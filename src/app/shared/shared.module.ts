import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ActionBarComponent],
  imports: [CommonModule, MatPaginatorModule, RouterModule],
  providers: [],
  exports: [ActionBarComponent]
})
export class SharedModule {}
