const Employees = (props)=>{
    return(
        <div>
            <h1>My Name: {props.name}</h1>
            <h1>Address: {props.address}</h1>
            <h1>Category: {props.category}</h1>
        </div>
    )
}
export default Employees;