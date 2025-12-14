import ReactGA from "react-ga4";

export const initGA = (trackingID) => {
  ReactGA.initialize(trackingID);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const handleClickGA = (category, action, section) => {
  ReactGA.event({
    category: category,
    action: action,
    label: section,
  });
};
