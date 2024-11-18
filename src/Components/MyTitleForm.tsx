import { useState } from "react";

function MyTitleForm() {
  const [title, setTitle] = useState("Awesome Title");

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    // Ignorer le caractère '*' dans la saisie
    const filteredTitle = newTitle.replace(/\*/g, "");
    setTitle(filteredTitle);
  };

  return (
    <header>
      <h1>{title}</h1>
      <label htmlFor="title">Title :</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
    </header>
  );
}

export default MyTitleForm;
