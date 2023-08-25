import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from 'react';
import UserStore from './store/UserStore';

export type UserContent = {
  user: UserStore
};

export const Context = createContext<UserContent>({
  user: new UserStore()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    user: new UserStore()
  }}>
    <App />
  </Context.Provider>
);
