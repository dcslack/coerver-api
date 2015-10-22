module.exports = {
  attributes: {
    name: { type: 'string' },
    street: { type: 'string' },
    state: { type: 'string' },
    city: { type: 'string' },
    zip: { type: 'number' },
    startDate: { type: 'date' },
    endDate: { type: 'date' },
    isInviteOnly: { type: 'boolean' },
    inviteCode: { type: 'string' },
  },
  relationships: {
    program: { type: 'program', isMany: false },
    curriculums: { type: 'curriculum', isMany: true },
  },
};
