import './App.css';
import Navbar from './Component/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Component/Footer/Footer';
import wall_banner from './Component/Assests/wallbanner.jpg'
import kitchen_banner from './Component/Assests/kitchenbanner.jpg'
import furniture_banner from './Component/Assests/furniture.jpg'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop></Shop>}/>
        <Route path='/walls' element={<ShopCategory banner={wall_banner} category='Wall'/>}/>
        <Route path='/kitchens' element={<ShopCategory  banner={kitchen_banner} category='kitchen'/>}/>
        <Route path='/ceils' element={<ShopCategory banner={furniture_banner} category='furniture'/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
