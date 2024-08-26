import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import MenuReducer from "./reducers/common/Menu/Menu.reducer";
import LoadingReducer from "./reducers/common/Loading/Loading.reducer";
import CodeMngReducer from "./reducers/common/CodeMng/CodeMng.reducer";
import DemoReducer from "./reducers/demo/Demo.reducer";
import ValidateReducer from "./reducers/common/Validate/Validate.reducer";

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    loading: LoadingReducer,
    codeMng: CodeMngReducer,
    demo: DemoReducer,
    validate: ValidateReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
