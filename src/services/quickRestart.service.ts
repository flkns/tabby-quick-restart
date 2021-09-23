import { Injectable } from '@angular/core';
import { Logger, LogService, HotkeysService, HostAppService } from 'tabby-core';

@Injectable()
export class QuickRestartService {
  private logger: Logger;

  constructor(
    private app: HostAppService,
    private hotkeys: HotkeysService,
    log: LogService
  ) {
    this.logger = log.create('quick-restart');
    this.logger.info('quick-restart starting...');
  }

  init(): void {
    this.logger.info('quick-restart working!');

    this.hotkeys.hotkey$.subscribe(async (h) => {
      if (h === 'quick-restart') {
        this.logger.warn('quick-restart: restarting Tabby...');
        this.app.relaunch();
      }
    });
  }
}
