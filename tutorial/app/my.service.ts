import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
  loadData(): string[] {
    return ['hoge', 'fuga', 'piyo'];
  }
}
