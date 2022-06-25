
import './App.css';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum } from "./action/index"
// const Div = styled.div`
//   color:red
// `
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const H1 = styled.h1`
  color: green;
`
const Div = styled.div`
  color: green;
`
function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
 

  return (
    <Div className="App">
      <H1>Wellcome to React Redux</H1>
      <Button className='anchor' onClick={() => dispatch(decNum())}> DECREMENT </Button>
      <input type='text' className='input' value={myState} />
      <Button className='anchor' onClick={() => dispatch(incNum(5))}> INCREMENT </Button>

    </Div>
  );
}

export default App;

