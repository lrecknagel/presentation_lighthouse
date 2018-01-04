const Gatherer = require('lighthouse').Gatherer;

class PerformanceTimingGatherer extends Gatherer {
  beforePass(options) {}

  afterPass(options) {
    const { driver } = options;
    return driver.evaluateAsync('PerformanceTiming.navigationStart')
      .then(metrics => {
        console.log(metrics);
        if (!metrics || metrics.timeToInit === undefined) {
          throw new Error('Unable to find custom performance metrics in page');
        }
        return metrics;
      });
  }
}

module.exports = PerformanceTimingGatherer;