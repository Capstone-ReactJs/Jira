import React from "react";
import ReactDOM from "react-dom";
import Main from "./Entryfile/Main";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main/>);