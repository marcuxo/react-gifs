import {useState} from 'react'
import './App.css';
import Msg from './components/Message'
import ListOfGift from './components/ListOfGift';
import {Route} from 'wouter'

function App() {

  const [keyword, setKeyword] = useState(['random'])
  const busqueda = (event) => {
    event.preventDefault()
    return setKeyword(event.target[0].value)
  }
  return (
    <div className="App">
      <Msg message="GifMatico" />
      <form onSubmit={busqueda}>
        <input type='search'/>
      </form>
      <br />
        {/* <ListOfGift keyword={keyword}/> */}
      <br />
      <Route
        component={ListOfGift}
        path="/gif/:keyword"
      />
    </div>
  );
}

export default App;
