import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActivatedRoute } from '@angular/router';
import { WuzzyBearsService } from '../services/wuzzybears.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {

  id: number = 0;
  teddy: any = {};
  defaultImage: string = '/assets/images/wuzzyBears.jpg';

  constructor(private route: ActivatedRoute, private WuzzyBearsService: WuzzyBearsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.WuzzyBearsService.getTeddyById(this.id).subscribe(t => {
        this.teddy = t;
      })
    });
  }

  handleClick(content: Content) {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }

}
