import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import {Card,Button} from 'react-bootstrap'


export default class RecentProperties extends Component {
    render() {
        return (
            <div className="mb-2">
                 <Helmet>
                <style type="text/css">{`
                .edit{
                  background: #ff5e14;
                }
                

   
                  `}</style>
                    </Helmet>

<div className="container">
<div className="row">
<div className="col-md-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/209218/pexels-photo-209218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary"  className="edit"  >Go somewhere</Button>
  </Card.Body>
</Card>
    </div>


    <div className="col-md-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/1076237/pexels-photo-1076237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary"  className="edit" >Go somewhere</Button>
  </Card.Body>
</Card>
    </div>

    <div className="col-md-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/2111763/pexels-photo-2111763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary"  className="edit">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
</div>
</div>
                    

                
            </div>
        )
    }
}
