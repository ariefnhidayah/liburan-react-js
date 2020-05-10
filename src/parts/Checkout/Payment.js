import React from 'react'
import Fade from 'react-reveal/Fade'

import { InputText, InputFile } from 'elements/Form'

import logoBca from 'assets/images/logo-bca.jpg'
import logoMandiri from 'assets/images/logo-mandiri.jpg'

export default function Payment(props) {

    const { data, itemDetails, checkout } = props

    const tax = 10;
    const subTotal = itemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;

    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
                        <Fade delay={200}>
                            <p className="mb-4">Transfer Pembayaran:</p>
                            <p>Tax: {tax}%</p>
                            <p>Sub total: ${subTotal} USD</p>
                            <p>Total: ${grandTotal} USD</p>
                            <div className="row mt-4">
                                <div className="col-3 text-right">
                                    <img src={logoBca} alt="Bank BCA" width="60" />
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd>Bank Central Asia</dd>
                                        <dd>1407 2001</dd>
                                        <dd>Arief</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-right">
                                    <img src={logoMandiri} alt="Bank Mandiri" width="60" />
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd>Bank Mandiri</dd>
                                        <dd>1407 2001</dd>
                                        <dd>Arief</dd>
                                    </dl>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
                        <Fade delay={400}>
                            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                            <InputFile accept="image/*" id="proofPayment" name="proofPayment" value={data.proofPayment} onChange={props.onChange} />

                            <label htmlFor="bankName">Asal Bank</label>
                            <InputText id="bankName" name="bankName" value={data.bankName} onChange={props.onChange} />

                            <label htmlFor="bankHolder">Nama Pengirim</label>
                            <InputText id="bankHolder" name="bankHolder" value={data.bankHolder} onChange={props.onChange} />
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
