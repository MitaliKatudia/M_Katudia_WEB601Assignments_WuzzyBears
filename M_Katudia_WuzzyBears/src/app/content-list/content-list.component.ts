import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: 'Soft Bears',
        description: 'Soft bears are very silky',
        creator: 'M.K Raval',
        imgURL: 'https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=F4252bOrMfRTB8kWm2oM2jlb9JXY08tKCaO5G_ms1Uw=',
        type: 'Fantasy',
        tags: ['Tag 1', 'Tag 2'],
      },
      {
        id: 2,
        title: 'Silky',
        description: 'Very Cute and girl thing',
        creator: 'F Jethwa',
        imgURL: 'https://www.shutterstock.com/image-photo/soft-toys-childs-bedroom-260nw-236471365.jpg',
        type: 'silk',
        tags: ['Tag 3', 'Tag 4'],
      },
      {
        id: 3,
        title: 'Wool',
        description: 'This is a complete pack wool',
        creator: 'R Chalthanwala',
        imgURL: 'https://media.istockphoto.com/id/1203062063/photo/the-soft-toy-bunny-sits-on-a-bright-background.jpg?s=612x612&w=0&k=20&c=rcaQ6-4tFnqqAnIOt3Bn5HgXP7sFz0j8bTQ7DwMzXyg=',
        type: 'Silk',
        tags: ['Tag 5', 'Tag 6'],
      },
      {
        id: 4,
        title: 'Multi use',
        description: 'Will be used as a pack of 3 toys',
        creator: 'Rajvir',
        imgURL: 'https://images.unsplash.com/photo-1613339038444-ca6b1e8eb7b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1c2h8ZW58MHx8MHx8&w=1000&q=80',
        type: 'Action',
        tags: ['Tag 1.1', 'Tag 1.2'],
      },
      {
        id: 5,
        title: 'Ant man',
        description: 'A man can be any toy with the blush on it',
        creator: 'Nishi K',
        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYSMKO6HKT3MGROe5oOmSDq-bv1vjp1wg9A&usqp=CAU',
        type: 'Silk',
        tags: ['Tag 1.1', 'Tag 4.5'],
      },
      {
        id: 6,
        title: 'Dolphin',
        description: 'In one character it was found to be brilliant creature ',
        creator: 'Justin DCruz',
        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXS9qWmy5I45kkpxavNzcXkWHioDCgZS61Dw&usqp=CAU',
        type: 'Fantacy',
        tags: ['Tag 1.9', 'Tag 12'],
      },
      {
        id: 7,
        title: 'Teddy Teedy',
        description: 'A group of teddies to play with.',
        creator: 'Joe Russo',
        imgURL: 'https://www.dreamstime.com/havanese-four-teddy-bears-sitting-sisal-box-havanese-puppy-cuddling-four-teddy-bears-sit-together-sisal-box-image169682799',
        type: '',
        tags: ['Tag 3.1', 'Tag 1.2'],
      },
      {
        id: 8,
        title: 'Zexon',
        description: 'Cute new teddy bears trying to support and cheer.',
        creator: 'Dinesh Katudia',
        imgURL: 'https://www.dreamstime.com/four-teddy-bears-window-rotterdam-netherlands-april-dutch-flags-placed-bear-hunt-to-entertain-children-image182255913',
        type: '',
        tags: ['Tag 2.1', 'Tag 1.2'],
      }
    ];
  }

  searchTerm = '';
  searchResults: Content[] = [];
  searchExists = false;

  checkExistence() {
    /*
    if (this.searchTerm.trim() === '')
    {
      this.searchExists = false;
      return;
    }
    */
    this.searchResults = this.contentArray.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.searchExists = this.searchResults.length > 0;
  }
}
