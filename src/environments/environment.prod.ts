import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  SERVER_SECRETE: process.env.HOST_SECRETE,
  SERVER_API_URL: process.env.VDAPP_PRD_URL,
  CLIENT_APP_NAME: process.env.VDAPP_UI_NAME,
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR
};
