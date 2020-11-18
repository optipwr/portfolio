import React, { Component } from 'react';
import axios from 'axios';

import InfoCard from '../../components/Cards/InfoCard/InfoCard';
import Card from '../../components/Cards/Card/Card';
import classes from './Development.css';
import Modal from '../../components/UI/Modal/Modal';

const baseUrl = 'http://localhost:3002';

class Development extends Component {
    state = {
        posts: [],
        modal: false,
        modalImage: ''
    }

    componentDidMount () {
        const baseUrl = 'http://localhost:3002';
        axios.get( baseUrl + '/dev' )
            .then( response => {
                // console.log(response)
                const devs = response.data.map(dev => {
                    // console.log('dev data', dev);
                    return {...dev}
                })
                this.setState({posts: devs});
            });
    }

    handleClick = (image) => {
        // console.log('i', i)
        this.setState({modal: !this.state.modal, modalImage: image})
        // console.log(this.state.modal);
    }

    render() {
        let displayData = this.state.posts.map((item, i) => {
            return (
                <Card
                    image={item.image}
                    title={item.title}
                    body={item.body}
                    clicked={() => this.handleClick(item.image)}
                    key={i} />
            );
        });

        const infoContent = (
            <div>
                <h4>Web Developer Information:</h4>
                <p>Michael Irby is a full time web developer currently working with
                    the MERN stack. Insert more information about what I do here.
                    Some examples of my work below...
                </p>
            </div>
        );

        let modalData = this.state.modal ?
                <Modal
                    show={this.state.modal}
                    clicked={this.handleClick} >
                    <img src={ baseUrl + this.state.modalImage } alt="images" />
                </Modal> : null
    

        let contentManager = !this.state.modal ? 
            <div className={classes.Development}>
                <InfoCard data={infoContent} />
                { displayData }
            </div> : null

        return (
            <div>
                { modalData }
                { contentManager }
            </div>
        )
    }
}

export default Development;