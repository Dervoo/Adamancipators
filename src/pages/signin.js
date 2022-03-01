import React from 'react'
import Navbar from '../components/Navbar';
import Signin from '../components/Signin';
import ScrollToTop from '../components/Signin/ScrollToTop';

const SigninPage = () => {
  return (
   <div>
       <Navbar />
       <ScrollToTop />
       <Signin />
   </div>
  )
}

export default SigninPage