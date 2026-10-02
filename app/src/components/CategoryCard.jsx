import "../styles/categorycard.css";

function CategoryCard({ icon, title, description }) {
  return (
    <div className="category-card">
      <div className="category-icon">
        {icon}
      </div>

      <div className="category-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CategoryCard;