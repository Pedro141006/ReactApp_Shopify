import { Link } from 'react-router-dom'
import './category.css'

export default function CategoryCard({ title, img, cateRef }) {
  return (
    <>
      <Link to={cateRef}>
        <div className="categoryBox">
          <img src={img} alt="" />
          <h3>{title}</h3>
        </div>
      </Link>
    </>
  )
}
