import logo from './logo.svg';
import './App.css';
import MainButton from './components/MainButton';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { productData } from './components/mock';

function App() {
  console.log("productData", productData);
  return (
   <div className='container'>
     <Header />
     <div className='productWrapper'>
       {productData.map((el) => 
       <ProductCard 
        src={el.src}
        title={el.title}
        text1={el.description1}
        text2={el.description2}
        liter={el.liter}
        price={el.price}
        color={el.color}
       />)}
     </div>
   </div>
  )
}

export default App;
