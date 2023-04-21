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

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient, private MessageService: MessageService) { }

  getTeddys(): Observable<Content[]> {
    // const teddys = contents;
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/teddys");
  }

  addTeddy(newTeddy: Content): Observable<Content> {
    this.MessageService.add(`New Teddy Bear added`);
    return this.http.post<Content>("/api/bikes", newTeddy, this.httpOptions);
  }

  getTeddyById(id: number): Observable<any> {
    const teddy = this.http.get<Content>(`api/teddys/${id}`);

    if (teddy) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(teddy);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}
