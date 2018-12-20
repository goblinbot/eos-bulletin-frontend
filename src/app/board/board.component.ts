import { Component, OnInit } from '@angular/core';
import { SocketService } from '../shared/socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  $messages: any;
  ioConnection: any;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.getMessages().subscribe(res => {
      console.log(res);
      this.$messages = res;
    });

    this.initWebsocketConnection();
    console.log(this.ioConnection);
  }

  private initWebsocketConnection(): void {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
      .subscribe((res: any) => {
        console.log(res);
        this.$messages = res;
      });
  }
}
