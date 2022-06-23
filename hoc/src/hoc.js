import Header from "./header";
import Sidebar from "./sidebar";

const Layout = (Component)=> {
  return ()=> {
    return (
      <>
        <Header/>
        <Sidebar/>
        <div style={{position: "absolute", marginLeft: "350px"}}>
          <Component/>
        </div>
      </>
    );
  }
  
}

export default Layout;


///()=> <></>
const t2 = ()=> {
  return 5;
  return 6;
}