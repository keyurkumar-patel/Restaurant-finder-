import React, { Component } from 'react'
import axios from 'axios';
import RestaurentsView from './restaurentsView';

export default class CityView extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:false,
            restaurants:[],
            modalShow:false
        }
    }

    handleClick = () => {

        this.setState({loading:true})
        axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${this.props.city}`).then((res) => {
            this.setState({
                loading:false,
                restaurants:res.data.restaurants,
                modalShow:true
            })
            console.log(this.state.modalShow)
        })
    }

    render() {
        const {restaurants} = this.state;
        let modalClose = () => this.setState({ modalShow: false });
        
        return (
            <div className="card">

                <h1 className="card-body">{this.props.city}</h1>
                {this.state.loading?
                        <div className="lds-hourglass"></div>
                        :
                        <button className="btn btn-dark" onClick={this.handleClick}>More Info</button>
                }

                <RestaurentsView 
                    show={this.state.modalShow}
                    onHide={modalClose}
                    restaurants={restaurants}
                />
            
            </div>
        )
    }
}
