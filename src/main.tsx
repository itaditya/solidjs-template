import { render } from 'solid-js/web';

import App from './App';

const appRender = () => {
  return <App />;
};

const rootElem = document.getElementById('app') as HTMLElement;

render(appRender, rootElem);
