export interface User {
  name: string;
}

export interface CreateInputProps {
  value: string;
  checkInput: (value: string) => void;
}


export interface addItemType {
  addItem: (item: string) =>  void;
}

export interface ItemProps {
  id: number;
  item: string;
  isUnpacked: boolean;
}

interface ItemHandlers {
  getItem: (item: ItemProps) => void;
  removeElem: (elem: ItemProps) => void;
}

export interface ItemHandlersProps extends ItemHandlers {
  itemProps: ItemProps;
}

export interface ItemsHandlersProps extends ItemHandlers {
  items: ItemProps[];
  title: string;
}

export interface SearchProps {
  value: string;
  checkChange: (value: string) => void;
}

export interface MarkedProps {
  items: ItemProps[];
  getItem: (item: ItemProps) => void;
}