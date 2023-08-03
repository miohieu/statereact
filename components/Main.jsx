import Product from "./Product"
import { useState } from "react"
import { data } from "../utils/dataGlasses"
import ShowCase from "./ShowCase"

const Main = () => {
    const [image, setImage] = useState("/images/v1.png")

    const handleImage = (id) => {
        setImage(prev => data.find(e => e.id === id).url)
    }
    return (
        <div className="flex">
            <ShowCase image={image} />
            <div className="main__product">

                {data.map(product => (
                    <Product key={product.id} handleClick={() => {
                        handleImage(product.id)
                    }} productImages={product.url} />
                )
                )
                }
            </div>
        </div>
    )
}

export default Main
