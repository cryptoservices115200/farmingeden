import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const pumpkin = 'images/pumpkin.png';

function ComponentDetail() {
    return (
        <div className="masthead">
            <Container>
                <Row>
                    <Col lg={3}>
                    </Col>
                    <Col lg={6}>
                        <div className='stakeDetail'>
                            <div className='stakeDetailText'>
                                <p>Farm: 1,000,000 BNB</p>
                                <p>Your Seeds: 0.00 BNB</p>
                                <p>Daily-Growing: 6%</p>
                                <p>Farmer: 2%</p>
                                <div>
                                    <a>https://github.com/foreverglorydev</a>
                                </div>
                            </div>
                            
                        </div>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default ComponentDetail;