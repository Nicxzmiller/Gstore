import React, { Component} from 'react'

export default class ContentArea extends Component {
    constructor () {
        super()

        this.state = {
            name: 'Joe'
        }
    }
    clickedBtn = () => {
        console.log('swag')
    }

    render () {
        return (
            <section id={'content-area'}>
                <div className={'col-md-6 model'}>
                    <img src={'img/bape2.png'} />
                </div>
                <div className={'col-md-6 info'}>
                    <div className={'insider'}>
                        <h5>Men's</h5>
                        <h1>JACKET DRIPPING SAUCE</h1>
                        <p>Lorem ipsum dolor amet banh mi artisan pork belly,
                            ugh cray woke cold-pressed migas marfa fixie meditation.
                            Normcore plaid air plant vice disrupt everyday carry af vape.
                            Occupy williamsburg hella PBR&B, everyday carry vinyl hexagon.
                            Whatever synth kinfolk fingerstache etsy, pabst kitsch chillwave
                            selvage tbh raw denim chicharrones. You probably haven't heard of
                            them semiotics helvetica lyft. Taxidermy woke hoodie fashion axe
                            blue bottle unicorn.</p>
                        <div className={'size'}>
                            <div className={'title'}>
                                size
                            </div>
                            <ul className={'sizes'}>
                                <li className={'circle'}>S</li>
                                <li className={'circle'}>M</li>
                                <li className={'circle'}>L</li>
                                <li className={'semi-circle'}>XL</li>
                                <li className={'semi-circle'}>XXL</li>
                                <li className={'semi-circle'}>CUSTOM</li>
                            </ul>
                        </div>
                        <div className={'action-btns'}>
                            <a className={'col-md-6 red-hallow-btn'}>
              <span className={'price'}>
                $495
              </span>
                                add to cart
                            </a>
                            <a className={'col-md-6 lightgrey-btn'}>
                                find a store
                            </a>
                        </div>
                    </div>
                </div>
            </section>)
    }
}