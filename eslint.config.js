import { common } from '@praha/eslint-config-common';
import { define } from '@praha/eslint-config-definer';
import { javascript } from '@praha/eslint-config-javascript';
import { jest } from '@praha/eslint-config-jest';
import { style } from '@praha/eslint-config-style';
import { typescript } from '@praha/eslint-config-typescript';

const config = define([
  common,
  javascript,
  typescript,
  style,
  jest,
]);

export default config({
  tsconfigPath: './tsconfig.json',
});
