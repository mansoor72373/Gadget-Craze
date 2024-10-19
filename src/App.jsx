
import Navbar from './components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Topdeals from './navpages/Topdeals';
import Dealoftheday from './navpages/Dealoftheday';
import LocalShop from './navpages/LocalShop';
import Membership from './navpages/Membership';
import HomePage from './pages/homepage/HomePage';
import  Footer  from './components/Footer';
import Shop from './mainShop/Shop';
import Cart from './pages/Cart';
import Account from './components/Account';
import AdminPanel from './components/AdminPanel';
import UserAdminPanel from './components/UserAdminPanel';
import AboutPage from './components/AboutPage';



function App() {
  return (
    <Router>

      <Navbar  />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/navpages/Topdeals" element={<Topdeals />} />
        <Route path="/navpages/Dealoftheday" element={<Dealoftheday />} />
        <Route path="/navpages/LocalShop" element={<LocalShop />} />
        <Route path="/navpages/Membership" element={<Membership/>} />
        <Route path="/pages/Cart" element={<Cart />} />
        <Route path="/components/AdminPanel" element={<AdminPanel />} />
        <Route path="/components/UserAdminPanel" element={<UserAdminPanel />} />
        <Route path="/components/Account" element={<Account />} />
        <Route path="/mainShop/Shop" element={<Shop />} />
        <Route path="/navpages/LocalShop/:id" element={<LocalShop/>}/>
        <Route path="/components/AboutPage" element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
