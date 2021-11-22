import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch} from "react-redux"
import GETUSERS from "./redux/actions";
import  ListOfUsers from './listOfUsers'
function App() {
  const dispatch=useDispatch()
   function handleClick(){
    dispatch(GETUSERS());
   }
  return (
   <> 
 
      <button className="btn btn-primary" onClick={handleClick} >
        Get All users
      </button>
      <ListOfUsers/>
   
    
    </>
  
  );
}
export default App;
