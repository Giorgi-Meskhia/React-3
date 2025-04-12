import React from "react";
import BookCard from "./components/BookCard";

function App() {
  const bookData = {
    image: "https://covers.openlibrary.org/b/id/10594763-L.jpg",
    title: "ჰარი პოტერი და ფილოსოფიური ქვა",
    description: "პირველი წიგნი ჰარი პოტერის სერიიდან, ჯადოსნური თავგადასავლებით.",
    characters: ["ჰარი პოტერი", "ჰერმიონა გრეინჯერი", "რონ უიზლი"]
  };

  const handleBookClick = (title, characters) => {
    console.log("წიგნის სათაური:", title);
    console.log("პერსონაჟები:", characters.join(", "));
  };

  return (
    <div className="App">
      <BookCard
        image={bookData.image}
        title={bookData.title}
        description={bookData.description}
        characters={bookData.characters}
        onButtonClick={handleBookClick}
      />
    </div>
  );
}

export default App;
