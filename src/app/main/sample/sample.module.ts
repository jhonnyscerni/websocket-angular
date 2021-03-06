import { WebsocketService } from './../../service/websocket.service';
import { OptionService } from './../../service/option.service';
import { SampleRoutes } from './sample.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        SampleRoutes,

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        SampleComponent
    ],
    providers: [
        WebsocketService,
        OptionService
    ]
})

export class SampleModule
{
}
