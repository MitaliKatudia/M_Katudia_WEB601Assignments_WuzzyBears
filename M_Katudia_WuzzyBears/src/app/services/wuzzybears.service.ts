import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WuzzyBearsService {

  constructor(private http: HttpClient, private MessageService: MessageService) { }

  getTeddys(): Observable<Content[]> {
    const teddys = contents;
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/teddys");
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
