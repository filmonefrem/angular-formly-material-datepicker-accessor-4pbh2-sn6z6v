import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedDataService {

  public OnThemeSwitch: Subject<boolean> = new Subject<boolean>();
  
}