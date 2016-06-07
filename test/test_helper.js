import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body><div id="app"></div></body></html>', {url: 'http://localhost'});
global.window = document.defaultView;
global.navigator = global.window.navigator;

function noop() {
    return null;
}
require.extensions['.css'] = noop;
