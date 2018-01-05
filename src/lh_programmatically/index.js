const chromeLauncher = require('chrome-launcher'),
  lighthouse = require('lighthouse'),
  log = require('lighthouse-logger');

const perfConfig = require('./perfOnly-config.js');

async function launchChromeAndRunLighthouse(url, flags = {}, config = null, chromeFlags = {}) {
  const chrome = await chromeLauncher.launch(chromeFlags);
  flags.port = chrome.port;
  const results = await lighthouse(url, flags, config);
  await chrome.kill();

  return results;
}

async function runPerfOnly() {
  const results = await launchChromeAndRunLighthouse('http://dresdenjs.io', {}, perfConfig);
}

async function runFullWithLogs() {
  const flags = { logLevel: 'info', output: 'json'};
  log.setLevel(flags.logLevel);
  const results = await launchChromeAndRunLighthouse('http://dresdenjs.io', flags);
}

async function runPerfOnlyHeadless() {
  const flags = { output: 'json' };

  const chromeFlags = { chromeFlags: ['--headless'] };
  // other nice flags: ['--screenshot', '--print-to-pdf', '--dump-dom', '--window-size=800,600']

  const results = await launchChromeAndRunLighthouse('http://dresdenjs.io', flags, perfConfig, chromeFlags);
}

runPerfOnlyHeadless();