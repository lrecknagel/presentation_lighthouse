module.exports = {
  passes: [{
    passName: 'defaultPass',
    gatherers: ['performance-timing-gatherer']
  }],
  audits: ['performance-timing-audit'],
  categories: {
    newperfmetrics: {
      name: 'New Performance Timings',
      description: 'Measures some window.performance timings ...',
      audits: [{id: 'performance-timing-audit', weight: 1}]
    }
  }
};
// module.exports = {
//   extends: 'lighthouse:default',
//   passes: [{
//     passName: 'defaultPass',
//     gatherers: ['performance-timing-gatherer']
//   }],
//   audits: ['performance-timing-audit'],
//   categories: {
//     newperfmetrics: {
//       name: 'New Performance Timings',
//       description: 'Measures some window.performance timings ...',
//       audits: [{id: 'performance-timing-audit', weight: 1}]
//     }
//   }
// };