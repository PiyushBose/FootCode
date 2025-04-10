import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Landing } from './pages/landingPage';
import { Login } from './pages/loginPage';
import { Signup } from './pages/singupPage';
import { Leagues } from './pages/leaguespage';
import { LeagueInfo } from './pages/leaguePage';

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Layout />}>
          <Route path = '/' element = {<Landing />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/signup' element = {<Signup />} />
          <Route path = '/leagues' element = {<Leagues />} />
          <Route path = '/league_info' element = {<LeagueInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

const Layout = () => {
  return <div style = {{height : "100vh"}}>
    <Outlet />
  </div>
}

export default App
