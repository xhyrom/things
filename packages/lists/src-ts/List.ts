export interface List<T> {
  add(value: T): void;
  addAt(index: number, value: T): void;
  indexOf(value: T): number | null;
  get(index: number): T | null;
  remove(index: number): T;
  clear(): void;
}
