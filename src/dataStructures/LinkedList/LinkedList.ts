type ListNode = {
  value: any;
  next: ListNode | null;
};

export const createListNode = (value: any, next?: ListNode): ListNode => ({
  value,
  next: next || null,
});

export const LinkedList = (
  initialValue: any
): {
  head: ListNode;
  insert: Function;
  insertHead: Function;
  insertAfter: Function;
  findMatchingNode: Function;
} => {
  const headNode = createListNode(initialValue);
  let leafNode = headNode;

  return {
    head: headNode,
    insert: function (value: any) {
      const node = createListNode(value);
      leafNode.next = node;
      leafNode = node;

      return this;
    },
    insertHead: function (value: any) {
      const node = createListNode(value, this.head);
      this.head = node;

      return this;
    },
    findMatchingNode: function (
      listNode: ListNode,
      startingNode: ListNode = this.head
    ) {
      if (startingNode.next === null) {
        return undefined;
      }
      if (startingNode === listNode) {
        return startingNode;
      }
      return this.findMatchingNode(listNode, startingNode.next);
    },
    insertAfter: function (listNode: ListNode, value: any) {
      let whichNode = this.findMatchingNode(listNode);
      if (whichNode) {
        const newNode = createListNode(value, whichNode.next);
        whichNode.next = newNode;
        return this;
      }

      throw new Error("The node you passed was not found 🤷‍♂️");
    },
  };
};