import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Blog',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44340/',
    redirectUri: baseUrl,
    clientId: 'Blog_App',
    responseType: 'code',
    scope: 'offline_access Blog',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44350',
      rootNamespace: 'Acme.Blog',
    },
  },
} as Environment;
