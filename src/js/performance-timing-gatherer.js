const Gatherer = require('lighthouse').Gatherer;

class PerformanceTimingGatherer extends Gatherer {
  beforePass() {
    // something to do before Gatherer runs
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