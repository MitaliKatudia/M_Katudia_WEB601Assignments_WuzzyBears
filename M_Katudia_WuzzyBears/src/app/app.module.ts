import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListPipe } from './content-list.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from './directives/hover-affect.directive';
import { MessageComponent } from './message/message.component';
import { ContentList } from './helper-files/content-list';
import { ContentTypePipe } from './content-type.pipe';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListPipe,
    ContentTypePipe,
    HoverAffectDirective,
    MessageComponent,
    ContentCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
