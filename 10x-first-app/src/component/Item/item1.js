const Item1 = (props)=> {
    console.log(props, "response from props")
    props.buyNow("test");
    return (
        <div>
            <div>{props.itemData.category}</div>
            <div>{props.itemData.name}</div>
        </div>
    )
}
export default Item1;