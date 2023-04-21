import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newTeddy: any = {};
  @Output() addTeddyEvent = new EventEmitter<Content>();

  constructor(public dialog: MatDialog, private MessageService: MessageService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddContentDialogComponent, {
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(newTeddyFromDialog => {
      if (newTeddyFromDialog) {
        if (newTeddyFromDialog.title && newTeddyFromDialog.description && newTeddyFromDialog.creator) {
          this.newTeddy = newTeddyFromDialog;
          this.addNewTeddy();
        } else {
          this.MessageService.add('No content added. Required fields were empty');
        }
      }
    });
  }

  addNewTeddy() {
    this.addTeddyEvent.emit(this.newTeddy);
    this.newTeddy = {};
  }

}
