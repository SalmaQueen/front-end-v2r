import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import image from '../Images/about.png'


export default class AboutUs extends Component {
    render() {
        return (
            <div className="mb-2">
               <Helmet>
                <style type="text/css">{`
                            .con {
                                background-color:white;
                               
                              
                              
                                width:100%;
                              
                              }
                              .btn-search{
                                height: 70px;
                                width: 50%;
                                background: blue;
                                white-space: nowrap;
                                border-radius: .5px;
                                font-size: 20px;
                                color: #fff;
                                transition: all .2s ease-out, color .2s ease-out;
                                border: 0;
                                cursor: pointer;
                                font-weight: 400;
                                font-family: 'Poppins', sans-serif;
                              }
                           hr{
                               border:5px solid black;
                               border-radius:5%'
                           }
                           .bg-les{
                            background: #ff5e14;


                           }

   
                  `}</style>
                    </Helmet>


                        <div className="row con">
                            <hr/>
                            <div className="col-md-6">
                                <img src={image} width="500px" height="100%" alt=""/>
                                
                            </div>
                            <div className="col-md-6 bg-les text-white">
                                <h1 className="text-center">About Us</h1>
                                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <button className="btn-search text-center">Read more</button>
                            </div>

                          
                            <hr/>
                        </div>

                
            </div>
        )
    }
}
