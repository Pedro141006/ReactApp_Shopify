import { Link } from 'react-router-dom'
import './card.css'

export default function CardProduct({ title, url_image, price, link_ref }) {
  return (
    <>
      <div className="CardBox">
        <img src={url_image} alt={title} />
        <div className="cardInformation">
          <Link to={link_ref}>
            <p>{title}</p>
          </Link>
          <small>${price}</small>
        </div>
      </div>
    </>
  )
}
