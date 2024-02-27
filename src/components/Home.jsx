import React, { useState, useEffect } from "react";
import productService from "../service/productService";
import { Link } from "react-router-dom";

const Home = () => {
  const [productList, setProductList] = useState([]);

  //logic to fetch All products is seperately written in function
  const logicToFetchAllProducts=()=>{
    productService.getAllProducts()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => { console.log(err)});
  }

  //fetching all Product List //productService.getAllProducts()
  useEffect(() => {
    logicToFetchAllProducts();
  }, []);

  const [msg, setMsg] = useState("");

  //handling deletion of Product with id passed //productService.deleteProduct(id)
  const handleDelete = (id)=>{
    // console.log(id);
    productService.deleteProduct(id)
    .then((res)=>{
      console.log(res);
      setMsg("Product Deleted Successfully!!!!");
      //to fetch all products after deletion of single product
      logicToFetchAllProducts();
    })
    .catch((err)=>{console.log(err)});
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-header fs-3 text-center">
                List of Products
              </div>

              { msg && <p className="fs-3 text-center" style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}>{msg}</p> }
              
              <div className="card-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((item, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{item.productName}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.status}</td>
                        <td>
                          <Link to={'/editProduct/'+item.id} className="btn btn-sm btn-primary">Edit</Link>
                          <button onClick={()=> handleDelete(item.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
