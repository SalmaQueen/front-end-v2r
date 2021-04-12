import React, { Component } from 'react'
import '../LandingPage/category.css';
import { Helmet } from 'react-helmet';



export default class Category extends Component {
    render() {
        return (
            <div className="mb-2">  
 <Helmet>
                <style type="text/css">{`

                    body {
                        margin: 0;
                    
                        width: 100%;
                        height: 100%;
                        background:  url('../Images/nice.jpg');
                        
                        /*****************************/
                       
                        background-size: cover;
                        background-repeat: no-repeat;
                    
                    }
                  
   
                  `}</style>
                    </Helmet>



                <div className="s002 banner">
      <form>
        <fieldset>
          <legend className="text-white">LET'S FIND A  HOME THAT IS PERFECT FOR YOU</legend>
        </fieldset>
        <div className="inner-form">
          <div className="input-field first-wrap">
            <div className="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </svg>
            </div>
            <input id="search" type="text" placeholder="Location" />
          </div>
       
          <div className="input-field fouth-wrap">
           
           <select data-trigger="" name="choices-single-defaul" className="p-4 m-2">
             <option placeholder="Maximum Price">Max price</option>
             <option>300 USD</option>
             <option>500 USD</option>
             <option>1000 USD</option>
           </select>
         </div>
          <div className="input-field fouth-wrap">
           
            <select data-trigger="" name="choices-single-defaul" className="p-4">
              <option placeholder="Property Type">Property Type</option>
              <option>2 bedrooms</option>
              <option>3 bedrooms</option>
              <option>4 bedrooms</option>
            </select>

          </div>
          <div className="input-field fifth-wrap">
            <button className="btn-search edit" type="button">SEARCH</button>
          </div>
        </div>
      </form>
    </div>


                

            
                
            </div>
        )
    }
}
