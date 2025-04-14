import React from 'react';
import './Assignment.css';
import { useNavigate } from 'react-router-dom';

export default function Assignment() {
  const navigate = useNavigate();

  return (
    <div className="assignment-page full-screen">
      <div className="assignment-container card">
        <h1 className="title">Assignment Dashboard</h1>
        <p className="subtitle">Welcome, <strong>Rahul Mishra</strong>. This is your assignment dashboard.</p>

        <h2 className="section-title">Assignments</h2>
        <div className="assignment-buttons-vertical">
          <button onClick={() => navigate('/assignment1')}>Assignment 1</button>
          <button onClick={() => navigate('/assignment2')}>Assignment 2</button>
          <button onClick={() => navigate('/assignment3')}>Assignment 3</button>
          <button onClick={() => navigate('/assignment4')}>Assignment 4</button>
          <button onClick={() => navigate('/assignment5')}>Assignment 5</button>
        </div>
      </div>
    </div>
  );
}
