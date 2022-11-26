import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';
import notify from 'gulp-notify';

export const plugins = {
  replace, plumber, browserSync, newer, notify, if: ifPlugin,
};