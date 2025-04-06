import { configureStore } from "@reduxjs/toolkit";
import newsslice from './Newsslice';

export default function makeStore(){

    return configureStore({
reducer: {
        news:newsslice,
    }
    })
}
export const store=makeStore()
export type Rootstate=ReturnType<typeof store.getState>
export type Appdispatch=typeof store.dispatch
 