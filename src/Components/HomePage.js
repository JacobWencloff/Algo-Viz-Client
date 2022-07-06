import React from 'react'
import { Row, Col, Card, CardBody, CardHeader, List, ListGroupItem } from 'reactstrap'


export default function HomePage() {
    return (
        <div>
            <header className='HeaderBackground'>
                <Row>
                    <Col>
                    </Col>
                    <Col sm={{

                        size: 3
                    }}>
                        <h1>Welcome to Algo-Viz</h1>
                        <h3>The algorithim visualizer for you !</h3>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </header>
            <body className='BodyBackground'>
                <Row >
                    <Col sm={{
                        offset: 3,
                        size: 6
                    }}>
                        <Card>
                            <CardHeader>
                                <h3> Product Description</h3>
                            </CardHeader>
                            <CardBody style={{textAlign: 'center'}}>
                                <p>
                                    This desktop application takes serveral commonly used /
                                    interviewed sorting algorithms like Merge and Quick sort, along with pathing
                                    finding Algorithms like A*, and gives a visual representation of how the desired
                                    algorithm minipulates a given data set in order to return a proper output
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col sm={{
                        offset: 3,
                        size: 6
                    }}>
                        <Card>
                            <CardHeader>
                                <h3>Product Build</h3>
                            </CardHeader>
                            <CardBody style={{textAlign: 'center'}}>
                                This is a python based application that uses supporting libraries like OpenGL, imgui, and Pygame in order to create the GUI and the functionality of the program
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col sm={{
                        offset: 3,
                        size: 6
                    }}>
                        <Card>
                            <CardHeader>
                                <h3> Demostration</h3>
                            </CardHeader>
                            <CardBody style={{textAlign: 'center'}}>
                            <iframe width="500" height="300" src="https://www.youtube.com/embed/b2sKbZ90LSk" title="Algo-Viz 0.0.1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: '10px' }}>
                    <Col sm={{
                        offset: 3,
                        size: 6
                    }}>
                        <Card>
                            <CardHeader>
                                <h3>Download</h3>
                            </CardHeader>
                            <CardBody>
                                download link
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

            </body>
        </div>
    )
}
