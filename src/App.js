import './App.css';
import UsersContextProvider from './context/UsersContextProvider';
import Landing from './layouts/Landing';

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <Landing />
      </UsersContextProvider>
    </div>
  );
}

export default App;
