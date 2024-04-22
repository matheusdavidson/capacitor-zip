export interface ZipPlugin {
  unzip(options: ZipUnzipOptions): Promise<ZipResponse>;
}

export interface ZipUnzipOptions {
  source: string;
  destination: string;
}

export interface ZipResponse {
  success: boolean;
  error?: string;
}
