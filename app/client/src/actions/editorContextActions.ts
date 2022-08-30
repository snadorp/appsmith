import { ReduxActionTypes } from "ce/constants/ReduxActionConstants";
import {
  CursorPosition,
  EvaluatedPopupState,
} from "reducers/uiReducers/editorContextReducer";

export const setFocusableField = (path: string | undefined) => {
  return {
    type: ReduxActionTypes.SET_FOCUSABLE_PROPERTY_FIELD,
    payload: { path },
  };
};

export const setCodeEditorCursorPosition = (
  key: string | undefined,
  cursorPosition: CursorPosition,
) => {
  return {
    type: ReduxActionTypes.SET_CODE_EDITOR_CURSOR_POSITION,
    payload: { key, cursorPosition },
  };
};

export const setEvalPopupState = (
  key: string | undefined,
  evalPopupState: EvaluatedPopupState,
) => {
  return {
    type: ReduxActionTypes.SET_EVAL_POPUP_STATE,
    payload: { key, evalPopupState },
  };
};
