import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HdrComponent } from './hdr/hdr.component';
import { MenuComponent } from './menu/menu.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { GraphBlockComponent } from './graph-block/graph-block.component';
import { TechBlockComponent } from './tech-block/tech-block.component';
import { AuthorBlockComponent } from './author-block/author-block.component';
import { GraphComponent } from './graph/graph.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { JsonGetService } from './json-get.service';


@NgModule({
  declarations: [
    AppComponent,
    HdrComponent,
    MenuComponent,
    InfoBlockComponent,
    GraphBlockComponent,
    TechBlockComponent,
    AuthorBlockComponent,
    GraphComponent,
    MainComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [JsonGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
