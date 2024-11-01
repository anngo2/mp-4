export interface Weather {
    // data from the API
    datetime: string;
    conditions: string;
    description: string;
    tempmin: number;
    tempmax: number;
}