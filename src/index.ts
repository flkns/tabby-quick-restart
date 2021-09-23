import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import TabbyCoreModule, { ConfigProvider, HotkeyProvider } from 'tabby-core';

import { QuickRestartHotkeyProvider } from './hotkey';
import { QuickRestartConfigProvider } from './config';

import { QuickRestartService } from './services/quickRestart.service';

@NgModule({
  imports: [CommonModule, FormsModule, TabbyCoreModule, NgbModule],
  providers: [
    QuickRestartService,
    {
      provide: HotkeyProvider,
      useClass: QuickRestartHotkeyProvider,
      multi: true,
    },
    {
      provide: ConfigProvider,
      useClass: QuickRestartConfigProvider,
      multi: true,
    },
  ],
})
export default class QuickRestartModule {
  constructor(private service: QuickRestartService) {
    this.service.init();
  }
}
