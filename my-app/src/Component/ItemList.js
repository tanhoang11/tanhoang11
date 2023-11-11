import Item from "./Item";
function ItemList(props){
  const {dataItem} = props;

  function itemRenderList(){
    const itemListRender = dataItem.map((itemList) => {    
      return (
        <Item itemList={itemList} key={itemList.id}/>
      )
    })
    
    return itemListRender;
  } 
    return (
      <div className="List">
        {itemRenderList()}      
      </div>


    );
}
export default ItemList;