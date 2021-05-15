const { idify } = require("./idify");

const id = "some-id";

describe("idify", () => {
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

  it("should give id to a node and all its children", () => {
    expect(idify(tree)).toEqual({
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
