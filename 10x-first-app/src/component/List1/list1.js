import Item1 from "../Item/item1";
//attributes     //props
const Parent = ()=> {
    const data = [{
        name: "Dosa",
        img: "",
        category: "veg"
    },
    {
        name: "Idli",
        img: "",
        category: "veg"
    },
    {
        name: "Chicken",
        img: "",
        category: "non-veg"
    },
    {
        name: "Almond Milk",
        img: "",
        category: "vegan"
    }
];
function buyNow(data) {
    console.log(data)
}
const data1 = [];
    return (
        <div>
          {
              data.map((ele,i)=> {
                  return <Item1 itemData={ele} count={i} buyNow={buyNow}></Item1>
              })
          }
        </div>
    )
}
export default Parent;