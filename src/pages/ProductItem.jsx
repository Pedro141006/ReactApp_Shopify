import { Link, useParams } from 'react-router-dom'
import '../styles/product.css'
import { useEffect, useState } from 'react'
import PermissionAccess from '../js/PermissionAccess'
import useCartCollections from '../hooks/useCartCollections'

export default function ProductItem() {
  let permissison = localStorage.getItem('permission')

  const [item, setItem] = useState({})
  const [qtdItem, setQtdItem] = useState(1)

  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const { productId } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setItem(data))
  }, [productId])

  function addItem() {
    let counter = qtdItem + 1
    setQtdItem(counter)
  }

  function subtractItem() {
    let counter = qtdItem - 1
    setQtdItem(counter)
  }

  if (qtdItem <= 0) {
    alert('The quantity cannot be less than 1')
    setQtdItem(1)
  } else if (qtdItem >= 11) {
    alert('The quantity cannot be greater than 10')
    setQtdItem(10)
  }

  const [titleData, setTitleData] = useState('')
  const [descriptionData, setDescriptionData] = useState('')
  const [imageData, setImageData] = useState('')
  const [priceData, setPriceData] = useState()

  async function updateDataItem() {
    // If the api were real, here would be the data for the change
    let product = {
      title: titleData || item.title,
      price: priceData || item.price,
      description: descriptionData || item.description,
      image: imageData || item.imageS,
      category: item.category
    }
    setShowModal(false)
  }

  const { addCart } = useCartCollections()

  function setItensCart() {
    let productOBJ = {
      id: item.id,
      img: item.image,
      title: item.title,
      price: item.price,
      quantity: qtdItem
    }
    addCart(productOBJ)
    setShowToast(true)
  }

  return (
    <>
      <div className="btnBack">
        <Link to={'/home'}>
          <i className="fa-solid fa-chevron-left"></i>
          Back
        </Link>
      </div>

      <div className="itemContainer">
        <img src={item.image} alt={item.title} />
        <div className="description">
          <h2>{item.title}</h2>
          <hr />
          <p>{item.description}</p>
        </div>
        <div className="options">
          <h3>${item.price}</h3>
          <br />
          <h5 className="stock">In stock</h5>

          <hr />

          <div className="quantity">
            <button onClick={subtractItem}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <input
              type="number"
              value={qtdItem}
              onChange={e => setQtdItem(e.target.value)}
              disabled
            />
            <button onClick={addItem}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className="btnsOptions">
            <Link
              className="btn btn-success buy"
              to={'/home/buy'}
              onClick={() => {
                localStorage.setItem('total', item.price * qtdItem)
              }}
            >
              Buy
            </Link>
            <button className="cart" onClick={setItensCart}>
              Cart
            </button>
            <PermissionAccess permissions={[permissison]}>
              <button
                className="edit"
                onClick={() => {
                  setShowModal(true)
                }}
              >
                Edit
              </button>
              <button className="delete">Delete</button>
            </PermissionAccess>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex="-1"
          style={{ display: 'block' }}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false)
                  }}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <small className="alert">
                  The changes will not work, as the API is fictitious, this is
                  just an example.
                </small>
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Title:
                    </label>
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={titleData || item.title}
                      onChange={e => setTitleData(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={descriptionData || item.description}
                      onChange={e => setDescriptionData(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      URL_Image:
                    </label>
                    <input
                      className="form-control"
                      type="url"
                      id="formFile"
                      value={imageData || item.image}
                      onChange={e => setImageData(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Price:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={priceData || item.price}
                      onChange={e => setPriceData(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setShowModal(false)
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={updateDataItem}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          className={`toast ${showToast ? 'show' : ''}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Shopify</strong>
            <small>1 second ago</small>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowToast(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">The item has been added to cart</div>
        </div>
      </div>
    </>
  )
}
