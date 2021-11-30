import React, {FunctionComponent, useState} from "react";
import {CartesianGrid, Legend, Line, LineChart, XAxis, YAxis} from "recharts";
import {Row} from "react-bootstrap";
import {ChartsProps, ILineHideState} from "../types/types";
import {Props} from "recharts/types/component/DefaultLegendContent";

export const Charts: FunctionComponent<ChartsProps> = ({data}) => {
    const [lineHideState, setLineHideState] = useState<ILineHideState>({
        linear: false,
        square: false,
        cube: false
    });

    const onClickLegend = ({dataKey, inactive}: any) => {
        setLineHideState({
            ...lineHideState,
            [dataKey]: !inactive
        });
    }

    return (
        <Row className="justify-content-md-center mt-md-5">
            <LineChart
                data={data}
                width={600}
                height={600}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Legend onClick={onClickLegend} />
                <Line type="monotone" dataKey="linear" hide={lineHideState.linear} stroke="#8884d8" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="square" hide={lineHideState.square} stroke="#82ca9d" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="cube" hide={lineHideState.cube} stroke="#ffc658" strokeWidth={3} dot={false} />
            </LineChart>
        </Row>

    )
}
