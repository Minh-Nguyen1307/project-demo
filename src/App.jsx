import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/1. Header/Header'
import Home from './Pages/1. Home/Home'
import Footer from './Components/2. Footer/Footer';
import React, {useState} from 'react';
import SignUp from './Pages/2. SignUp/SignUp';
import LogIn from './Pages/3. LogIn/LogIn';
import Courses from './Pages/4. Courses/Courses';
import Information from './Pages/5. Information/Information';
import { CartProvider } from './CartContext';
import Cart from './Pages/6. Cart/Cart';
import Checkout from './Pages/7. Checkout/Checkout';
import Completion from './Pages/8. Completion/Completion';
import Profile from './Pages/10. Profile/Profile';
import MyCourse from './Pages/9. myCourses/MyCourse';
import Search from './Pages/12. Search/Search';
import CourseInitializer from './Data/1. AllCourses/AllCourses';
import Launch from './Pages/11. Launch/Launch';


function App() {
 
  const [searchKeyword, setSearchKeyword] = useState('');
  return (
    <CartProvider>
      <Router>
        <Header setSearchKeyword={setSearchKeyword} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Information/:title" element={<Information />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Completion" element={<Completion />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/MyCourse" element={<MyCourse />} />
            <Route path="/Search" element={<Search searchKeyword={searchKeyword} />} />
            <Route path="/Launch" element={<Launch />} />

            
          </Routes>
        <Footer />
      </Router>
      <CourseInitializer />
    </CartProvider>
  )
}

export default App
