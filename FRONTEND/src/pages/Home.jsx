import Slider from '../components/Slider';
import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';

import Footer from '../components/Footer';
import LoggedIn from '../components/LoggedIn';
import { useSelector } from 'react-redux';
const Home = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      {user ? <LoggedIn /> : <Navbar />}
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
