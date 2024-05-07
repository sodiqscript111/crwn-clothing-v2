import "./category-item.styles.scss";
const CategoryItem = ({ category }) => {
  const { imageUrl, tittle, id } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{tittle}</h2>
        <p>Buy now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
