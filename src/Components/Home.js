import React, { Component } from 'react';
// import './Home.css'
// import Navbar from './Navbar'
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom'




class Home extends Component {
    render() {
        return (
            <div className="corner">

                <Helmet>
                <style type="text/css">{`
                .content{
  background: linear-gradient(blue, blue), url('https://images.pexels.com/photos/333837/pexels-photo-333837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
  /*****************************/
  background-position: right;
  background-repeat: no-repeat;
   /* width: 100%;
  height: 100%; */
  padding: 5%;


 /* width:100%;
height:100%;
 
 background-image: url("https://images.pexels.com/photos/333837/pexels-photo-333837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
 background-repeat: no-repeat;
background-size: cover;
background-position: center; */


 opacity: 0.7;
 /* z-index: 1; */
 color:white;

}
h1{
  text-align: center;
  color:white;
  
}

.vl{
border-left: 6px solid rgb(245, 237, 237);
/* border-style:double; */
height: 100px;
position: absolute;
left: 50%;
margin-left: -10px;
margin-right: 5px;

margin-top: 21rem;
top: 10%;
}


.corner{
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5em;
  background-size: 100vw;
  // background-color: blue;
 
  background: url('https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
background-repeat: no-repeat;
background-size: cover;
background-position: center; 
}
.bt1{
  float: left;
  margin-top: 4rem;
  /* margin-right: 2rem; */


  /* padding-left: 5rem; */
  background-color: rgb(248, 103, 6);
}
.bt2{
  float: right;
  margin-top: 4rem;
  /* margin-left: 2rem; */

  background-color: rgb(248, 103, 6);

  // padding-right: 5rem;


}



   
`}</style>
                    </Helmet>
              
              
                
                <div className="content ">
                <h1>What do you want to do?</h1>

                <Link className="bt1 btn btn-rounded text-white" to="/list_property">List Property</Link>

                <Link className="bt2 btn btn-rounded text-white" to="/search_property">Search Property</Link>

                <div class="vl">
                </div>
              </div>
                
                
    
     
            

            </div>
        );
    }
}

export default Home;