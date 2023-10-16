import logo from './logo.svg';
import './App.css';
import MiniDrawer from './Component/Admin/MiniDrawer';
import Dashboard from './Component/Dashboard/Dashboard';
//setting up git account
function App() {
  return (
    <div className="App" >
      <header>
      <MiniDrawer />
      </header> 
      <main >
        {/* <Dashboard/> */}
      </main>
       </div>
  );
}

export default App;
