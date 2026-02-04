import React from "react"

export default function Input({ handleClient, handleName, handleNumber, handlePlatter, handlePlatternumber, platterNumber, field, name, client, number, platter }) {


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
                    <option value="DISPOSABLE">DISPOSABLE</option>
                </select>

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
            <br />

            {
                field && (<input
                    type="text"
                    className="data"
                    placeholder="Enter platter number"
                    value={platterNumber}
                    onChange={(e) => handlePlatternumber(e)}
                    required
                />)
            }

            {field &&

                <select
                    className="data"
                    value={platter}
                    onChange={(e) => handlePlatter(e)}
                    required
                >
                    <option value="" disabled>Choose platter</option>
                    <option value="FRUIT">FRUIT</option>
                    <option value="MACARONS">MACARONS</option>
                    <option value="SLICE">SLICE</option>
                    <option value="SCONES">SCONES</option>
                    <option value="MEATBALL">MEATBALL</option>
                    <option value="SPRING ROLLS">SPRING ROLLS</option>
                    <option value="PIES AND SAUSAGE ROLL">PIES AND SAUSAGE ROLL</option>
                    <option value="SUSHI">SUSHI</option>
                    <option value="BACON QUICHE">BACON QUICHE</option>
                    <option value="PORK SKEWERS">PORK SKEWERS</option>
                    <option value="BROWNIES">BROWNIES</option>
                    <option value="VEGAN SAVOURY">VEGAN SAVOURY</option>
                    <option value="KIDS NUGGETS AND CHIPS">KIDS NUGGETS AND CHIPS</option>
                    <option value="SAUSAGE ROLLS">SAUSAGE ROLLS</option>
                    <option value="ANTIPASTO PLATTER">ANTIPASTO PLATTER</option>
                    <option value="HOT CHIPS">HOT CHIPS</option>
                    <option value="CHICKEN SKEWERS">CHICKEN SKEWERS</option>
                    <option value="CANNOLI">CANNOLI</option>
                    <option value="ARANCHINI">ARANCHINI</option>
                    <option value="GOURMET BISCUIT">GOURMET BISCUIT</option>
                    <option value="SPANOKOPITA">SPANOKOPITA</option>
                    <option value="TIROPITA">TIROPITA</option>
                    <option value="CLUB">CLUB SANDWICH</option>
                    <option value="RIBBON">RIBBON SANDWICH</option>
                    <option value="VEGAN">VEGAN</option>
                    <option value="GLUTEN FREE">GLUTEN FREE SANDWICH</option>



                </select>

            }


        </div >
    )
}

