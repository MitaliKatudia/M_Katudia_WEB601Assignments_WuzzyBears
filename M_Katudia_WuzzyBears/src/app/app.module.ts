import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListPipe } from './content-list.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from './directives/hover-affect.directive';
import { MessageComponent } from './message/message.component';
import { ContentList } from './helper-files/content-list';
import { ContentTypePipe } from './content-type.pipe';
import { ContentCardComponent } from './content-card/content-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContentDetailComponent } from './content-detail/content-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListPipe,
    ContentTypePipe,
    HoverAffectDirective,
    MessageComponent,
    ContentCardComponent,
    ModifyContentComponent,
    AddContentDialogComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
