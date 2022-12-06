import React from 'react'

export const DeleteForm = ({product, onDeleteProduct}) => {
    let token = localStorage.getItem('jwt')
    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`/products/${product.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token
                },
            }).then(res => res.text())
            .then(data => onDeleteProduct(data)) 
            console.log("Delete!")
    }
    return (
        <div>
            <button onClick={handleDelete} className="btn btn-primary">DELETE</button>
        </div>
    )
}

export default DeleteForm