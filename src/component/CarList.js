import {useSelector,useDispatch} from "react-redux";
import { RemoveCar } from "../store";
function CarList(){
    const dispatch=useDispatch();
    const {carList,name}=useSelector(({formReducer,carReducer: {carList,searchCar}})=>{
        const filterCar= carList.filter(item=>item.name.includes(searchCar));
        return {
            carList:filterCar,
            name:formReducer.name
        }
    })

    // const carList=useSelector((state)=>{
    //     return state.carReducer.carList;
    // })

    const handelDelete=(car)=>{       
        dispatch(RemoveCar(car.id))
    }
   
    return(
        <div>
            {
                carList.map((car)=>{
                    const bold=name && car.name.toLowerCase().includes(name.toLowerCase());
                    return (<div key={car.id}>
                         <span className={`${bold && "bold"}`}>{car.name} - $ {car.cost}</span>
                         <button onClick={()=>handelDelete(car)}>Delete</button>
                    </div>)                      
                } )
            }
        </div>
    );
}

export default CarList;