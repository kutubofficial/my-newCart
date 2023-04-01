import './Employees.css'
const Employees = (props)=>{
    return(
        <div className="container">
            <div className='box'>
                Name <input type='text' id='name'/>
               <br/>
                Contact <input type='text' id='contact'/>
               <br/>
               State <input type='text' id='state'/>
               <br/>
               <button id='btn'>Add</button>
               </div>
            <div className='box'>
            <h1> Name: {props.name}</h1>
            <h1>Contact: {props.contact}</h1>
            <h1>Address: {props.address}</h1>
            </div>
        </div>
    )
}
export default Employees;