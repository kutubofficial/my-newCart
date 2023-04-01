import './Employees.css'
const Employees = (props)=>{
    return(
        <div className="container">
            <div className='box'>
               Employee I'd: <input type='text' id='id'/>
               Password: <input type='text' id='password'/>
               <button id='btn'>Done</button>
               </div>
            <div className='box'>
            <h1>Employee Name: {props.name}</h1>
            <h1>Address: {props.address}</h1>
            <h1>Contact: {props.contact}</h1>
            <h1>Category: {props.category}</h1>
            </div>
        </div>
    )
}
export default Employees;