export const fetchBooks = async () => {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=flowers"
  );
  const data = await response.json();
  console.log(data);
};
