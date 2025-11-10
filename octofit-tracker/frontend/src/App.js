

function App() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src="/octofitapp-small.png" alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link" to="/activities">Activities</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/teams">Teams</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/workouts">Workouts</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container py-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card shadow-sm">
              <div className="card-body">
                <h1 className="card-title text-center mb-3">Bienvenido a Octofit Tracker</h1>
                <p className="card-text text-center">Tu plataforma para equipos, actividades y retos fitness.</p>
                <div className="d-flex justify-content-center">
                  <NavLink to="/activities" className="btn btn-primary mx-2">Ver Actividades</NavLink>
                  <NavLink to="/leaderboard" className="btn btn-outline-light mx-2">Ver Leaderboard</NavLink>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

  import './App.css';
  import { NavLink, Routes, Route } from 'react-router-dom';
  import Activities from './components/Activities';
  import Leaderboard from './components/Leaderboard';
  import Teams from './components/Teams';
  import Users from './components/Users';
  import Workouts from './components/Workouts';
export default App;
