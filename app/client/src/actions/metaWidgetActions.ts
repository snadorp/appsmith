import {
  ReduxAction,
  ReduxActionTypes,
} from "@appsmith/constants/ReduxActionConstants";
import {
  AddTemplateMetaWidgets,
  DeleteMetaWidgetsPayload,
  DeleteTemplateMetaWidgets,
  ModifyMetaWidgetPayload,
} from "reducers/entityReducers/metaWidgetsReducer";

export const modifyMetaWidgets = (payload: ModifyMetaWidgetPayload) => ({
  type: ReduxActionTypes.MODIFY_META_WIDGETS,
  payload,
});

export const deleteTemplateMetaWidgets = (
  payload: DeleteTemplateMetaWidgets,
) => ({
  type: ReduxActionTypes.DELETE_TEMPLATE_META_WIDGETS,
  payload,
});

export const addTemplateMetaWidgets = (payload: AddTemplateMetaWidgets) => ({
  type: ReduxActionTypes.ADD_TEMPLATE_META_WIDGETS,
  payload,
});

export const deleteMetaWidgets = (
  payload: DeleteMetaWidgetsPayload,
): ReduxAction<DeleteMetaWidgetsPayload> => {
  return {
    type: ReduxActionTypes.DELETE_META_WIDGETS,
    payload,
  };
};
