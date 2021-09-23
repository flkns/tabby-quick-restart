import { ConfigProvider } from 'tabby-core';

/** @hidden */
export class QuickRestartConfigProvider extends ConfigProvider {
  defaults = {
    quickRestart: {},
    hotkeys: {
      'quick-restart': ['Ctrl-R'],
    },
  };

  platformDefaults = {};
}
