/**
 * Created by dcpai on 2017/7/3.
 */
export const Home = require('./home.vue');
export const AppBase = require('./app-base');

import Api from '../services/api';
import App from '../services/app';
import Config from '../services/config';

export const $Api = Api;
export const $App = App;
export const $Config = Config;


