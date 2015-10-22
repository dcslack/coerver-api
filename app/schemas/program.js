module.exports = {
  attributes: {
    name: { type: 'string' },
    description: { type: 'string' },
  },
  relationships: {
    sessions: { type: 'session', isMany: true },
  },
};
