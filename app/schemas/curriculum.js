module.exports = {
  attributes: {
    name: { type: 'string' },
    description: { type: 'string' },
    skill: { type: 'number' },
    fullPrice: { type: 'number' },
    downPayment: { type: 'number' },
    receipt: { type: 'string' },
  },
  relationships: {
    stats: { type: 'stat', isMany: true },
  },
};
