import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products"
import MyOrders from "./pages/MyOrders"
import MyCart from "./pages/MyCart"
import Layout from "./layout/Layout"
import Button from "./components/UI/Button";
import Details from "./pages/Details";
const productsName = [
  {
    id:1,
    title:'Product name 1',
  },
  {
    id:2,
    title:'Product name 2',
  },
  {
    id:3,
    title:'Product name 3',
  }
]
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={ <Layout/> }>

         <Route path="/products" element={ <Products products={productsName}/> }/>
         <Route path="/products/:id/details" element={ <Details products={productsName}/> }/>
         <Route path="/mycart" element={ <MyCart/> }/>
         <Route path="/myorders" element={ <MyOrders/> }/> 

        </Route>
      </Routes>
    </div>
  );
}

export default App;
