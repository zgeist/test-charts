import type { NextPage } from 'next';
import {useCallback} from "react";
import {Charts} from "../components/Charts";
import {Controls} from "../components/Controls";
import {Alert, Container} from "react-bootstrap";
import {Params} from '../types/types';
import {useGetPoints} from "../hooks/use-get-points";

const Home: NextPage = () => {
    const [{data, isLoading, isError}, getData] = useGetPoints(
        'api/points',
        [],
        {
            from: "-2",
            to: "2",
            step: "0.1"
        }
    );

    const getParams = useCallback((params: Params) => getData(params), [getData]);

    return (
        <Container className="pt-lg-3">
            <h1 className="text-center">Function charts</h1>
            <Controls onChangeParams={getParams} from="-2" to="2" step="0.1" />
            {isError && <Alert variant="danger">Something went wrong ...</Alert>}
            {isLoading ? (<div>Loading ...</div>) : (<Charts data={data}/>)}
        </Container>
    )
}

export default Home
