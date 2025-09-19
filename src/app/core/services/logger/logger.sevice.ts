import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerSevice {
  info(msg: String, extra?: unknown) {//any
    console.info(msg, extra ?? '');
  }
  warn(msg: String, extra?:unknown) {
    console.warn(msg, extra ?? '');

  }
  error(msg: String, extra?:unknown) {
    console.error(msg, extra ?? '');
  }
}
