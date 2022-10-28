import './App.css';

import NavBar from './Components/NavBar/NavBar';
import NavChip from './Components/NavBar/NavChip';

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <NavChip chipName="Home"/>
        <NavChip chipName="Projects"/>
        <NavChip chipName="About Me"/>
      </div>
    </div>
  );
}

export default App;
