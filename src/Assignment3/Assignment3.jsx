import { useNavigate } from 'react-router-dom';
import '../Assignmentcommon.css';

export default function Assignment3() {
  const navigate = useNavigate();

  return (
    <div className="assignment-section full-screen">
      <h1>Assignment 3: React Router Implementation</h1>

      <div className="assignment-card button-group-horizontal">
        <button className="assignment-button" onClick={() => navigate('/assignment3/fd-rd-portal')}>
          FD & RD Management Portal
        </button>
        <button className="assignment-button" onClick={() => navigate('/assignment3/dashboard')}>
          User Dashboard Navigation
        </button>
        <button className="assignment-button" onClick={() => navigate('/assignment3/investments')}>
          Investment Detail Page
        </button>
      </div>
    </div>
  );
}
