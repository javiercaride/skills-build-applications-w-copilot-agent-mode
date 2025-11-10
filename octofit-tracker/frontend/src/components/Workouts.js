import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespace ? `https://${codespace}-8000.app.github.dev/api/workouts/` : 'http://localhost:8000/api/workouts/';
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    console.log('Fetching from:', baseUrl);
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Fetched workouts:', results);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [baseUrl]);

  return (
    <div>
      <h2>Workouts</h2>
      <ul className="list-group">
        {workouts.map((workout, idx) => (
          <li key={idx} className="list-group-item">
            {workout.name}: {workout.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
