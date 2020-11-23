import './App.css';
import Cart from './components/Cart/Cart';
import CountReducer from './components/CountByUseReducer/CountReducer';
import ProviderTest from './components/ProviderTest/ProviderTest';
import Shop from './components/Shop/Shop';

function App() {
  // const reducer = (state={}, action) => {
  //   if(action.type === 'A') {
  //     return {
  //       ...state,
  //       A: 'Hello A'
  //     }
  //   }
  //   return state
  // }
  // const store = createStore(reducer)

  // store.subscribe(() => {
  //   console.log(store.getState());
  // })
  // store.dispatch({ type: 'A' })
  // store.dispatch({type: 'welcome to redux'})
  // store.dispatch({type: 'welcome to redux'})

  return (
    // <Provider store={store}>
      <div>
        {/* <h6>Redux</h6>
        <Count />
        <Controll /> */}
        <Cart />
        <Shop />
        <ProviderTest />
        <CountReducer />
    </div>
    // </Provider>
  );
}

export default App;
