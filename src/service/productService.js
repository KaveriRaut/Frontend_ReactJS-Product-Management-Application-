import axios from "axios";
// this file is making connection of frontend to backend API endpoints using axios thr REST endpoint of TOMCAT server
// here REST API endpoints of backend are used and defined as a service on frontend side to use it
const API_URL = "http://localhost:8080";

class ProductService {

  saveProduct(product) {
    return axios.post(API_URL + "/saveProduct", product);
  }

  getAllProducts(){
    return axios.get(API_URL+"/");
  }

  getProductById(id){
    return axios.get(API_URL+"/"+id);
  }

  deleteProduct(id){
    return axios.get(API_URL+"/deleteProduct/"+id);
  }

  editProduct(product){
    return axios.post(API_URL+"/updateProduct/"+product.id, product);
  }

}

export default new ProductService();
