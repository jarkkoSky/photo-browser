import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Location } from '@angular/common';

@Component({
  selector: 'app-action-bar',
  templateUrl: 'action-bar.component.html',
  styleUrls: ['action-bar.component.scss']
})
export class ActionBarComponent {
  pageSizes = [5, 10, 15, 30, 50];

  @Input() title;
  @Input() paginatorRef;
  @Input() enableBackButton;
  @Output() paginatorChange: EventEmitter<PageEvent> = new EventEmitter();

  constructor(private location: Location) {}

  pageChanged($event) {
    this.paginatorChange.emit($event);
  }

  goBack() {
    this.location.back();
  }
}
