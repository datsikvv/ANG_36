import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { RouterModule } from '@angular/router';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    PhraseDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'list1',
        component: List1Component, // riuter-outlet
        children: [
          {path: 'detail/:id', component: PhraseDetailComponent}
        ]
      },
      {path: 'list1/:id', component: PhraseDetailComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
