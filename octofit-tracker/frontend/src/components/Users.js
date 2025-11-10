import React, { useEffect, useState } from 'react';

const Users = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespace ? `https://${codespace}-8000.app.github.dev/api/users/` : 'http://localhost:8000/api/users/';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Fetching from:', baseUrl);
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Fetched users:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [baseUrl]);

  return (
    <div>
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((user, idx) => (
          <li key={idx} className="list-group-item">
            {user.name} ({user.email}) - Team: {user.team?.name || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
