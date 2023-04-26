import { Component } from '@angular/core';
import { getBrowserCultureLang, getBrowserLang, TranslocoService } from '@ngneat/transloco';
import { TranslocoLocaleService } from '@ngneat/transloco-locale';
import { RouterOutlet } from '@angular/router';
import { ToastsContainerComponent } from './shared/toast/toast-container.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
    selector: 'shpp-root',
    templateUrl: './app.component.html',
    styles: [],
    standalone: true,
    imports: [RouterOutlet, ToastsContainerComponent, FooterComponent]
})
export class AppComponent {

  constructor(private transloco: TranslocoService,
              private translocoLocale: TranslocoLocaleService) {
    transloco.setActiveLang(getBrowserLang() || 'en');
    translocoLocale.setLocale(getBrowserCultureLang())
  }
}
