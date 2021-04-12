import './App.css';
import Home from './Components/Home'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
import ViewProperty from './Components/viewProperty'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Register from "./Components/Register"
// import searchProperty from './Components/searchProperty'
import {  Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import listProperty from './Components/listProperty'
import Bedcrump from './Components/LandingPage/Bedcrump'
import AddLists from './Components/V2Rcode/AddLists'
import EnterCode from './Components/V2Rcode/EnterCode'
import Blog from './Components/Blog/Blog';



function App() {
  return (

    <>

  
      <Navbar/>

   
      <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={Contact} path='/contact'/>
      <Route component={Bedcrump} path='/search_property'/>
      <Route component={listProperty} path='/list_property'/>
      <Route component={ViewProperty} path='/view_listing'/>
      <Route component={Blog} path='/blog'/>
      <Route component={Register} path='/register'/>
      <Route component={Login} path='/login'/>
      <Route exact  path="/make_listing" component={AddLists}/>
      <Route exact  path="/v2r_code" component={EnterCode}/>

      </Switch>

  </>
    
 
  )
}

export default App;


