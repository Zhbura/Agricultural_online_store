import './App.scss';
import { Header } from "./components/Header/Header"
import { TopBar } from './components/TopBar/TopBar';

export const App = () => {
  return (
    <>
      <TopBar />
      <Header />
    </>
  )
}