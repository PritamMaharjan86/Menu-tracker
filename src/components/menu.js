import React from 'react'

export default function Menu({ items }) {
    return (
        <div>
            <div>
                <span className='title'>CLUBS</span>
                <div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Ham</th>
                                <th>Egg</th>
                                <th>Beef</th>
                                <th>Salmon</th>
                                <th>Chicken</th>
                                <th>Tuna</th>
                                <th>Platters</th>
                                <th>Savoury</th>
                            </tr>
                        </thead>
                        <tbody>

                            {items
                                .filter(item => item.category === "Category B")
                                .map(item => {
                                    const ham = 0;
                                    const egg = 0;
                                    const beef = 0;
                                    const salmon = 0;
                                    const chicken = 0;
                                    const tuna = 0;
                                    const platters = 0;
                                    const savoury = Math.round(item.pax / 10);


                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{ham}</td>
                                            <td>{egg}</td>
                                            <td>{beef}</td>
                                            <td>{salmon}</td>
                                            <td>{chicken}</td>
                                            <td>{tuna}</td>
                                            <td>{platters}</td>
                                            <td>{savoury} NML</td>
                                        </tr>
                                    );
                                })}

                            {items
                                .filter(item => item.category === "Category C")
                                .map(item => {
                                    const ham = item.pax <= 10 ? (item.pax / 10) * 2 : Math.round(item.pax / 10) * 2;
                                    const egg = item.pax <= 10 ? (item.pax / 10) * 2 : Math.round(item.pax / 10) * 2;
                                    const beef = item.pax <= 10 ? (item.pax / 10) : Math.round(item.pax / 10);
                                    const salmon = item.pax <= 10 ? (item.pax / 10) : Math.round((item.pax / 10));
                                    const chicken = item.pax <= 10 ? (item.pax / 10) * 3 : Math.round(item.pax / 10) * 3;
                                    const tuna = item.pax <= 10 ? (item.pax / 10) : Math.round(item.pax / 10);
                                    const platters = Math.round(item.pax / 10);
                                    const savoury = Math.round(item.pax / 10);


                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{ham}</td>
                                            <td>{egg}</td>
                                            <td>{beef}</td>
                                            <td>{salmon}</td>
                                            <td>{chicken}</td>
                                            <td>{tuna}</td>
                                            <td>{platters}</td>
                                            <td>{savoury} NML</td>
                                        </tr>
                                    );
                                })}
                            {items
                                .filter(item => item.category === "Category D")
                                .map(item => {
                                    const ham = item.pax <= 10 ? (item.pax / 10) * 2 : Math.round(item.pax / 10) * 2;
                                    const egg = item.pax <= 10 ? (item.pax / 10) * 2 : Math.round(item.pax / 10) * 2;
                                    const beef = item.pax <= 10 ? (item.pax / 10) : Math.round(item.pax / 10);
                                    const salmon = item.pax <= 10 ? (item.pax / 10) : Math.round((item.pax / 10));
                                    const chicken = item.pax <= 10 ? (item.pax / 10) * 3 : Math.round(item.pax / 10) * 3;
                                    const tuna = item.pax <= 10 ? (item.pax / 10) : Math.round(item.pax / 10);
                                    const platters = Math.round(item.pax / 10);
                                    const savoury = Math.round(item.pax / 10);


                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{ham}</td>
                                            <td>{egg}</td>
                                            <td>{beef}</td>
                                            <td>{salmon}</td>
                                            <td>{chicken}</td>
                                            <td>{tuna}</td>
                                            <td>{platters}</td>
                                            <td>{savoury} SAM</td>
                                        </tr>
                                    );
                                })}

                            {items
                                .filter(item => item.category === "Category E")
                                .map(item => {
                                    const ham = item.pax <= 10 ? (item.pax / 10) * 2 : Math.round(item.pax / 10) * 2;
                                    const egg = item.pax <= 10 ? (item.pax / 10) * 2 : Math.round(item.pax / 10) * 2;
                                    const beef = item.pax <= 10 ? (item.pax / 10) : Math.round(item.pax / 10);
                                    const salmon = item.pax <= 10 ? (item.pax / 10) : Math.round((item.pax / 10));
                                    const chicken = item.pax <= 10 ? (item.pax / 10) * 3 : Math.round(item.pax / 10) * 3;
                                    const tuna = item.pax <= 10 ? (item.pax / 10) : Math.round(item.pax / 10);
                                    const platters = Math.round(item.pax / 10);


                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{ham}</td>
                                            <td>{egg}</td>
                                            <td>{beef}</td>
                                            <td>{salmon}</td>
                                            <td>{chicken}</td>
                                            <td>{tuna}</td>
                                            <td>{platters}</td>
                                        </tr>
                                    );
                                })}


                            <tr style={{ fontWeight: 'bold', border: '1px solid black' }}>
                                <td>Total</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 10 ? (item.pax / 10) * 2 : Math.round(item.pax / 10) * 2), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 10 ? (item.pax / 10) * 2 : Math.round(item.pax / 10) * 2), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 10 ? (item.pax / 10) : Math.round(item.pax / 10)), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 10 ? (item.pax / 10) : Math.round(item.pax / 10)), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 10 ? (item.pax / 10) * 3 : Math.round(item.pax / 10) * 3), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 10 ? (item.pax / 10) : Math.round(item.pax / 10)), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D').reduce((acc, item) => acc + Math.round(item.pax / 10), 0)}</td>
                                {/* <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D' || item.category === 'Category B').reduce((acc, item) => acc + Math.round(item.pax / 10), 0)}</td> */}
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>

            <div>
                <span className='title'>RIBBONS</span>
                <div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Ham</th>
                                <th>Egg</th>
                                <th>Beef</th>
                                <th>Salmon</th>
                                <th>Chicken</th>
                                <th>Tuna</th>
                                <th>Platters</th>

                            </tr>
                        </thead>
                        <tbody>
                            {items
                                .filter(item => item.category === 'Category D')
                                .map(item => {
                                    const ham = item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2;
                                    const egg = item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2;
                                    const beef = item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2;
                                    const salmon = item.pax <= 25 ? (item.pax / 25) * 2 : Math.round((item.pax / 25) * 2);
                                    const chicken = item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2;
                                    const tuna = item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2;
                                    const platters = Math.round(item.pax / 25);

                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{ham}</td>
                                            <td>{egg}</td>
                                            <td>{beef}</td>
                                            <td>{salmon}</td>
                                            <td>{chicken}</td>
                                            <td>{tuna}</td>
                                            <td>{platters}</td>

                                        </tr>
                                    );
                                })}
                            <tr style={{ fontWeight: 'bold', border: '1px solid black' }}>
                                <td>Total</td>
                                <td>{items.filter(item => item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 25 ? (item.pax / 25) * 2 : Math.round((item.pax / 25) * 2)), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category D').reduce((acc, item) => acc + (item.pax <= 25 ? (item.pax / 25) * 2 : Math.round(item.pax / 25) * 2), 0)}</td>
                                <td>{items.filter(item => item.category === 'Category D').reduce((acc, item) => acc + Math.round(item.pax / 25), 0)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            <div>
                <span className='title'>FRUITS</span>
                <div>

                    <table style={{ width: '40%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category D")
                                .map(item => {

                                    const fruit = item.pax <= 30 ? (<span>1 LARGE</span>) : (<span> {Math.round(item.pax / 30)} LARGE </span>);

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>{fruit}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>


            <div>
                <span className='title'>MACARONS</span>
                <div>

                    <table style={{ width: '40%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category D" || item.category === "Category C")
                                .map(item => {

                                    const macarons = (item.pax * 1) + " " + "PCS"

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>{macarons}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>


            <div>
                <span className='title'>SLICES</span>
                <div>
                    <table style={{ width: '40%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category B" || item.category === "Category E")
                                .map(item => {

                                    const slices = item.pax <= 20 ? (<span>1 SMALL</span>) : (<span> {Math.round(item.pax / 20)} LARGE </span>);

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>{slices}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>



            <div>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '50px' }}>
                    <thead>
                        <tr>
                            <th></th>
                            <th style={{ textDecoration: 'underline' }}>SCONES</th>
                            <th style={{ textDecoration: 'underline' }}>BISCUITS</th>
                            <th style={{ textDecoration: 'underline' }}>MUFFINS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items
                            .filter(item => item.category === 'Category A')
                            .map(item => {
                                const scones = Math.round((item.pax * 1.5)) + " EACH"
                                const biscuits = Math.round(item.pax * 1.5) + " PCS";
                                const muffins = Math.round(item.pax * 1.5) + " EACH";


                                return (
                                    <tr >
                                        <td>{item.name}</td>
                                        <td>{scones}</td>
                                        <td>{biscuits}</td>
                                        <td>{muffins}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>



            <div>
                <span className='title'>MEATBALLS</span>
                <div>
                    <table style={{ width: '40%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category D")
                                .map(item => {

                                    const meatballs = item.pax <= 25 ? (<span>1 BAGS</span>) : (<span> {Math.round(item.pax / 25)} BAGS</span>);

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>{meatballs}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <span className='title'>PLATTERS</span>
                <div>
                    <table style={{ width: '40%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category P")
                                .map(item => {

                                    const platters = item.pax <= 50 ? (<span> {Math.round(item.pax / 30)} {item.add}</span>) : (<span> {Math.round(item.pax / 50)} {item.add}</span>);

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>{platters}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>




            <div>
                <span className='title'>CULTURAL</span>
                <div>

                    <table style={{ width: '100%', letterSpacing: '0.1px ', borderCollapse: 'seperate', marginTop: '10px', borderSpacing: '10px', textAlign: 'justify' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category F")
                                .map(item => {

                                    const italian = (item.pax <= 50) ?

                                        (<span>  1 TRADITIONAL CURED MEATS (MORTADELLA, PROSCUITTO DI PARMA & CALABRESE SALAMI) ITALIAN CHEESE (PROVOLONE & PECORINO) OLIVES & GIARDINERA. <br></br>
                                            FOCCACIA, GRISSINI, PORK CHIPOLATA {item.pax} W/ SALSA ROSSA, CALAMARI RINGS {item.pax * 2}, PASTIZZI {item.pax}, MUSHROOM ARANCHINI {item.pax}, PUMPKIN ARANCHINI {item.pax}, MEATBALL {Math.round(item.pax / 30)} BAGS W/NAPOLI SAUCE, FISH {item.pax * 2}, CANNOLI {item.pax}, 1 TARTARE SAUCE + OLIVE OIL + BALSAMIC VINEGAR</span>)
                                        :

                                        (<span> {Math.round(item.pax / 50)} TRADITIONAL CURED MEATS (MORTADELLA, PROSCUITTO DI PARMA & CALABRESE SALAMI) ITALIAN CHEESE (PROVOLONE & PECORINO) OLIVES & GIARDINERA. <br></br> {Math.round(item.pax / 50)}  FOCCACIA, GRISSINI, PORK CHIPOLATA {item.pax} W/ SALSA ROSSA, CALAMARI RINGS {item.pax * 2}, PASTIZZI {item.pax}, MUSHROOM ARANCHINI {item.pax}, PUMPKIN ARANCHINI {item.pax}, MEATBALL {Math.round(item.pax / 30)} BAGS W/NAPOLI SAUCE, FISH {item.pax * 2}, CANNOLI {item.pax}, {Math.round(item.pax / 50)} TARTARE SAUCE + OLIVE OIL + BALSAMIC VINEGAR</span>);


                                    return (

                                        <tr key={item.id}>
                                            <td style={{ fontWeight: 'bold' }}>{item.name} </td>
                                            <td>{italian}</td>
                                        </tr>


                                    );


                                })
                            }



                        </tbody>
                    </table>

                </div>

                <br></br>

                <div>

                    <table style={{ width: '100%', letterSpacing: '0.1px ', borderCollapse: 'seperate', marginTop: '10px', borderSpacing: '10px', textAlign: 'justify' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category G")
                                .map(item => {

                                    const greekdeluxe = (item.pax <= 50) ?

                                        (<span>  1 MEZZE PLATTER (KESSERI, KEFALOGRAVIERA, FETTA CHEESE, DOLMADES, KALAMATA OLIVES), {Math.round(item.pax / 15)} OLIVE BREAD, {Math.round(item.pax / 30) / 2} PACKET PITA BREAD, {item.pax * 3} FISH, {item.pax} SPANOKOPITA, {item.pax} TIROPITA, {item.pax * 3} CALAMARI RINGS, {Math.round(item.pax / 30)} LARGE RAMEKIN TARAMASALATA, {Math.round(item.pax / 30)} LARGE RAMEKIN TARTARE SAUCE, {Math.round(item.pax / 30)} LARGE RAMEKIN TZATZIKI, OLIVE OIL, VINEGAR, {Math.round(item.pax / 2)} PAXIMATHIA,  {Math.round(item.pax / 2)} KOULOURIA, {item.pax} OCTOPUS & {Math.round(item.pax / 25)} LONG GREEK SALAD W DRESSING ON SIDE + {item.pax} PCS DEEP FRIED POTATOES    </span>)
                                        :

                                        (<span> {Math.round(item.pax / 50)} MEZZE PLATTER (KESSERI, KEFALOGRAVIERA, FETTA CHEESE, DOLMADES, KALAMATA OLIVES), {Math.round(item.pax / 15)} OLIVE BREAD, {Math.round(item.pax / 50)} PACKET PITA BREAD, {item.pax * 3} FISH, {item.pax} SPANOKOPITA, {item.pax} TIROPITA, {item.pax * 3} CALAMARI RINGS, {Math.round(item.pax / 50)} LARGE RAMEKIN TARAMASALATA, {Math.round(item.pax / 50)} LARGE RAMEKIN TARTARE SAUCE, {Math.round(item.pax / 50)} LARGE RAMEKIN TZATZIKI, OLIVE OIL, VINEGAR, {Math.round(item.pax / 2)} PAXIMATHIA,  {Math.round(item.pax / 2)} KOULOURIA, {item.pax} OCTOPUS & {Math.round(item.pax / 25)} LONG GREEK SALAD W DRESSING ON SIDE + {item.pax} PCS DEEP FRIED POTATOES    </span>);


                                    return (

                                        <tr key={item.id}>
                                            <td style={{ fontWeight: 'bold' }}>{item.name} </td>
                                            <td>{greekdeluxe}</td>
                                        </tr>


                                    );


                                })
                            }



                        </tbody>
                    </table>

                </div>

                <br></br>

                <div>

                    <table style={{ width: '100%', letterSpacing: '0.1px ', borderCollapse: 'seperate', marginTop: '10px', borderSpacing: '10px', textAlign: 'justify' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category H")
                                .map(item => {

                                    const greeklight = (item.pax <= 50) ?

                                        (<span>  1 MEZZE PLATTER (FETTA CHEESE, DOLMADES, KALAMATA OLIVES), {Math.round(item.pax / 15)} OLIVE BREAD, {Math.round(item.pax / 30) / 2} PACKET PITA BREAD, {item.pax * 3} FISH, {item.pax} SPANOKOPITA, {item.pax} TIROPITA, {Math.round(item.pax / 30)} LARGE RAMEKIN TARAMASALATA, {Math.round(item.pax / 30)} LARGE RAMEKIN TARTARE SAUCE, {Math.round(item.pax / 30)} LARGE RAMEKIN TZATZIKI, OLIVE OIL, VINEGAR, {Math.round(item.pax / 2)} PAXIMATHIA,  {Math.round(item.pax / 2)} KOULOURIA & {Math.round(item.pax / 25)} LONG GREEK SALAD W DRESSING ON SIDE + {item.pax} PCS DEEP FRIED POTATOES    </span>)
                                        :

                                        (<span> {Math.round(item.pax / 50)} MEZZE PLATTER (FETTA CHEESE, DOLMADES, KALAMATA OLIVES), {Math.round(item.pax / 15)} OLIVE BREAD, {Math.round(item.pax / 50)} PACKET PITA BREAD, {item.pax * 3} FISH, {item.pax} SPANOKOPITA, {item.pax} TIROPITA, {Math.round(item.pax / 50)} LARGE RAMEKIN TARAMASALATA, {Math.round(item.pax / 50)} LARGE RAMEKIN TARTARE SAUCE, {Math.round(item.pax / 50)} LARGE RAMEKIN TZATZIKI, OLIVE OIL, VINEGAR, {Math.round(item.pax / 2)} PAXIMATHIA,  {Math.round(item.pax / 2)} KOULOURIA & {Math.round(item.pax / 25)} LONG GREEK SALAD W DRESSING ON SIDE + {item.pax} PCS DEEP FRIED POTATOES    </span>);


                                    return (

                                        <tr key={item.id}>
                                            <td style={{ fontWeight: 'bold' }}>{item.name} </td>
                                            <td>{greeklight}</td>
                                        </tr>


                                    );


                                })
                            }
                        </tbody>
                    </table>

                </div>

                <br></br>

                <div>
                    <table style={{ width: '100%', letterSpacing: '0.1px ', borderCollapse: 'seperate', marginTop: '10px', borderSpacing: '10px', textAlign: 'justify' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category I")
                                .map(item => {

                                    const asian = (item.pax <= 50) ? (
                                        <span> {item.pax}FISH + {item.pax}PRAWN + {item.pax}DIMSIM + {item.pax * 2}SPRING ROLLS + {item.pax}SATAY CHICKEN</span>
                                    ) : (
                                        <span> {item.pax}FISH + {item.pax}PRAWN + {item.pax}DIMSIM + {item.pax * 2}SPRING ROLLS + {item.pax}SATAY CHICKEN</span> //Math.round is for getting answer in round figure

                                    )

                                    return (

                                        <tr key={item.id}>
                                            <td style={{ fontWeight: 'bold' }}>{item.name} </td>
                                            <td>{asian}</td>
                                        </tr>


                                    );
                                })
                            }

                        </tbody>
                    </table>

                </div>
            </div>


        </div>


    )
}
