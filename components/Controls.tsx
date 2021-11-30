import React, {ChangeEvent, FormEvent, FunctionComponent, useState} from "react";
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {ControlsProps} from "../types/types";

export const Controls: FunctionComponent<ControlsProps> = ({from = '-2', to= '2', step= '0.1', onChangeParams}) => {
    const [params, setParams] = useState({from, to, step});

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setParams({
            ...params,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onChangeParams(params);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingInputFrom" label="From">
                        <Form.Control type="number" name="from" placeholder="From" defaultValue={from} onChange={onChange} />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputTo" label="To">
                        <Form.Control type="number" name="to" placeholder="To" defaultValue={to} onChange={onChange}  />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputStep" label="Step">
                        <Form.Control type="number" name="step" placeholder="Step" step=".1" min="0.1" defaultValue={step} onChange={onChange}  />
                    </FloatingLabel>
                </Col>
                <Col xs="auto">
                    <Button type="submit" size="lg">Redraw</Button>
                </Col>
            </Row>
        </Form>
    )
};
