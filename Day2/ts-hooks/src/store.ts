import { createContext } from "react";

const initialState ={
    first: "Jack",
    last: "Herrington",
};

export type Userstate = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;