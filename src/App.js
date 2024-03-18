import { BrowserRouter } from 'react-router-dom';
import Index from './hooks/index';
import { Provider } from 'react-redux';
import { store } from './hooks/redux';
import {context} from './hooks/context';
function App() {
  let {AccountContextProvider} = context
  return (
    <AccountContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </Provider>
    </AccountContextProvider>
  );
}
export default App;
