import React from "react";

const BookCard = ({ image, title, description, characters, onButtonClick }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>პერსონაჟები:</h4>
      <ul>
        {characters.map((char, index) => (
          <li key={index}>{char}</li>
        ))}
      </ul>
      <button onClick={() => onButtonClick(title, characters)}>
        ინფორმაცია კონსოლში
      </button>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "5px"
  }
};

export default BookCard;
