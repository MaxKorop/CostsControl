import React, { useState } from 'react';
import { SignUp } from './components/modals/SignUpModal';
import { NavBar } from './components/NavBar';
import { GroupList } from './components/Group/GroupList';

function App() {

  const [signUpVisible, setSignUpVisible] = useState<boolean>(true);

  const onHideSignUp = (): void => {
    setSignUpVisible(!signUpVisible)
  }

  return (
    <>
      <NavBar />
      <SignUp show={signUpVisible} onHide={onHideSignUp} />
      <GroupList/>
    </>
  );
}

export default App;
