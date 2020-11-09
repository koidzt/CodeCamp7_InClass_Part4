import { useState } from 'react';
import './App.css';
import PrivateRoutes from './containers/PrivateRoutes';
import LocalStorage from './services/localStorage';

function App() {
  const [role, setRole] = useState(LocalStorage.getRole());

  return (
    <>
      <PrivateRoutes role={role} setRole={setRole} />
    </>
  );
}

export default App;