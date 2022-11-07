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
      .insert(2)
      .insert(3)
      .insert("end")
      .insertHead("start")
      .insert("this is the end");

    expect(list.head).toEqual({
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

  describe("insert after", () => {
    it("should create a Singly Linked List and insert after head node", () => {
      const list = LinkedList(1).insert(3).insert(4).insert(5);

      list.insertAfter(list.head, 2);

      expect(list.head).toEqual({
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: {
                value: 5,
                next: null,
              },
            },
          },
        },
      });
    });

    it("should create a Singly Linked List and insert after 4", () => {
      const list = LinkedList(1).insert(3).insert(4).insert(5);

      list.insertAfter(list.head.next.next, 400);

      expect(list.head).toEqual({
        value: 1,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 400,
              next: {
                value: 5,
                next: null,
              },
            },
          },
        },
      });
    });
  });
});
