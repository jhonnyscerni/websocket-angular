import { OptionService } from './../../service/option.service';
import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { WebsocketService } from '../../service/websocket.service';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss'],
    providers: [ WebsocketService, OptionService ]
})
export class SampleComponent

{
  private message = {
    ticks_history: "R_50",
    end: "latest",
    start: 1,
    style: "candles",
    adjust_start_time: 1,
    count: 10
}
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private oprionService: OptionService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        oprionService.messages.subscribe(msg => {console.log("Response from websocket: " + msg);});
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }

    sendMsg() {
		console.log('new message from client to websocket: ', this.message);
		this.oprionService.messages.next(this.message);
	}
}
