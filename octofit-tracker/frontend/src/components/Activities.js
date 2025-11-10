import React, { useEffect, useState } from 'react';

const Activities = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespace ? `https://${codespace}-8000.app.github.dev/api/activities/` : 'http://localhost:8000/api/activities/';
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log('Fetching from:', baseUrl);
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [baseUrl]);

  return (
    <div>
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((activity, idx) => (
          <li key={idx} className="list-group-item">
            {activity.type} - {activity.duration} min ({activity.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
