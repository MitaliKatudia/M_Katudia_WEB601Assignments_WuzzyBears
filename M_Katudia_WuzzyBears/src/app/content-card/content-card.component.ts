import { Component } from '@angular/core';
//import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    this.contentList.add({
      id: 0,
      title: "Baloon",
      description: "This is a baloon",
      creator: "MBA",
      imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
      type: "Thing",
      tags: ["#store"]
    })

    this.contentList.add({
      id: 1,
      title: "Chocolate",
      description: "Lindor chocolate is best",
      creator: "safal chocloate industry",
      imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
      type: "Thing",
      tags: ["#store"]
    })

    this.contentList.add({
      id: 1,
      title: "bears",
      description: "Wuzzy bears are best amongst all",
      creator: "Mitali",
      imgURL: "https://www.santorini-island.com/santorini-photos/information-about-santorini-santorini-island-greece-139-e01d.jpg",
      type: "Thing",
      tags: ["#store"]
    })
  }
}
