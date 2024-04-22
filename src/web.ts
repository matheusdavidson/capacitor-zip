import { WebPlugin } from '@capacitor/core';

import type { ZipPlugin, ZipResponse } from './definitions';

export class ZipWeb extends WebPlugin implements ZipPlugin {
  unzip(): Promise<ZipResponse> {
    throw this.unimplemented('Method not implemented on web.');
  }
}
