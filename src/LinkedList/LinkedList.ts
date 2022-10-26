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
  value: ListNode;
  next: Function;
} => {
  const headNode = createListNode(initialValue);
  let previousNode = headNode;

  return {
    value: headNode,
    next: function (value: any) {
      const node = createListNode(value);
      previousNode.next = node;
      previousNode = node;

      return this;
    },
  };
};