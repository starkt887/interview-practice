import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [productList, setProductList] = useState([])

  const getEmployees = () => {
    // https://dummy.restapiexample.com/api/v1/employees

    fetch("https://dummyjson.com/products?limit=10")
      .then(async (res) => {
        let productList = await res.json()
        console.log(productList.products)
        setProductList(productList.products)
      })
      .catch((error) => {
        console.log(error);
      })

  }
  function test() {
    setTimeout(() => console.log(1), 2000);
    console.log(2);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  }


  return (
    <>
      <button onClick={getEmployees}>
        Fetch Employlist
      </button>
      <div>
        <ul>
          {
            productList &&
            productList.map((product) => {
              return <li key={product.id}>{product.title}</li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
