import React from'react';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import DeleteForm from './DeleteForm';

function EditForm({setProducts}) {
    const token = localStorage.getItem('jwt')

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (user.user_type === 'admin') {}
        let form = new FormData(e.target)
        let productId = form.get("ID")
        var obj = {};
        form.forEach((value, key) => {
            if (value) obj[key] = value
        });
        var body = JSON.stringify(obj);
        fetch(`http://localhost:3000/products/${productId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
          },
          body: body,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)

            // Uncomment the line below once you are ready to update the singular product that you edited (Not all products)
            setProducts([...data])
        });
      };


    return (
        <div className=''>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit} id="edit-coffee-form">
             <input type="text" name="ID" placeholder="ID" />
             <input type="text" name="title" placeholder="Title" />
            <input type="text" name="featured" placeholder="Featured" /> 
            <input type="text" name="stock" placeholder="Stock" /> 
            <input type="text" name="roast" placeholder="Roast" />
            <input type="text" name="singleOrigin" placeholder="Single Origin" /> 
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="price" placeholder="Price" />
            <input type="text" name="tastingNotes" placeholder="Tasting Notes" />
            <input type="text" name="imageUrl" placeholder="Image URL" />
            <button type="submit" className="">Edit Product</button>

          </form>
        </div>
    )
};



export default EditForm;

    // const [title, setTitle] = useState("");
    // const [featured, setFeatured] = useState(""); // boolean
    // const [roast, setRoast] = useState("");
    // const [single_origin, setSingle_Origin] = useState(""); // boolean
    // const [description, setDescription] = useState("");
    // const [price, setPrice] = useState("");
    // const [tasting_notes, setTasting_Notes] = useState("");
    // const [image_url, setImage_Url] = useState("");
    // const [stock, setStock] = useState("");

