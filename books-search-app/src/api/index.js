import axios from "axios";

export const fetchBooks = async (
  search,
  searchCategory,
  sortBy,
  startIndex,
  maxResults
) => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_GOOGLE_BOOKS_API_URI +
        search +
        "+subject:" +
        searchCategory +
        "&orderBy=" +
        sortBy +
        "&key=" +
        import.meta.env.VITE_API_KEY +
        "&startIndex=" +
        startIndex +
        "&maxResults=" +
        maxResults
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
