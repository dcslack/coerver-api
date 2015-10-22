module.exports = {
  attributes: {
    number: { type: 'number' },
    name: { type: 'string' },
  },
  relationships: {
    account: { type: 'account', isMany: false },
    coach: { type: 'coach', isMany: false },
    currciulum: { type: 'currciulum', isMany: false },
    session: { type: 'session', isMany: false },
    participants: { type: 'participant', isMany: true },
  }
};
