import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

// import landingPage from 'json/landingPage.json'

import { fetchPage } from 'store/actions/page';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        window.title = "LiburAN | Home";
        window.scrollTo(0, 0);

        if (!this.props.page.landingPage) {
            this.props.fetchPage(`${process.env.REACT_APP_HOST}api/v1/member/landing-page`, 'landingPage')
        }
    }


    render() {
        const { page } = this.props
        
        if (!page.hasOwnProperty('landingPage')) return null

        // console.log(page)

        return (
            <>
                <Header {...this.props}></Header>
                <Hero data={page.landingPage.hero} refMostPicked={this.refMostPicked}></Hero>
                <MostPicked refMostPicked={this.refMostPicked} data={page.landingPage.mostpicked}></MostPicked>
                <Categories data={page.landingPage.category}></Categories>
                <Testimony data={page.landingPage.testimonial}></Testimony>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page
})

export default connect(mapStateToProps, { fetchPage })(LandingPage)