import React from'react';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import DeleteForm from './DeleteForm';

function EditForm({updateProducts}) {
    const [id, setId] = useState("");
    const [products, setProducts] = useState([]);
     const [title, setTitle] = useState("");
    const [featured, setFeatured] = useState(""); // boolean
    const [roast, setRoast] = useState("");
    const [single_origin, setSingle_Origin] = useState(""); // boolean
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [tasting_notes, setTasting_Notes] = useState("");
    const [image_url, setImage_Url] = useState("");
    const [stock, setStock] = useState("");
    const token = localStorage.getItem('jwt')

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

        fetch(`http://localhost:3000/products/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            id: id,
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
          .then((data) => updateProducts(updateProducts));
      };


    return (
        <div>
            <form onSubmit={handleSubmit}>
             <input type="text" name="ID" placeholder="ID" id={`${products.id}`} />
             <input onChange={handleTitleChange} type="text" name="title" placeholder="Title" value={title} />
            <input onChange={handleFeaturedChange} type="text" name="featured" placeholder="Featured" value={featured} /> 
            <input onChange={handleStockChange} type="text" name="stock" placeholder="Stock" value={stock} /> 
            <input onChange={handleRoastChange} type="text" name="roast" placeholder="Roast" value={roast} />
            <input onChange={handleOriginChange} type="text" name="singleOrigin" placeholder="Single Origin" value={single_origin} /> 
            <input onChange={handleDescriptionChange} type="text" name="description" placeholder="Description" value={description} />
            <input onChange={handlePriceChange} type="text" name="price" placeholder="Price" value={price} />
            <input onChange={handleTastingNotesChange} type="text" name="tastingNotes" placeholder="Tasting Notes" value={tasting_notes} />
            <input onChange={handleImageChange} type="text" name="imageUrl" placeholder="Image URL" value={image_url} />
            <button onSubmit={handleSubmit} type="submit" className="">Edit Product</button>

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

