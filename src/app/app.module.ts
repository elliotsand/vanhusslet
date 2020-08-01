import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule }  from '@angular/router';
import { AppComponent }  from './app.component';
import { CMSResolver }   from './core/cms/cms-resolver.service';
import { CoreModule }    from './core/core.module';
import { WebsiteModule } from './website/website.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => WebsiteModule,
        resolve: {
          content: CMSResolver
        }
      }
    ], {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
