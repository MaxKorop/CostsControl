import React, { useContext, useState, useEffect } from 'react';
import { SignUp } from './components/modals/SignUpModal';
import { NavBar } from './components/NavBar';
import { GroupList } from './components/Group/GroupList';
import { Context } from '.';

function App() {

  const [signUpVisible, setSignUpVisible] = useState<boolean>(true);

  const { user } = useContext(Context);

  const onHideSignUp = (): void => {
    setSignUpVisible(!signUpVisible)
  }

  return (
    <>
      <NavBar />
      {!user.isAuth && <SignUp show={signUpVisible} onHide={onHideSignUp} />}
      <GroupList/>
    </>
  );
}

export default App;
