import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

export interface Message {
	ticks_history: string,
  end: string,
  start: number,
  style: string,
  adjust_start_time: number,
  count: number

}

@Injectable()
export class OptionService {

public messages: Subject<Message>;


constructor(wsService: WebsocketService) {
  this.messages = <Subject<Message>>wsService
  .connect(environment.OPTION_URL)
  .map((response: MessageEvent): Message => {
    let data = JSON.parse(response.data);
    console.log(data)

    return {
      ticks_history: data.ticks_history,
      end: data.end,
      start: data.start,
      style: data.style,
      adjust_start_time: data.adjust_start_time,
      count: data.count
    }
  });

 }

}
