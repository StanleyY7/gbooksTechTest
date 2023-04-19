export interface Books {
  id: number;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    pageCount: string;
    previewLink: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export type sortFunction = (a: Books, b: Books) => number;

export interface State extends Books {
  global: {
    data: [];
    selectBook: {
      volumeInfo: Books["volumeInfo"];
    };
    sortOrder: [] | string;
    sortedBooks: [];
  };
}
