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

const expandNodeChildren = (node) => ({
  ...node,
  children: node._children,
  _children: undefined,
});

const toggleNodeChildren = (node) => ({
  ...node,
  children: node.children ? undefined : node._children,
  _children: node.children ? node.children : undefined,
});

const traverse = (node, fn, traverseProp = "children") => {
  const { ...rest } = node;
  const children = node[traverseProp];

  return fn({
    ...rest,
    ...(children
      ? { [traverseProp]: children.map((c) => traverse(c, fn, traverseProp)) }
      : {}),
  });
};

module.exports = {
  idifyNode,
  traverse,
  collapseNodeChildren,
  expandNodeChildren,
  toggleNodeChildren,
};
