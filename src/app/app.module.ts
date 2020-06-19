import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule }  from '@angular/router';
import { AppComponent }  from './app.component';
import { CMSResolver }   from './core/cms/cms-resolver.service';
import { CoreModule }    from './core/core.module';
import { WebsiteModule } from './website/website.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SlickCarouselModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => WebsiteModule,
        resolve: {
          content: CMSResolver
        }
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
