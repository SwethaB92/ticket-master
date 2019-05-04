import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveTicket } from '../../actions/tickets'
const TicketList = (props) => {
    console.log(props)
    return (
        <div>
            <h1> Listing Tickets - { props.tickets.length} </h1>
            <ul>
                { props.tickets.map(ticket => {
                    return(
                        <div>
                                <li key={ticket.id}> <Link to={`/tickets/${ticket.id}`}>{ ticket.name } </Link> </li>
                                <button className="btn btn-danger btn-sm" onClick={() => {
                                    const confirm = window.confirm("Are you sure")
                                    if(confirm){
                                        props.dispatch(startRemoveTicket(ticket))
                                    }
                                }}>Remove</button>
                            </div>
                    )

                })}
            </ul>

            <Link to="/tickets/new" className="btn btn-primary"> Add Ticket </Link>
        </div> 
    )
}

// wrapped component - Higher Order Component (HOC) 
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets,
        city: 'bangalore'
    }
}

export default connect(mapStateToProps)(TicketList)







// Higher Order Function 

// js treats functions as first class citizens 

// const greet = function(){ }
// const name = 'bangalore' 

/*
    function sayName(name) {
        console.log(name)
    }

    sayName(name)

    function execute(greet) {
        greet()
    }

    execute(greet)

    const numbers = [10,20,30,40]

    numbers.forEach(function(){

    })

*/