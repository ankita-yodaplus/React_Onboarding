import UseStateComponent from './useStateComponent'
import UseEffectComponent from './UseEffectComponent'
import UseContextComponent from './UseContextComponent'
import UseReducerComponent from './UseReducerComponent';
import UseRefComponent from './UseRefComponent';
import './App.css'

function App() {
  

  return (
    <div>
      <h1>useRef</h1>
      <UseRefComponent />

      <h1>useReducer</h1>
      <UseReducerComponent />

      <h1>useContext</h1>
      <UseContextComponent />

      <h1>useState</h1>
      <UseStateComponent />

      <h1>useEffect</h1>
      <UseEffectComponent />
    </div>
  )
}

export default App
