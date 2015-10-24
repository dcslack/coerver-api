module.exports = {
  attributes: {
    gender: { type: 'string' },
    birthday: { type: 'date' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
  },
  relationships: {
    user: { type: 'user', isMany: false },
  },
};
