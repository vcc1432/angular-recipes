import { Component,  EventEmitter, Output } from '@angular/core';
7
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
}) 
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}