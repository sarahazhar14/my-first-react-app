const Counter = ({count, heading, onclickCount}) => {
    return(

     <button type="button" onClick={onclickCount} className="btn btn-primary mx-1">
     {heading} {count} 
 </button>)
           
    }
    
    export default Counter; 