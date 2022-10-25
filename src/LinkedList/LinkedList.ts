type ListNode = {
  value: any;
  next: ListNode | null;
};

export const createListNode = (value: any, next?: ListNode): ListNode => ({
  value,
  next: next || null,
});
