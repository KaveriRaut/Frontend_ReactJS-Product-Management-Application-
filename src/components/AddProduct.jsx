import React, { useState } from "react";
import productService from "../service/productService";
// here in form <input> field, 'name' must match with model description from backend (productName,description,price,status) exact formate

const AddProduct = () => {
  //now here we will handle the user's input data
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  //handle each input fields and store data given by user into our useState hook object
  const handleChange = (e) => {
    const fieldValue = e.target.value; //this is 'value' given by user
    const fieldName = e.target.name; //this is 'name' fields in input
    //call setProduct function and assing this values to that name fields of product we will store
    setProduct({ ...product, [fieldName]: fieldValue });
  };
  
  const [msg, setMsg] = useState("");
  
  //handle on submit button click to crosscheck code=> then call backend service API endpoint -> that is already defined in productService.js
  const AddProductHandleSubmit = (e) => {
    e.preventDefault();
    console.log(product); //if this gives correct data in consol->then call REST_api service to backend -> that is already defined in productService.js
    
    //productService.saveProduct(product).then((res)=>{console.log("Product added successfully!!")}).catch((error)=>{console.log(error)});
    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Product added successfully to db!!");
        //now again make the object fields black and display success msg
        setMsg("Product Added Successfully!!!!");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card" style={{ background: '#e0f5ff' }}>
              <div className="card-header fs-3 text-center" style={{ background: '#a4c9da' }}>Add Product</div>

              { msg && <p className="fs-3 text-center" style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}>{msg}</p> }

              <div className="card-body">
                <form onSubmit={(e) => AddProductHandleSubmit(e)}>
                  <div className="mb-3">
                    <label className="form-label">Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.description}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.status}
                    />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Save Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
