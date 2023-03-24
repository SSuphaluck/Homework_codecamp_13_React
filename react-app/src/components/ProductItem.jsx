function ProductItem(props) {
  return (
    <div>
      <h1>Product Name: {props.name || props.obj.name}</h1>
      <h2>Price: {props.price || props.obj.price} Baht</h2>
      <p>Description: {props.description || props.obj.description}</p>
    </div>
  );
}

export default ProductItem;
