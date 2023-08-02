import { useCallback, useEffect, useState } from "react";

export default function useBookSearch(query: string, pageNumber: number) {
    const [results, setResults] = useState();

    const getBooks = useCallback(async (topic: string, index: number)  => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${topic}&startIndex=${(index - 1) * 10}&maxResults=10&projection=lite&key=AIzaSyD0bpwHIhHnYj5iNZZXJZAmTe4Tpk55pao`, {
                method: "GET"
            });
            const json = await response.json();
            console.log(json.items)
            setResults(json.items.map((book: any, index: number) => {
                return {
                            id: index,
                            img: book.volumeInfo.imageLinks?.thumbnail,
                            title: book.volumeInfo.title,
                            subtitle: book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "-",
                            propOne: `Title: ${book.volumeInfo.title}`,
                            propTwo: `Author: ${book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "-"}`,
                            propThree: `Year: ${book.volumeInfo.publishedDate?.match(/[0-9]{4}/).join("")}`,
                            propFour: `Description: ${book.volumeInfo.description ? book.volumeInfo.description : "-"}`
                        }
            }));

        } catch(err) {
            console.log(err)
        }
    }, [])

    useEffect(() => {
        if(pageNumber > 0) {
            getBooks(query, pageNumber);
        }
    }, [pageNumber, getBooks]);

    return results;
}