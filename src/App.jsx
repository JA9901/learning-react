import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
    console.log("onTodoDelete()");
  }

  function cancelModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
  }

  useEffect(() => {
    console.log('on mount')
  }, [showModal])

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Fronend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k job" />
      </div>
      {showModal && (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmModal}
          title="Confirm delete?"
        />
      )}
    </div>
  );
}

export default App;
