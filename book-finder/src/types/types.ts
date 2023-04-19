export interface Books {
  id: number;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
  };
}

export type sortFunction = (a: Books, b: Books) => number;

export interface State {
  global: {
    data: [];
    selectBook: [];
    sortOrder: [] | string;
    sortedBooks: [];
  };
}
