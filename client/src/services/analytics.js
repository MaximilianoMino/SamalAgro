// src/analytics.js (Migrado a GA4)
import ReactGA from "react-ga4";

export const initGA = (trackingID) => {
  // El método initialize es igual, pero ahora espera un ID que empiece por 'G-'
  ReactGA.initialize(trackingID);
};

export const logPageView = () => {
  // En GA4, no usas .pageview(). Usas .send() con hitType 'pageview'.
  // El ajuste de 'page' sigue siendo útil para dar contexto a los eventos.
  ReactGA.set({ page: window.location.pathname });
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};

export const handleClickGA = (category, action, section) => {
  // En GA4, usas .event() pero los parámetros se pasan como un objeto plano.
  // Los nombres de los campos 'category', 'action' y 'label' siguen siendo compatibles
  // con el modelo de datos de eventos de GA4.
  ReactGA.event({
    category: category,
    action: action,
    label: section,
  });
};
