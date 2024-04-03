import './cartCard.css'

export default function CartCard({
  img,
  title,
  quantity,
  price,
  removeProduct
}) {
  return (
    <>
      <div className="cartProductCard">
        <div className="top">
          <img src={img} alt={title} />
          <p>{title}</p>
        </div>
        <div className="bottom">
          <div className="left">
            <button className="btn btn-danger" onClick={removeProduct}>
              <i className="fa-solid fa-trash-can"></i>
            </button>

            <div className="Qtd">
              <input type="text" value={`Qtd: ${quantity}`} disabled />
            </div>
          </div>
          <h4>${price}</h4>
        </div>
      </div>
    </>
  )
}
