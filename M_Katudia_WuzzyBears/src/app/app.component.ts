import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { WuzzyBearsService } from './services/wuzzybears.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wuzzy Bears Factory';
  /*teddyId: number = 4;
  oneTeddyById: any = {};*/

  constructor(private WuzzyBearsService: WuzzyBearsService) { }

  ngOnInit() {
    /*this.findTeddyById();*/
  }

  /*findTeddyById() {
    this.WuzzyBearsService.getTeddyById(this.teddyId).subscribe(result => {
      if (typeof result === "object") {
        this.oneTeddyById = result;
      }
    });
  }*/
}
