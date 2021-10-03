import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './store/index'

function App() {
    // access account value from redux store
    const account = useSelector((state) => state.account)
    const dispatch = useDispatch()

    const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch)

    return (
        <div className="App">
            <h1>{account}</h1>
            <button onClick={() => deposit(100)}>Deposit</button>
            <button onClick={() => withdraw(100)}>Withdraw</button>
        </div>
    );
}

export default App;
