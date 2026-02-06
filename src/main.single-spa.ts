import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgZone } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    return bootstrapApplication(AppComponent, {
      providers: [
        ...getSingleSpaExtraProviders(),
        ...appConfig.providers,
        { provide: 'singleSpaProps', useValue: singleSpaProps },
      ],
    });
  },
  template: '<app-root />',
  domElementGetter: () => {
    const sharedLayout = document.getElementById(
      'single-spa-application:@NovaOrg/nova-mfe-shared-layout',
    );
    if (sharedLayout) {
      const mainArea = sharedLayout.querySelector('main');
      if (mainArea) return mainArea as HTMLElement;
    }
    return document.getElementById('single-spa-layout-root') as HTMLElement;
  },
  Router,
  NavigationStart,
  NgZone,
});

export const { bootstrap, mount, unmount } = lifecycles;
