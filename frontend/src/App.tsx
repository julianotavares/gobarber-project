import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
// import SignIn from './pages/SignIn';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyles />
  </>
);
export default App;
