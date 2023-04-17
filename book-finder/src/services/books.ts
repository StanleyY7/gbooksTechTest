export const fetchBooks = async () => {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=30"
  );
  const data = await response.json();
  return data.items;
};
