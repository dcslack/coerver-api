module.exports = {
  attributes: {
    fullPrice: { type: 'number' },
    isFullyPaid: { type: 'boolean' },
    paidOn: { type: 'date' },
  },
  relationships: {
    session: { type: 'session', isMany: true },
    user: { type: 'user', isMany: false },
    participant: { type: 'participant', isMany: false },
    coupon: { type: 'coupon', isMany: false },
    payments: { type: 'payment', isMany: true },
  },
};
