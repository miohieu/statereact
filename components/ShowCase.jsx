
import ProductShow from "./ProductShow"

const linkModel = "/images/model.jpg"


const ShowCase = ({image}) => {
  return (
      <div>
    <div className="model">
      <img src={linkModel} alt="model" style={
        {
            objectFit: "container"
        }
      } />
      </div>
      <ProductShow className="showcase-product" url={image}/>
      </div>
  )
}

export default ShowCase
