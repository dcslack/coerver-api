module.exports = {
  attributes: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    phone: { type: 'string' },
    stripe: { type: 'string' },
  },
  relationships: {
    participants: { type: 'participant', isMany: true },
    payments: { type: 'payment', isMany: true },
    cards: { type: 'card', isMany: true },
    registrations: { type: 'registration', isMany: true },
  },
};
