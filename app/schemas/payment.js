module.exports = {
  attributes: {
    amount: { type: 'number' },
    stripe: { type: 'string' },
  },
  relationships: {
    user: { type: 'user', isMany: true },
    registration: { type: 'registration', isMany: false },
  },
};
