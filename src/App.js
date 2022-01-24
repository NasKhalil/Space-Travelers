import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/rockets" element={<Rockets />} />
    </Routes>
  </div>
);

export default App;
