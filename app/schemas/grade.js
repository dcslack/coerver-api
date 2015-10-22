module.exports = {
  attributes: {
    score: { type: 'number' },
    accuracy: { type: 'number' },
  },
  relationships: {
    participant: { type: 'participant', isMany: false },
    curriculum: { type: 'curriculum', isMany: false },
    session: { type: 'session', isMany: false },
  }
};
