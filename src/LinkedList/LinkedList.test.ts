import { createListNode } from "./LinkedList";

describe("Linked List", () => {
  it("should let you create a Linked List", () => {
    const headNode = createListNode(5);

    const node = createListNode(6, headNode);

    expect(node).toEqual({
      value: 6,
      next: {
        value: 5,
        next: null,
      },
    });
  });
});
