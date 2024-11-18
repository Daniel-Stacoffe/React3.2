import { useState } from "react";

import "./QuoteCard.css";

function QuoteCard({ image, quote, character }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <figure className="QuoteCard">
      <img src={image} alt={character} />
      <figcaption>
        <blockquote>{quote}</blockquote>
        <p>
          <cite>{character}</cite>
          <button
            className={favorite ? "is-favorite" : ""}
            onClick={(event) => {
              const newFavorite = !favorite;
              setFavorite(newFavorite);
            }}
          >
            &#9733;
          </button>
        </p>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;
