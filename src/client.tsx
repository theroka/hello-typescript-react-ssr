import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

const items = (window as any).__PRELOADED_STATE__
delete (window as any).__PRELOADED_STATE__

const root = document.getElementById("root");
hydrate(<App items={items} />, root);
