export type DataMap = {
    name: string,
    x: Array<number>,
    y: Array<number>
}

export type Params = {
    from: string;
    to: string;
    step: string;
}

export type Line = {
    name: string;
    x: Array<number>;
    y: Array<number>;
}

export type DataItem = {
    x: number,
    linear: number,
    square: number,
    cube: number
}

export type ControlsProps = {
    from: string;
    to: string;
    step: string;
    onChangeParams: (params: Params) => void
}

export type ChartsProps = {
    data: Array<object>
}

export type ILineHideState = {
    linear: boolean;
    square: boolean;
    cube: boolean;
}
