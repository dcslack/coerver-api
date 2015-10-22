module.exports = {
  atrributes: {
    lastFourDigits: { type: 'string' },
    stripe: { type: 'string' },
    brand: { type: 'string' },
  },
  relationships: {
    user: { type: 'user', isMany: false },
  },
};
