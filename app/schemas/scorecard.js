module.exports = {
  relationships: {
    participant: { type: 'participant', isMany: false },
    records: { type: 'record', isMany: false },
    group: { type: 'group', isMany: false },
    session: { type: 'session', isMany: false },
    curriculum: { type: 'curriculum', isMany: false },
  },
};
