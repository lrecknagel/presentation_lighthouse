const Audit = require('lighthouse').Audit;

class PerformanceTimingAudit extends Audit {
  static get meta() {
    return {
      category: 'CustomThing',
      name: 'performance-timing-audit',
      description: 'PerformanceTimingGatherer',
      helpText: 'performance timing values',
      requiredArtifacts: ['PerformanceTimingGatherer'],
      failureDescription: 'To slow ...'
    };
  }

  static audit(artifacts) {
    const timing = artifacts.PerformanceTimingGatherer.timing;
    const diff = timing.domComplete - timing.connectStart;
    return {
      rawValue: `${ diff } ms`,
      score: diff < 2000
    };
  }
}

module.exports = PerformanceTimingAudit;