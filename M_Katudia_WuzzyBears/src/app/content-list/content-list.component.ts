import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { WuzzyBearsService } from '../services/wuzzybears.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultImage: string = 'assets/images/wuzzyBears.jpg';


  constructor(private WuzzyBearsService: WuzzyBearsService) {

  }

  ngOnInit() {
    this.WuzzyBearsService.getTeddys().subscribe(teddys => this.contents = teddys);
  }


  searchByTitle() {
    const teddyBears = this.contents.find(teddy => teddy.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`div.card`);

    if (teddyBears) {
      this.titleFound = true;

      cardElements.forEach(card => {
        if (parseInt(card.id) === teddyBears.id) {
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }

}
