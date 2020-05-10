import React, { Component } from 'react'

// import { InputDate } from 'elements/Form'
import Breadcrumb from 'elements/Breadcrumb'

export default class Example extends Component {
    state = {
        value: {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        },
        breadcrumbList : [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ]
    };

    handleChange = e => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-auto">
                        {/* <InputDate max={30} onChange={this.handleChange} name="value" value={this.state.value} /> */}
                        <Breadcrumb data={this.state.breadcrumbList} />
                    </div>
                </div>
            </div>
        );
    }
}