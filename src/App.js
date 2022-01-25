import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
    </Routes>
  </div>
);

export default App;
