import './App.css';
import { useEffect, useState } from 'react';
import { getData } from './utils/const'
import { CardComponent } from './CardComponent'

function App() {



  // //Promise 
  // function getData(){
  //   let value = new Promise((resolve, reject) =>{
  //     setTimeout(() =>{
  //       let aux = "Hola como andas?";
  //       resolve(aux)
  //     },3000)
  //   });
  //   return value;
  // }

  // getData().then(result =>{
  //   console.log(result);
  // })

  // function getData1(){
  //   let value = new Promise((resolve, reject) =>{
  //     setTimeout(() =>{
  //       let aux = 19;
  //       if (aux >= 20) {
  //         resolve(aux) 
  //       }else {
  //         reject("ERROR: ups, es menor a 20");
  //       }
      
  //     }, 3000)
  //   });
  //   return value;
  // }

  // getData1().then(result =>{
  //   console.log(result);
  // }).catch(error => {
  //   console.error(error);
  // })

let [products, setProducts] = useState([]);

  useEffect( () => {
    
    const waitForData = async () =>{
    let data =  await getData()
    let aux = data.map(element => {
    return {
     name: element.name, 
     image: element.image,
     house: element.house
    }
  });
 setProducts(aux);
}
  waitForData();

},[])
if (products.length > 0) {
  console.log(products);

}

  return (
    <div className="App">
       {products.length === 0 ? 'cargando...' : 'ya cargue!'}
       {products.map(element => {
         return (
            <CardComponent name={element.name} image={element.image} house={element.house}/>
         )
       })}  
            </div>
            );
         }
  export default App;
  