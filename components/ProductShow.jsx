
const ProductShow = ({url}) => {

  return (
    <div className="show-case__image">
      <img src={url} alt="glasses" style={
          {
              width:100,
              height:100
          }
      }
      />
      </div>
  )
}

export default ProductShow
