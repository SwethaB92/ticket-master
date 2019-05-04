import axios from 'axios'

export const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET', 
        payload: ticket 
    }
}

export const startAddTicket = (ticket) => {
    return (dispatch) => {
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=3dd92f1913b13341', ticket)
            .then(response => {
                const ticket = response.data
                dispatch(addTicket(ticket))
            })
    }
}

export const setTickets = (tickets) => {
    return{
        type: 'SET_TICKETS',
        payload: tickets
    }
}
export const startSetTickets = () => {
    return (dispatch) => {
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=3dd92f1913b13341')
            .then(response => {
                dispatch(setTickets(response.data))
            })
    }
}
// removeTicket 
export const removeTicket = (id) => {
    return {
        type: 'REMOVE_TICKET',
        payload: id 
    }
}

export const startRemoveTicket = (ticket) => {
    return(dispatch) => {
        axios.delete('http://dct-api-data.herokuapp.com/tickets?api_key=3dd92f1913b13341')
            .then(() => {
                dispatch(removeTicket(ticket.id))
            })
    }
}

// editTicket 