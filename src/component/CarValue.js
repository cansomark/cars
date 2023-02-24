import {useSelector} from "react-redux";
function CarValue(){
   const totalcost= useSelector(({carReducer:{carList,searchCar}})=>{
        const filterData=carList.filter((item)=>{
            return item.name.toLowerCase().includes(searchCar.toLowerCase());
        });
        return filterData.reduce((x,y)=>{
            return parseInt(x) + parseInt(y.cost)
        },0)
   })
    return(
        <div>
            <span>${totalcost}</span>
        </div>
    );
}

export default CarValue;