import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMobsterComponent } from './list-mobster/list-mobster.component';
import { BorderCardDirective } from './border-card.directive';
import { MobsterBackgroundColorPipe } from './mobster-background-color.pipe';
import { DetailMobtserComponent } from './detail-mobtser/detail-mobtser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TuiInputModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    AppComponent,
    ListMobsterComponent,
    BorderCardDirective,
    MobsterBackgroundColorPipe,
    DetailMobtserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiInputModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
