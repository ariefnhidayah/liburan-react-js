import React from 'react'
import Fade from 'react-reveal/Fade'

import Button from 'elements/Button'

export default function Categories({data}) {
    return data.map((category, index1) => {
        if (category.item_id.length === 0) return null
        return (
            <section className="container" key={`category-${index1}`}>
                <Fade bottom>
                    <h4 className="mb-3 font-weight-medium">
                        {category.name}
                    </h4>
                    <div className="container-grid">
                        {
                            category.item_id.map((item, index2) => {
                                return (
                                    <div key={`category-${index1}-item-${index2}`} className="item column-3 row-1">
                                        <Fade bottom delay={200 * index2}>
                                            <div className="card card-category">
                                                {item.isPopular && (
                                                    <div className="tag">
                                                        Popular{" "}
                                                        <span className="font-weight-light">Choice</span>
                                                    </div>
                                                )}
                                                <figure className="img-wrapper" style={{ height: 180 }}>
                                                    <img src={item.image_id[0] ? `${process.env.REACT_APP_HOST}${item.image_id[0].image}` : ''} alt={item.title} className="img-cover" />
                                                </figure>
                                                <div className="meta-wrapper">
                                                    <Button className="stretched-link d-block text-gray-900" href={`/properties/${item._id}`} type="link">
                                                        <h5 className="h4 text-gray-900">{item.title}</h5>
                                                    </Button>
                                                    <span className="text-gray-500"> 
                                                        { item.city && item.country ? `${item.city}, ${item.country}` : '' }
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
    })
}
