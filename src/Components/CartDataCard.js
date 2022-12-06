function CartDataCard({count, products}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
               <tbody>
                  { products?.map((product, i) => {
                    return(
                            
                    <tr key={i}>
                        <td>{product.count}</td>
                        <td className=''>{<img src={product.image_url}/>}</td>
                        <td>{product.title}</td>
                        <td>{count}</td>
                        <td>{product.price}</td>
                    </tr>
                    )})}
                </tbody>
                <tfoot>
                    <tr>
                        <th>QTY</th>
                        <th>$Total</th>
                    </tr>
                    </tfoot>
                </table>
        </div>
  )
}
export default CartDataCard