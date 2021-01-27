import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import FeaturedImage from 'parts/FeaturedImage'
import PageDetailDescription from 'parts/PageDetailDescription'
import BookingForm from 'parts/BookingForm'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

// import ItemDetails from 'json/itemDetails.json'

import { checkoutBooking } from 'store/actions/checkout'
import { fetchPage } from 'store/actions/page';

class DetailPage extends Component {

    componentDidMount() {
        window.title = "Detail Page";
        window.scrollTo(0, 0)

        if (!this.props.page[this.props.match.params.id]) {
            this.props.fetchPage(`${process.env.REACT_APP_HOST}api/v1/member/detail/${this.props.match.params.id}`, this.props.match.params.id)
        }
    }

    render() {

        const { page } = this.props

        if (!page.hasOwnProperty(this.props.match.params.id)) return null

        const breadcrumb = [
            {pageTitle: 'Home', pageHref: ""},
            {pageTitle: page[this.props.match.params.id].title, pageHref: ""}
        ];

        const categories = [
            {
                _id: '1',
                name: 'Treasure to Choose',
                item_id: page[this.props.match.params.id].activity_id.map((activity) => {
                    activity.image_id = [
                        {
                            _id: 1,
                            image: activity.image
                        }
                    ];
                    activity.title = activity.name
                    return activity;
                })
            }
        ];

        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle breadcrumb={breadcrumb} data={page[this.props.match.params.id]} />
                <FeaturedImage data={page[this.props.match.params.id].image_id} />
                <section className="container">
                    <Fade bottom>
                        <div className="row">
                            <div className="col-7 pr-5">
                                <PageDetailDescription data={page[this.props.match.params.id]} />
                            </div>
                            <div className="col-5">
                                <BookingForm itemDetails={page[this.props.match.params.id]} startBooking={this.props.checkoutBooking} />
                            </div>
                        </div>
                    </Fade>
                </section>
                <Categories data={categories} />
                <Testimony data={page[this.props.match.params.id].testimonial} />
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailPage)