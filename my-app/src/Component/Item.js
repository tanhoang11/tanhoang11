function Item(props) {
  const {itemList} = props;
  console.log(itemList);

  return (
    <div className="Item">
      <div className="Product">
        <img
          src={itemList.img}
          alt=""
        />
        <h4>{itemList.title}</h4>
        <p>{itemList.price} VNĐ</p>
        <button>Add to cart</button>
      </div>    
    </div>
  );
}
export default Item;
