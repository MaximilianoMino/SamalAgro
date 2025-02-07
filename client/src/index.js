import React from "react";
import App from "./App";
import { QueryClient, QueryClientProvider } from 'react-query';
import {createRoot} from 'react-dom/client';
import "./index.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
