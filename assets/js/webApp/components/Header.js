import React, { Component} from 'react'

export default class Header extends Component {
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
                <header id={'header'}>
                    <div className={'logo'}>
                        GammaStore
                    </div>
                    <div className={'menu'}>
                        <nav>
                            <a href={'index.html'}>Home
                            </a>
                            <a href={'lookbook.html'}>LookBook
                            </a>
                            <a href={'lookbook.html'}>Men's
                            </a>
                            <a href={'lookbook.html'}>Women's
                            </a>
                            <a href={'lookbook.html'}>News
                            </a>
                        </nav>
                    </div>
                </header>)
    }
}