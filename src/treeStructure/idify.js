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

const toggleChildren = (node) => ({
  ...node,
  children: node.children ? undefined : node._children,
  _children: node.children ? node.children : undefined,
});

const traverse = (node) => {
  const { children, ...rest } = node;

  return toggleChildren({
    ...rest,
    ...(children ? { children: children.map(traverse) } : {}),
  });
};

module.exports = {
  idify,
  traverse,
  toggleChildren,
};
