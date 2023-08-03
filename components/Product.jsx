const Product = ({ handleClick, productImages }) => {

    return (
        <div className="product-container">
            <img src={productImages} onClick={handleClick}
                style={
                    {
                        width: 200,
                        height: 300,
                        objectFit: "contain"
                    }

                } />
        </div>
    )
}

export default Product
