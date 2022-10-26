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
  head: Function;
} => {
  const headNode = createListNode(initialValue);
  let leafNode = headNode;

  return {
    value: headNode,
    next: function (value: any) {
      const node = createListNode(value);
      leafNode.next = node;
      leafNode = node;

      return this;
    },
    head: function (value: any) {
      const node = createListNode(value, this.value);
      this.value = node;

      return this;
    },
  };
};