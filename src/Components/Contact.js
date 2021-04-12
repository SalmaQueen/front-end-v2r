import React, { Component } from 'react';
// import './Contact.scss'
import { Helmet } from 'react-helmet';




class Contact extends Component {
    render() {
        return (

                <div className="cont"> 
                   <Helmet>
          
          <style type="text/css">{`
          @import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

          // * {
          //   margin:0;
          //   padding:0;
          //   box-sizing:border-box;
          //   -webkit-box-sizing:border-box;
          //   -moz-box-sizing:border-box;
          //   -webkit-font-smoothing:antialiased;
          //   -moz-font-smoothing:antialiased;
          //   -o-font-smoothing:antialiased;
          //   // font-smoothing:antialiased;
          //   text-rendering:optimizeLegibility;
          // }
          
          // body {
          //   font-family:"Open Sans", Helvetica, Arial, sans-serif;
          //   font-weight:300;
          //   font-size: 12px;
          //   line-height:30px;
          //   color:#777;
            
          // }
          
          .cont {
            background-color:#1310c7;
            opacity: 0.8;
            background-image: url('https://images.pexels.com/photos/2289414/pexels-photo-2289414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
            background-size: cover;
          
            max-width:500px;
            width:100%;
            margin:0 auto;
            position:relative;
          }
          body{
            background-color:rgb(222, 217, 251);
          }
          
          #contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea, #contact button[type="submit"] { font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif; }
          
          #contact {
            background:fade(#F9F9F9,85);
            padding:25px;
            margin:80px 0;
          }
          
          #contact h3 {
            color: #000;
            display: block;
            font-size: 30px;
            font-weight: 400;
          }
          
          #contact h4 {
            margin:5px 0 15px;
            display:block;
            font-size:13px;
          }
          
          fieldset {
            border: medium none !important;
            margin: 0 0 10px;
            min-width: 100%;
            padding: 0;
            width: 100%;
          }
          
          #contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea {
            width:100%;
            border:1px solid #CCC;
            background:#FFF;
            margin:0 0 5px;
            padding:10px;
          }
          
          #contact input[type="text"]:hover, #contact input[type="email"]:hover, #contact input[type="tel"]:hover, #contact input[type="url"]:hover, #contact textarea:hover {
            -webkit-transition:border-color 0.3s ease-in-out;
            -moz-transition:border-color 0.3s ease-in-out;
            transition:border-color 0.3s ease-in-out;
            border:1px solid #AAA;
          }
          
          #contact textarea {
            height:100px;
            max-width:100%;
            resize:none;
          }
          
          #contact button[type="submit"] {
            cursor:pointer;
            width:100%;
            border:none;
            background:rgb(248, 103, 6);
            color:#FFF;
            margin:0 0 5px;
            padding:25px 10px;
            font-size:15px;
            text-transform: uppercase;
          }
          
          #contact button[type="submit"]:hover {
            background:#09C;
            -webkit-transition:background 0.3s ease-in-out;
            -moz-transition:background 0.3s ease-in-out;
            transition:background-color 0.3s ease-in-out;
          }
          
          #contact button[type="submit"]:active { box-shadow:inset 0 1px 3px rgba(0, 0, 0, .5); }
          
          #contact input:focus, #contact textarea:focus {
            outline:0;
            border:1px solid #999;
          }
          ::-webkit-input-placeholder {
           color:#888;
          }
          :-moz-placeholder {
           color:#888;
          }
          ::-moz-placeholder {
           color:#888;
          }
          :-ms-input-placeholder {
           color:#888;
          }
          
          label.error{
            color: darkred;
            padding-left: 10px;
            font-weight: bold;
          }
          input.error{
            border-color: darkred !important;
          }
          
        
          
        `}</style>


        </Helmet> 
  <form id="contact" action="" method="post">
    <h3 className="text-white text-center">Contact Form</h3>
    <fieldset>
      <input placeholder="Full Name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Phone Number" type="tel" tabindex="3" required/>
    </fieldset>
   
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" className="bt3 btn btn-rounded" type="submit" id="contact-submit" data-submit="...Sending">Send now</button>
    </fieldset>
  </form>
 
  

            </div>
        );
    }
}

export default Contact;