import React from 'react'

import { Row, Portion } from 'reactised-fictoan'


class PageGettingStarted extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "Getting started with FICTOAN"
    }

    render() {
        return (
            <div>
                <Row className="content-padding-large margin-top-small">
                    <Portion className="whole">
                        <h2 className="text-hue">Getting started with FICTOAN</h2>
                    </Portion>
                </Row>
            </div>
        );
    }
}

export default PageGettingStarted
