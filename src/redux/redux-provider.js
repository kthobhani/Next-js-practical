"use client";

import { createContext, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
