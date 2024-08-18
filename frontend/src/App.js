import React from 'react';
import { Chat, Setting } from './pages';
// import { Route } from 'lucide-react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App w-full h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
