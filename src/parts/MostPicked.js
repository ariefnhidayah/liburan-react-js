import React from 'react'
import Fade from 'react-reveal/Fade'

import Button from 'elements/Button'

export default function MostPicked(props) {
    return (
        <section className="container" ref={props.refMostPicked}>
            <Fade bottom>
            <h4 className="mb-3">Most Picked</h4>
            <div className="container-grid">
                {
                    props.data.map((item, index) => {
                        return (
                            <div key={`mostpicked-${index}`} className={`item column-4 ${index === 0 ? 'item column-4 row-2' : 'item column-4 row-1'}`}>
                                <Fade bottom delay={200 * index}>
                                    <div className="card card-featured">
                                        <div className="tag">
                                            ${item.price}
                                            <span className="font-weight-light"> per {item.unit}</span>
                                        </div>
                                        <figure className="img-wrapper">
                                            <img src={item.image_id[0] ? `${process.env.REACT_APP_HOST}${item.image_id[0].image}` : ''} alt={item.title} className="img-cover" />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button className="stretched-link d-block text-white" type="link" href={`/properties/${item._id}`}>
                                                <h5>{item.title}</h5>
                                            </Button>
                                            <span>
                                                {item.city}, {item.country}
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        )
                    })
                }
            </div>
            </Fade>
        </section>
    )
}
