
const ProductShow = ({url}) => {

    return (
        <div className="show-container">
        <img  className="show-case__image" src={url} alt="glasses" style={
            {
                width:300,
                    height:100,
                    objectFit: "contain",
                    top: 383,
                    left: 255
            }
        }
        />
        </div>
    )
}

export default ProductShow
