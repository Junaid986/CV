import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class MaterialService {

  @Output() themeChanged = new EventEmitter();
  @Output() toggled = new EventEmitter();

  constructor() { }

  public onThemeChanged() {
    this.themeChanged.emit();
  }

  public onToggled() {
    this.toggled.emit();
  }

}
