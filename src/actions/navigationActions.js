import { NAVIGATE_TO } from "../utils/actionType";
export const navigateTo = (path) => ({
    type:NAVIGATE_TO,
    payload: path,
  })