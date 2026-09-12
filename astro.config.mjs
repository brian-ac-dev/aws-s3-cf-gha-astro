// @ts-check
import { defineConfig } from 'astro/config';

// Static output for S3 / CloudFront (REST origin).
// format: 'file' → /tienda.html instead of /tienda/index.html
// so nested routes work without CloudFront Functions.
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  site: 'https://popshop.example.com',
});
