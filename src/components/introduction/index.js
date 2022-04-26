



import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function ComponentIntroduction() {
    return (
        <div className="masthead">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="masthead-content scroll">
                            I will write down about our story here.
                        </div>
                    </Col>
                    <Col lg={6}>
                        {/* <Col lg={4}></Col>
                        <Col lg={8}> */}
                            <div className="masthead-container vanguard">
                                <div className='vanguardDay'>18</div>
                                <div className='vanguardText'>days</div>
                            </div>
                        {/* </Col> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ComponentIntroduction;