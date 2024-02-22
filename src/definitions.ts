export interface ListItem {
  path: string;
  name: string;
}

export type ItemsType<T> = {
  lists: T;
};

export type ListType<T extends string | number> = {
  [key: string]: T;
};
