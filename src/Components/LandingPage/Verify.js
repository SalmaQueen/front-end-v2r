import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import {Button} from 'react-bootstrap'

export default class Verify extends Component {
    render() {
        return (
            <div className="mb-2">
             <Helmet>
                <style type="text/css">{`
                    .container-fluid{
                        background:  url('https://images.pexels.com/photos/2823459/pexels-photo-2823459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
                        
                        /*****************************/
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        width:100%;
                        height:80vh;
                        
                    }
                    .contest{
                        margin:auto;
                        padding:15%;
                        font-size:3.5 rem;
                        color:white;
                    }
                    .btn-h{
                        height: 70px;
                        width: 50%;
                        background: #ff5e14;
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
   
                  `}</style>
                    </Helmet>
                <div className="container-fluid">
                    <div className="contest">
                    <h1>Hello, world!</h1>
<p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
</p>
<p>
    <Button variant="primary" className="btn-h">Learn more</Button>
</p>

                    </div>

</div>
                
            </div>
        )
    }
}
