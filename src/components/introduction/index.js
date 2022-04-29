import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ComponentIntroduction() {
  return (
    <div className="masthead">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="scroll">
              I will write down about our story here.
            </div>
          </Col>
          <Col lg={6}>
            <div className="vanguardDetail">
              <div>18</div>
              <div>days</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ComponentIntroduction
