import React from 'react'

const TicketBtn = (props) =>{
    return(
        <div>
            <div className="btn-group">
            <button className ="btn btn-primary" onClick={()=>{props.handleClick('all')}}>All</button>
            <button className ="btn btn-primary" onClick={()=>{props.handleClick('high')}}>High</button>
            <button className ="btn btn-primary" onClick={() =>{props.handleClick('medium')}}>Medium</button>
            <button className ="btn btn-primary" onClick={() => {props.handleClick('low')}}>Low</button>
            </div>
        </div>
    )
}

export default TicketBtn