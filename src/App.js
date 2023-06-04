import { Provider } from 'react-redux';
import './App.scss';
import { Router } from './components/Router/Router';
import { store } from './store';


export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}