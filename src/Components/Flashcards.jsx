/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Flashcards.css';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useLocalStorage } from "@uidotdev/usehooks"; // Import useLocalStorage hook

const Flashcards = () => {
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [flashcards, setFlashcards] = useLocalStorage('flashcards', []);
  const [showFlashcardForm, setShowFlashcardForm] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleAddFlashcard = () => {
    setShowFlashcardForm(true);
    setQuestionValue("");
    setAnswerValue("");
    setEditMode(false); // Ensure edit mode is turned off when adding new flashcard
    setCurrentEditIndex(null); // Reset currentEditIndex
  };

  const handleCloseFlashcard = () => {
    setShowFlashcardForm(false);
    if (editMode) {
      setEditMode(false);
      setCurrentEditIndex(null);
      // No need to call handleSubmitQuestion here, as it will be called when saving
    }
  };

  const handleSubmitQuestion = () => {
    const tempQuestion = questionValue.trim();
    const tempAnswer = answerValue.trim();

    if (!tempQuestion || !tempAnswer) {
      alert("Input fields cannot be empty!");
      return;
    }

    if (editMode) {
      const updatedFlashcards = [...flashcards];
      updatedFlashcards[currentEditIndex] = { question: tempQuestion, answer: tempAnswer };
      setFlashcards(updatedFlashcards);
      setEditMode(false);
      setCurrentEditIndex(null);
    } else {
      setFlashcards([...flashcards, { question: tempQuestion, answer: tempAnswer }]);
    }

    setShowFlashcardForm(false);
    setQuestionValue("");
    setAnswerValue("");
  };

  const handleEditFlashcard = (index) => {
    setEditMode(true);
    setCurrentEditIndex(index);
    setQuestionValue(flashcards[index].question);
    setAnswerValue(flashcards[index].answer);
    setShowFlashcardForm(true); // Show form when editing
  };

  const handleModifyElement = (index) => {
    if (!editMode) {
      const updatedFlashcards = [...flashcards];
      updatedFlashcards.splice(index, 1);
      setFlashcards(updatedFlashcards);
    }
  };

  const toggleAnswerVisibility = (index) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].showAnswer = !updatedFlashcards[index].showAnswer;
    setFlashcards(updatedFlashcards);
  };

  return (
    <div className='Flashcards'>
      <div className="flash-container">
        <div className="add-flashcard-con">
          <button id="add-flashcard" onClick={handleAddFlashcard}>Add Flashcard</button>
        </div>

        <div id="card-con">
          <div className="card-list-container">
            {flashcards.map((flashcard, index) => (
              <div className="f-card" key={index}>
                <p className="question-div">{flashcard.question}</p>
                <p className={`answer-div ${flashcard.showAnswer ? '' : 'hide'}`}>{flashcard.answer}</p>
                <div className="buttons-con">
                  <button className="show-hide-btn" onClick={() => toggleAnswerVisibility(index)}>
                    {flashcard.showAnswer ? 'Hide' : 'Show'}
                  </button>
                  <button className="edit" onClick={() => handleEditFlashcard(index)}>
                    <FaRegEdit />
                  </button>
                  <button className="delete" onClick={() => handleModifyElement(index)}>
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`question-container ${showFlashcardForm ? "" : "hide"}`} id="add-question-card">
        <h2>{editMode ? 'Edit Flashcard' : 'Add Flashcard'}</h2>
        <div className="wrapper">
          <div className="error-con">
            <span className="hide" id="error">Input fields cannot be empty!</span>
          </div>
          <IoIosCloseCircle style={{ fontSize: '30px', color: '#587ef4' }} id="close-btn" onClick={handleCloseFlashcard}></IoIosCloseCircle>
        </div>

        <label className="question">Question:</label>
        <input
          className="input"
          id="question"
          placeholder="Type the question here..."
          rows="2"
          value={questionValue}
          onChange={(e) => setQuestionValue(e.target.value)}
        ></input>
        <label className="answer">Answer:</label>
        <input
          className="input"
          id="answer"
          rows="4"
          placeholder="Type the answer here..."
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
        ></input>
        <button id="save-btn" onClick={handleSubmitQuestion}>{editMode ? 'Update' : 'Save'}</button>
      </div>
    </div>
  );
};

export default Flashcards;
