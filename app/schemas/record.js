module.exports = {
  attributes: {
    isEmpty: { type: 'boolean' },
    score: { type: 'number' },
  },
  relationships: {
    stat: { type: 'stat', isMany: false },
    participant: { type: 'participant', isMany: false },
    session: { type: 'session', isMany: false },
    curriculum: { type: 'curriculum', isMany: false },
    group: { type: 'group', isMany: false },
  },
};
