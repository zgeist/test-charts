import {DataItem, DataMap, Line, Params} from "../types/types";
import {useEffect, useState} from "react";
import axios from "axios";

const resolveData = (data: Array<Line>) : Array<DataItem> => {
    const _res = data.map(({name, x, y} : DataMap) => {
        return y.map((ny, i) => {
            return {
                x: x[i],
                [name]: ny
            }
        })
    }).reduce((memo: Array<object>, item: Array<object>) => {
        if (!memo.length) {
            memo = [...item];
        }

        item.forEach((subItem, index) => {
            memo[index] = {
                ...memo[index],
                ...subItem
            }
        });

        return memo;
    }, []);

    return _res as Array<DataItem>;
}

export const useGetPoints = (url: string, initialData: Array<DataItem>, initialParams: Params) => {
    const [data, setData] = useState<Array<DataItem>>(initialData);
    const [params, setParams] = useState<Params>(initialParams);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(url, {
                    params
                });

                setData(resolveData(result.data));

            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        }

        fetchData();
    }, [params]);

    return [{data, isLoading, isError}, setParams] as const;
}
