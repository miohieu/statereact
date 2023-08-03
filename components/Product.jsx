import { data } from "../utils/dataGlasses.js"

const Product = () => {
  return (
    <div>
      Product
      <div>
      {data.map(e => (
          <div key={e.id}> 
          {e.name}
          <img src={e.url} alt="glasses" />
          </div>))}

      </div>
      </div>
  )
}

export default Product
