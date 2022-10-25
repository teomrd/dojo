const createListNode = (value, next) => ({
  value,
  next: next || null,
});

module.exports = {
  createListNode,
};
