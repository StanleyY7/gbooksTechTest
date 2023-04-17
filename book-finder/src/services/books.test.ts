import { fetchBooks } from "./books";
import { bookData } from "../testData/testData";

beforeEach(() => {
  global.fetch = jest.fn();
});

describe("Books service tests", () => {
  it("should fetch data from the Google Books API", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(bookData),
    });

    const data = await fetchBooks();

    expect(fetch).toHaveBeenCalledWith(
      "https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=30"
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual(bookData.items);
  });
});
