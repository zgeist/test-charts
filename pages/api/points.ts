import type { NextApiRequest, NextApiResponse } from 'next'
import Graphs from "../../services/Graphs";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {from, to, step} = req.query;
    res.status(200)
        .json(new Graphs(from as string, to as string, step as string).getJSON())
}
