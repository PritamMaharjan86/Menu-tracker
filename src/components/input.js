import React from "react"

export default function Input({ handleClient, handleName, handleNumber, handlePlatter, field, name, client, number, platter }) {



    return (
        <div className="display">

            {field && (<input

                className="data"
                placeholder="Enter client name"
                value={client}
                onChange={(e) => handleClient(e)}
                required
            />)}
            {field && (
                <div>
                    <select
                        className="data"
                        value={name}
                        onChange={(e) => handleName(e)}
                        required
                    >
                        <option value="" disabled>Choose menu</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="ITALIAN">ITALIAN</option>
                        <option value="GREEK DELUXE">GREEK DELUXE</option>
                        <option value="GREEK LIGHT">GREEK LIGHT</option>
                        <option value="ASIAN">ASIAN</option>
                        <option value="MACEDOINIAN">MACEDOINIAN</option>
                    </select>
                </div>
            )}

            {
                field && (<input
                    type="number"
                    className="data"
                    placeholder="Enter menu number"
                    value={number}
                    onChange={(e) => handleNumber(e)}
                    required
                />)
            }

            {
                field && (<input
                    type="text"
                    className="data"
                    placeholder="Enter platter name"
                    value={platter}
                    onChange={(e) => handlePlatter(e)}
                    required
                />)
            }

        </div >
    )
}

