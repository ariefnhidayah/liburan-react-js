import React from 'react'

import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 350 }}>
                        <IconText />
                        <p className="brand-tagline">
                        We kaboom your beauty holiday<br/>instantly and memorable.
                        </p>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2 font-weight-bold">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Booking a Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payment">Use Payments</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2 font-weight-bold">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/career">Our Careers</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms-conditions">Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2 font-weight-bold">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="mailto:support@liburan.id" isExternal>support@liburan.id</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="tel:+6285695469574" isExternal>0856 - 9546 - 9574</Button>
                            </li>
                            <li className="list-group-item">
                                <span>LiburAN, Tangerang</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2020 • All rights reserved • LiburAN
                    </div>
                </div>
            </div>
        </footer>
    )
}
