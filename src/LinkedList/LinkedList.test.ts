import { LinkedList, createListNode } from "./LinkedList";

describe("Linked List", () => {
  it("should let you link multiple List Nodes ", () => {
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

  it("should create a Singly Linked List", () => {
    const list = LinkedList(1)
      .next(2)
      .next(3)
      .next("end")
      .head("start")
      .next("this is the end");

    expect(list.value).toEqual({
      value: "start",
      next: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: "end",
              next: {
                value: "this is the end",
                next: null,
              },
            },
          },
        },
      },
    });
  });
});
