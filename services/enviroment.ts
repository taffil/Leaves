import getEnvVars from "../config";
import { RootState } from "./store";

export const { API_BASE_URL } = getEnvVars();
export const selectAuthToken = (state: RootState) => state.auth.token;
