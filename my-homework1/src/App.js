import { useDispatch, useSelector } from 'react-redux'
import { incrementNumberAction } from './store/Reducer'
import './App.css'

// eslint-disable-next-line react-hooks/rules-of-hooks
const num = useSelector(num => num.num.num)
// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch()

const insrementNum = num => {
	dispatch(incrementNumberAction(num))
}

function App() {
	return (
    <>
    			<div onChange={insrementNum}>{num}</div>
    </>
	)
}

export default App