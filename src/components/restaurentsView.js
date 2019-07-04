import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";


export default class RestaurentsView extends Component {
    render() {
        const Restaurents= this.props.restaurants;
        return (
            
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Restaurents available for selected city.
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
    
            <div className="row" style={{'max-height': 'calc(90vh)', 'overflow-y': 'auto'}}>
            {Restaurents.map(res=>
                            <div className="modal-card col-lg-4">
                             
                                <p>Name: {res.name}</p>
                                <p>Address: {res.address}</p>
                                <p>Price: {res.price}</p>
                                
                            </div>    
                        )}
              </div>
    
    
    
            </Modal.Body>
            <Modal.Footer>
              <Button  onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>

            
        )
    }
}
