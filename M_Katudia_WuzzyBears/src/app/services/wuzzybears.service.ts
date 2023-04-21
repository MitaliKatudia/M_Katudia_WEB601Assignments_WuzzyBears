import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WuzzyBearsService {

  constructor(private MessageService: MessageService) { }

  getTeddys(): Observable<Content[]> {
    const bikes = contents;
    this.MessageService.add("Content array loaded!");
    return of(bikes);
  }

  getTeddyById(id: number): Observable<any> {
    const teddy = contents.find((content: { id: number; }) => content.id === id);

    if (teddy) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(teddy);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}