import { changeName, changeCost } from "../store";
import { useDispatch, useSelector } from "react-redux";
function CarForm(){
    const dispatch=useDispatch();
    const {name,cost}=useSelector((state)=>{
       return {
        name:state.formReducer.name,
        cost:state.formReducer.cost
       }
    })
    const handelnameChange=(event)=>{
        dispatch(changeName(event.target.value))
    }

    const handelcostChange=(event)=>{
        dispatch(changeCost(event.target.value));
    }
    return(
        <div className="car-form panel">
           <h4 className="subtitle is-3">Add Car</h4>
           <form>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input
                        className="input is-explained"
                        value={name}
                        onChange={handelnameChange}
                    />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input
                        type="number"
                        className="input is-explained"
                        value={cost}
                        onChange={handelcostChange}
                    />
                </div>
            </div>
           </form>
        </div>
    );
}

export default CarForm;