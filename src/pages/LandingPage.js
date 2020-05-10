import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        window.title = "LiburAN | Home";
        window.scrollTo(0, 0);
    }

    
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero} refMostPicked={this.refMostPicked}></Hero>
                <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}></MostPicked>
                <Categories data={landingPage.categories}></Categories>
                <Testimony data={landingPage.testimonial}></Testimony>
                <Footer />
            </>
        )
    }
}