import React, { Component } from 'react';
import axios from 'axios';

import InfoCard from '../../components/Cards/InfoCard/InfoCard';
import Card from '../../components/Cards/Card/Card';
import classes from './Photography.css';
import Modal from '../../components/UI/Modal/Modal';

const baseUrl = 'http://localhost:3002';

class Photography extends Component {
    state = {
        posts: [],
        modal: false,
        modalImage: ''
    }

    componentDidMount () {

        const baseUrl = 'http://localhost:3002';
        axios.get( baseUrl + '/photo' )
            .then( response => {
                // console.log(response)
                const photos = response.data.map(photo => {
                    // console.log('photo data', photo);
                    return {...photo}
                })
                this.setState({posts: photos});
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
                <h4>I am passionate about photography and am looking to grow that skillset</h4>
                <p>As of right now I'm shooting with a D3400 and 2 kit lenses. I'm working on learning
                    more and more and finding unique places and things to shoot. Below are some
                    pictures that I enjoy.
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
            <div className={classes.Photography}>
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

export default Photography;