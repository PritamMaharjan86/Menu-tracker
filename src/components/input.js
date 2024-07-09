import React from "react"

export default function Input({handleClient, handleName, handleNumber, field, name, client, number}) {


    
    return (
        <div className="display">

            {field && (<input

                className="data"
                placeholder="Enter client name"
                value={client}
                onChange={(e) => handleClient(e)}
                required
            />)}
            {field && (<input
                type="text"
                className="data"
                placeholder="Enter menu name"
                value={name}
                onChange={(e) => handleName(e)}
                required
            />)}
            {field && (<input
                type="number"
                className="data"
                placeholder="Enter menu number"
                value={number}
                onChange={(e) => handleNumber(e)}
                required
            />)}

        </div>
    )
}

