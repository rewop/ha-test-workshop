import * as React from "react";
import { Api } from "./types";

export const ApiContext = React.createContext<Api | null>(null);

export const ApiProvider = ApiContext.Provider;
export const ApiConsumer = ApiContext.Consumer;
