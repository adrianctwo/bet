import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function SignIn() {

    return(
        <div className="mt-5">
            <Container fluid={true}>
                <Row className="justify-content-center p-3">
                    <p>Welcome to Big Bets</p>
                </Row>
            </Container>
        </div>
    );
}

export default SignIn;

