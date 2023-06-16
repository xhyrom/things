import { List } from "../List";

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList<T> implements List<T> {
  public head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  add(value: T): void {
    const node = new Node<T>(value);

    if (this.head === null) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  addAt(index: number, value: T): void {
    if (index < 0) throw new Error("Invalid index.");

    const node = new Node<T>(value);

    if (index === 0) {
      this.head = node;
      return;
    }

    let current: Node<T> = this.head!;
    let previous: Node<T> | null = null;

    let i = 0;
    while (i < index) {
      i++;
      previous = current;

      if (current.next == null) throw new Error("Invalid index.");

      current = current.next;
    }

    node.next = current;
    previous!.next = node;
  }

  indexOf(value: T): number | null {
    let i = 0;
    let current = this.head;

    while (current) {
      if (current.value === value) return i;

      i++;
      current = current.next;
    }

    return null;
  }

  get(index: number): T | null {
    if (index < 0) return null;

    let current: Node<T> = this.head!;
    let i = 0;

    while (i < index) {
      if (current.next == null) return null;

      i++;
      current = current.next;
    }

    return current.value;
  }

  remove(index: number): T {
    throw new Error("Method not implemented.");
  }

  size(): number {
    let size = 1;

    let current = this.head;

    while (current?.next) {
      size++;

      current = current.next;
    }

    return size;
  }

  toArray() {
    const arr: T[] = [];

    let current = this.head;

    while (current) {
      arr.push(current.value);

      current = current.next;
    }

    return arr;
  }

  clear(): void {
    throw new Error("Method not implemented.");
  }
}
