import RegisterForm from 'components/RegisterForm';
import React from 'react';
import './App.css';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className='App'>
      <main>
        <RegisterForm />
      </main>
    </div>
  );
};

export default App;
