import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newTeddy: any = {};
  @Output() addTeddyEvent = new EventEmitter<Content>();

  addNewBike() {
    this.addTeddyEvent.emit(this.newTeddy);
    this.newTeddy = {};
  }

}
