import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.componnt';
import CheckoutPage from './pages/checkout/checkout.component.jsx';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


  


class App extends React.Component {
  

  unsubscribeFromAuth = null


  componentDidMount() {
    const {setCurrentUser} = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            
            setCurrentUser({ 
              
                id: snapShot.id,
                ...snapShot.data()
              
            });
            
          });
          

      } 
      setCurrentUser(userAuth);
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {

  return (
    <div>
    <Header />

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUp />}/>
        <Route path='/checkout' element={<CheckoutPage />}/>

      </Routes>
    </div>
  );
}
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

//function that gets the dispatch property

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default  connect(
  //Have to look what that is!!!!
  mapStateToProps,
  mapDispatchToProps
  )(App);