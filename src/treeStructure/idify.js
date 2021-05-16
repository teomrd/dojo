const id = "some-id";

const idifyNode = (node) => ({
  ...node,
  id,
});

const collapseNodeChildren = (node) => ({
  ...node,
  children: undefined,
  _children: node.children,
});

const traverse = (node, fn) => {
  const { children, ...rest } = node;

  return fn({
    ...rest,
    ...(children ? { children: children.map((c) => traverse(c, fn)) } : {}),
  });
};

module.exports = {
  idifyNode,
  traverse,
  collapseNodeChildren,
};
