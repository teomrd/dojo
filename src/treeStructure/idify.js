const id = "some-id";

const idify = (node) => {
  const { children } = node;
  const newChildren = children ? { children: children.map(idify) } : {};

  return {
    id,
    ...node,
    ...newChildren,
  };
};

module.exports = {
  idify,
};
