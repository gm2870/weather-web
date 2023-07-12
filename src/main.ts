import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as Sentry from '@sentry/angular-ivy';

Sentry.init({
  dsn: 'https://7a9fe08ced434c5bbe96058ca00e0aee@o4505512104034304.ingest.sentry.io/4505512214593536',
  integrations: [
    new Sentry.BrowserTracing({
      tracingOrigins: ['*'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),

    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
