const {
  traverse,
  collapseNodeChildren,
  expandNodeChildren,
  idifyNode,
  toggleNodeChildren,
} = require("./idify");

const id = "some-id";

describe("tree structure", () => {
  const tree = {
    name: "root",
    children: [
      {
        name: "foo",
        children: [
          {
            name: "foo-foo",
          },
          {
            name: "foo-bar",
          },
        ],
      },
      {
        name: "bar",
        children: [
          {
            name: "bar-foo",
            children: [
              {
                name: "bar-foo-1",
              },
              {
                name: "bar-bar-1",
              },
            ],
          },
          {
            name: "bar-bar",
          },
        ],
      },
    ],
  };

  describe("traverse a tree structure and apply the same function to all nodes", () => {
    describe("idify", () => {
      it("should give id to a node and all its children", () => {
        expect(traverse(tree, idifyNode)).toEqual({
          id,
          name: "root",
          children: [
            {
              id,
              name: "foo",
              children: [
                {
                  id,
                  name: "foo-foo",
                },
                {
                  id,
                  name: "foo-bar",
                },
              ],
            },
            {
              id,
              name: "bar",
              children: [
                {
                  id,
                  name: "bar-foo",
                  children: [
                    {
                      id,
                      name: "bar-foo-1",
                    },
                    {
                      id,
                      name: "bar-bar-1",
                    },
                  ],
                },
                {
                  id,
                  name: "bar-bar",
                },
              ],
            },
          ],
        });
      });
    });

    it("should collapse all children nodes", () => {
      const actual = traverse(tree, collapseNodeChildren);
      const expected = {
        name: "root",
        _children: [
          {
            name: "foo",
            _children: [
              {
                name: "foo-foo",
              },
              {
                name: "foo-bar",
              },
            ],
          },
          {
            name: "bar",
            _children: [
              {
                name: "bar-foo",
                _children: [
                  {
                    name: "bar-foo-1",
                  },
                  {
                    name: "bar-bar-1",
                  },
                ],
              },
              {
                name: "bar-bar",
              },
            ],
          },
        ],
      };

      expect(actual).toEqual(expected);
    });

    it("should collapse all children nodes when toggled once", () => {
      const actual = traverse(tree, toggleNodeChildren);
      const expected = {
        name: "root",
        _children: [
          {
            name: "foo",
            _children: [
              {
                name: "foo-foo",
              },
              {
                name: "foo-bar",
              },
            ],
          },
          {
            name: "bar",
            _children: [
              {
                name: "bar-foo",
                _children: [
                  {
                    name: "bar-foo-1",
                  },
                  {
                    name: "bar-bar-1",
                  },
                ],
              },
              {
                name: "bar-bar",
              },
            ],
          },
        ],
      };

      expect(actual).toEqual(expected);
    });

    it("should expand all children nodes with expandNode", () => {
      const collapsedTree = {
        name: "root",
        _children: [
          {
            name: "foo",
            _children: [
              {
                name: "foo-foo",
              },
              {
                name: "foo-bar",
              },
            ],
          },
          {
            name: "bar",
            _children: [
              {
                name: "bar-foo",
                _children: [
                  {
                    name: "bar-foo-1",
                  },
                  {
                    name: "bar-bar-1",
                  },
                ],
              },
              {
                name: "bar-bar",
              },
            ],
          },
        ],
      };
      const actual = traverse(collapsedTree, expandNodeChildren, "_children");

      expect(actual).toEqual(tree);
    });

    it("should bring root to original state when collapsed and expanded", () => {
      const collapsedTree = traverse(tree, collapseNodeChildren);
      const actual = traverse(collapsedTree, expandNodeChildren, "_children");

      expect(actual).toEqual(tree);
    });
  });
});
