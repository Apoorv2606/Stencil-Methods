import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const copy = [
  { src: '../node_modules/@se/fonts/css', dest: 'fonts/css' },
  { src: '../node_modules/@se/fonts/fonts', dest: 'fonts/fonts' },
  { src: '../node_modules/@se/icons/css', dest: 'icons/css' },
  { src: '../node_modules/@se/icons/fonts', dest: 'icons/fonts' },
  { src: '../node_modules/@se/web-ui', dest: 'web-ui' },
];

export const config: Config = {
  namespace: 'qds-stencil',
  srcDir: 'src',
  globalScript:'src/global/app.ts',
  globalStyle:'src/global/global.scss',
  outputTargets: [
    {
      type: 'dist',
      copy,
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy,
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        // Expose all web-ui variables and mixin to each scss files
        'node_modules/@se/web-ui/styles/theme',
      ]
    })
  ]
};
