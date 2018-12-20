import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:5009';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;
  public messages: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.getAllMessagesFromAPI().subscribe((messages) => {
      this.setMessages(messages);
    });
  }

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('updateMessages', (data: any) => observer.next(data));
    });
  }

  public getMessages(): Observable<any> {
    return this.messages.asObservable();
  }

  private setMessages(data): void {
    this.messages.next(data);
  }

  private getAllMessagesFromAPI(): Observable<any> {
    return this.http.get(SERVER_URL).pipe(map(res => {
      return res;
    }));
  }

}
