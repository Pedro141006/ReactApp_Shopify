import '../styles/additem.css'

export default function AddItem() {
  return (
    <>
      <h2>Add Item</h2>
      <hr />
      <div className="createItemContainer">
        <div className="firstInfo">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className="secondInfo">
          <div className="category">
            <label className="form-label">Category:</label>
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue={'category'}
            >
              <option value="category">categorys...</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="eletronics">eletronics</option>
            </select>
          </div>

          <div className="imageUrl">
            <label htmlFor="basic-url" className="form-label">
              Image url:
            </label>
            <div className="input-group">
              <span
                className="input-group-text text-bg-secondary"
                id="basic-addon3"
              >
                https://URL
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>

          <div className="price">
            <label className="form-label">Price:</label>
            <div className="input-group mb-3">
              <span className="input-group-text text-bg-secondary">$</span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text text-bg-secondary">.00</span>
            </div>
          </div>

          <button className="btn btn-primary btnAdd">Add</button>
        </div>
      </div>
    </>
  )
}
