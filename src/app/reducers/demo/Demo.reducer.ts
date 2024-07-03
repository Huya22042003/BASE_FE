import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DemoResponse } from "../../../interface/demo/DemoRequest.interface";
import { RootState } from "../../store";

const initialState: DemoResponse[] = [];

export const DemoSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {
        SetDemo: (state, action: PayloadAction<DemoResponse[]>) => {
            state = action.payload;
            return state;
        },
        AddDemo: (state, action: PayloadAction<DemoResponse>) => {
            state = [action.payload].concat(state);
            return state;
        },
        DeleteDemo: (state, action: PayloadAction<DemoResponse>) => {
            const index = state.findIndex((el) => el.id === action.payload.id);
            if (index > -1) {
                state.splice(index, 1);
                return state;
            }
        },
    },
});
export const { SetDemo, AddDemo, DeleteDemo } = DemoSlice.actions;
export const GetDemo = (state: RootState) => state.demo;
export default DemoSlice.reducer;
