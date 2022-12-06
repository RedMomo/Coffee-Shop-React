import React, { useState} from "react";

// is there a way to only fetch once on this page? Can I put mutliple fetches in one function? Can I put multiple routes in one form/function?

function AdminCRUDForm() {
    // const token = localStorage.getItem('jwt')

// Create Product form
function NewProductForm({ newProduct }) {
    //does it matter that the format is different from the API (i.e.: singleOrigin vs single_origin)?
  const [title, setTitle] = useState("");
  const [featured, setFeatured] = useState(""); // boolean
  const [roast, setRoast] = useState("");
  const [singleOrigin, setSingleOrigin] = useState(""); // boolean
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tastingNotes, setTastingNotes] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState(""); // foriegn key

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
    setSingleOrigin(e.target.value);
  }; // boolean
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleTastingNotesChange = (e) => {
    setTastingNotes(e.target.value);
  };
  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };
  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  }; // foriegn key

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (user.user_type === 'admin') {}


    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // Authorization: "Bearer " + token,

      },
      body: JSON.stringify({
        title: title,
        featured: featured,
        roast: roast,
        singleOrigin: singleOrigin,
        description: description,
        price: price,
        tastingNotes: tastingNotes,
        imageUrl: imageUrl,
        additionalInfo: additionalInfo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        newProduct(data);
      });

    setTitle("");
    setFeatured(""); // boolean
    setRoast("");
    setSingleOrigin(""); // boolean
    setDescription("");
    setPrice("");
    setTastingNotes("");
    setImageUrl("");
    setAdditionalInfo(""); // foriegn key
  };

  return (
    <div className=""> 
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
         <input onChange={handleTitleChange} type="text" name="title" placeholder="Title" value={title} />
        <input onChange={handleFeaturedChange} type="text" name="featured" placeholder="Featured" value={featured} /> {/* boolean */}
        <input onChange={handleRoastChange} type="text" name="roast" placeholder="Roast" value={roast} />
        <input onChange={handleOriginChange} type="text" name="singleOrigin" placeholder="Single Origin" value={singleOrigin} /> {/* boolean */}
        <input onChange={handleDescriptionChange} type="text" name="description" placeholder="Description" value={description} />
        <input onChange={handlePriceChange} type="text" name="price" placeholder="Price" value={price} />
        <input onChange={handleTastingNotesChange} type="text" name="tastingNotes" placeholder="Tasting Notes" value={tastingNotes} />
        <input onChange={handleImageChange} type="text" name="imageUrl" placeholder="Image URL" value={imageUrl} />
        <input onChange={handleAdditionalInfoChange} type="text" name="additionalInfo" placeholder="Additional Info" value={additionalInfo} /> {/* foriegn key */}
        <button type="submit" className="">Add Product</button>
      </form>
    </div>
  );
};

// // Update Product form
// function UpdateProductForm({ updateProduct }) {
// const handleUpdateForm = (e) => {
//     e.preventDefault();

//         fetch("http://localhost:3000/products/${id}", {
//             method: "PATCH",
//             headers: {
//                 // Authorization: "Bearer " + token,
//                 "Content-Type": "application/json"
//             }, // end of headers
//             body: JSON.stringify({
//                 title: title,
//                 featured: featured,
//                 roast: roast,
//                 singleOrigin: singleOrigin,
//                 description: description,
//                 price: price,
//                 tastingNotes: tastingNotes,
//                 imageUrl: imageUrl,
//                 additionalInfo: additionalInfo,
//               }), // end of body
//         }) // end of fetch
//         .then(res => res.json())
//         .then((product) => console.log(product))
//     }; // end of handleUpdateForm

// return (
//     <div className=""> 
//       <h2>Update Product</h2>
//       <form onSubmit={handleSubmit}>
//          <input onChange={handleTitleChange} type="text" name="title" placeholder="Title" value={title} />
//         <input onChange={handleFeaturedChange} type="text" name="featured" placeholder="Featured" value={featured} /> {/* boolean */}
//         <input onChange={handleRoastChange} type="text" name="roast" placeholder="Roast" value={roast} />
//         <input onChange={handleOriginChange} type="text" name="singleOrigin" placeholder="Single Origin" value={singleOrigin} /> {/* boolean */}
//         <input onChange={handleDescriptionChange} type="text" name="description" placeholder="Description" value={description} />
//         <input onChange={handlePriceChange} type="text" name="price" placeholder="Price" value={price} />
//         <input onChange={handleTastingNotesChange} type="text" name="tastingNotes" placeholder="Tasting Notes" value={tastingNotes} />
//         <input onChange={handleImageChange} type="text" name="imageUrl" placeholder="Image URL" value={imageUrl} />
//         <input onChange={handleAdditionalInfoChange} type="text" name="additionalInfo" placeholder="Additional Info" value={additionalInfo} /> {/* foriegn key */}
//         <button type="submit" className="">Add Product</button>
//       </form>
//     </div>
//   );

// }; // end of UpdateProductForm

// // Delete Product form
// function deleteProduct() {
//     const handleDelete = (e) => {
//         e.preventDefault();
//         fetch(`http://localhost:3000/products/${id}`, {
//             method: "DELETE",
//             headers: {
//                 // Authorization: "Bearer " + token,
//                 "Content-Type": "application/json"
//             }, // end of headers
//         }) // end of fetch
//         .then(res => res.json())
//         .then((product) => console.log(product))
//         //.catch(err => console.log(err))
//     }; // end of handleDelete
// }; // end of deleteProduct
// return (
//     <div>
//         <button onClick={handleDelete} className="">DELETE</button>
//     </div>
// )



}; // end of AdminCRUDForm
export default AdminCRUDForm;











