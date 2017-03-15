console.log("init");

import config from './config.js';
import AppView from './views/app-view.js';
import InfoView from './views/info-view.js';

console.log("finish: " + AppView.x)
if (typeof document !== "undefined") document.body.appendChild(document.createTextNode("finish"))