import { Injectable } from '@angular/core';
import { HotkeyDescription, HotkeyProvider } from 'tabby-core';

/** @hidden */
@Injectable()
export class QuickRestartHotkeyProvider extends HotkeyProvider {
  async provide(): Promise<HotkeyDescription[]> {
    return [
      {
        id: 'quick-restart',
        name: 'Restart Tabby Quickly!',
      },
    ];
  }
}
