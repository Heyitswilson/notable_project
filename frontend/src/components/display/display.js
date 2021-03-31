import React, { useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

const Display = (props) => {
    useEffect(() => {
        console.log('printing data')
    }, [props.data])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getData();
    }

    return (
        <Container>
            <Row>
                <Button onClick={(e) => handleSubmit(e)}>
                    Get Data
                </Button>
            </Row>
        </Container>
    )
} 

export default Display;