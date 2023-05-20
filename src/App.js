import './App.scss';
import { BottomBar } from './components/BottomBar/BottomBar';
import { Header } from "./components/Header/Header"
import { TopBar } from './components/TopBar/TopBar';

export const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="top">
          <TopBar />
          <Header />
          <BottomBar />
        </div>
      </div >
    </>
  )
}