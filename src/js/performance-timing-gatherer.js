const Gatherer = require('lighthouse').Gatherer;

class PerformanceTimingGatherer extends Gatherer {
  beforePass(options) {
    const { driver } = options;
    return driver.evaluateAsync('window.performance.measure("measure_load_from_dom", "domComplete")');
  }

  afterPass(options) {
    const { driver } = options;
    return driver.evaluateAsync('window.performance.toJSON()')
      .then( ({timing}) => {

        if (!timing || timing.domLoading === undefined) {
          throw new Error('Unable to find custom performance metrics in page');
        }
        return timing;
      });
  }
}

module.exports = PerformanceTimingGatherer;