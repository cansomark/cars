import {useDispatch,useSelector} from "react-redux";
import {SearchCar} from "../store";
function CarSearch(){
    const dispatch=useDispatch();
    const searchCar=useSelector((state)=>{
        return state.carReducer.searchCar
    });
    const searchList=useSelector((state)=>{
        return state.carReducer.carList;
    })
    const handelSearchTerm=(event)=>{
        dispatch(SearchCar(event.target.value))
    }

    return(
        <div>
           <label className="label">Search</label>
           <input type="text" value={searchCar} onChange={handelSearchTerm}/>         
        </div>
    );
}

export default CarSearch;