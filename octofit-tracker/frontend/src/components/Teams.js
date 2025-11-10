import React, { useEffect, useState } from 'react';

const Teams = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespace ? `https://${codespace}-8000.app.github.dev/api/teams/` : 'http://localhost:8000/api/teams/';
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    console.log('Fetching from:', baseUrl);
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Fetched teams:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [baseUrl]);

  return (
    <div>
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map((team, idx) => (
          <li key={idx} className="list-group-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
