import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface IField {
  field: string;
  check: boolean;
}

interface ILoadingReducer {
  check: boolean;
  field: Array<IField>;
}

const initialState: ILoadingReducer = {
  check: true,
  field: [],
};

export const ValidateSlice = createSlice({
  name: "validate",
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<IField>) => {
      state.field.push(action.payload);
    },
    updateFieldCheck: (state, action: PayloadAction<{ field: string; check: boolean }>) => {
      const fieldToUpdate = state.field.find(f => f.field === action.payload.field);
      if (fieldToUpdate) {
        fieldToUpdate.check = action.payload.check;
      }
    },
    resetFields: (state) => {
      state.field = [];
    },
    removeField: (state, action: PayloadAction<string>) => {
      state.field = state.field.filter(f => f.field !== action.payload);
    },
  },
});

export const { addField, updateFieldCheck, resetFields, removeField } = ValidateSlice.actions;

export const SelectAllFields = (state: RootState) => state.validate.field;
export const CheckValidate = (state: RootState) => {
    return state.validate.field.every(el => el.check)
};
export const SelectFieldStatus = (state: RootState, fieldName: string) => 
  state.validate.field.find(f => f.field === fieldName)?.check;

export default ValidateSlice.reducer;
