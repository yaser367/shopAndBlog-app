import { Link } from "react-router-dom"
import { blogType } from "../../types/blog.type"

import './Pair.scss'
const TextPair = (props:blogType) => {
  return (
    <>
    <Link to={`/blog/${props.id}`} className="link">
      <div className="app__imagePair">
        <div className="app__imagePair-font">
          <span className="app__imagePair-font">Product</span>
          <span className="app__imagePair-text">{props.text}</span>
        </div>
      </div>
    </Link>{" "}
    <Link to={`/blog/${props.id}`} className="link">
      <div className="app__imagePair">
        <img src={props.imgUrl} alt="Blog image" />
      </div>
    </Link>
  </>
  )
}

export default TextPair