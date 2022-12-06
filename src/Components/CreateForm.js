import React from'react';
import ReactDOM from'react-dom';
import { useState } from 'react';

function CreateForm(newProduct) {
    const token = localStorage.getItem('jwt');
    const [title, setTitle] = useState("");
    const [featured, setFeatured] = useState(""); // boolean
    const [roast, setRoast] = useState("");
    const [single_origin, setSingle_Origin] = useState(""); // boolean
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [tasting_notes, setTasting_Notes] = useState("");
    const [image_url, setImage_Url] = useState("");
    const [stock, setStock] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleFeaturedChange = (e) => {
        setFeatured(e.target.value);
    }; // boolean
    const handleRoastChange = (e) => {
        setRoast(e.target.value);
    };
    const handleOriginChange = (e) => {
        setSingle_Origin(e.target.value);
    }; // boolean
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
    const handleTastingNotesChange = (e) => {
        setTasting_Notes(e.target.value);
    };
    const handleImageChange = (e) => {
        setImage_Url(e.target.value);
    };
    const handleStockChange = (e) => {
        setStock(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (user.user_type === 'admin') {}
    
    
        fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
    
          },
          body: JSON.stringify({
            title: title,
            featured: featured,
            roast: roast,
            single_origin: single_origin,
            description: description,
            price: price,
            tasting_notes: tasting_notes,
            image_url: image_url,
            stock: stock,
          }),
        })
          .then((res) => res.json())
          .then((products) => {
            console.log(products, "new products!");
            newProduct(products);
          });
    
        setTitle("");
        setFeatured(""); // boolean
        setRoast("");
        setSingle_Origin(""); // boolean
        setDescription("");
        setPrice("");
        setTasting_Notes("");
        setImage_Url("");
        setStock(""); // boolean
      };
   
     return (
        <div className='form'> 
          <h2>New Product</h2>
          <form onSubmit={handleSubmit}>
             <input onChange={handleTitleChange} type="text" name="title" placeholder="Title" value={title} />
            <input onChange={handleFeaturedChange} type="text" name="featured" placeholder="Featured" value={featured} /> {/* boolean */}
            <input onChange={handleStockChange} type="text" name="stock" placeholder="Stock" value={stock} /> {/* boolean */}
            <input onChange={handleRoastChange} type="text" name="roast" placeholder="Roast" value={roast} />
            <input onChange={handleOriginChange} type="text" name="singleOrigin" placeholder="Single Origin" value={single_origin} /> {/* boolean */}
            <input onChange={handleDescriptionChange} type="text" name="description" placeholder="Description" value={description} />
            <input onChange={handlePriceChange} type="text" name="price" placeholder="Price" value={price} />
            <input onChange={handleTastingNotesChange} type="text" name="tastingNotes" placeholder="Tasting Notes" value={tasting_notes} />
            <input onChange={handleImageChange} type="text" name="imageUrl" placeholder="Image URL" value={image_url} />
            <button type="submit" className="">Add Product</button>
          </form>
        </div>
      );
    };



export default CreateForm;