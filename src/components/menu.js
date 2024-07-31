import React from 'react'

export default function Menu({ items }) {

    return (
        <div>
            <div>
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

                            <span className='title'>CLUBS</span>

                            {items
                                .filter(item => item.category === "Category B")
                                .map(item => {
                                    const savoury = Math.round(item.pax / 10);


                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>{savoury} NML</td>
                                        </tr>
                                    );
                                })}

                            {items
                                .filter(item => item.category === "Category C")
                                .map(item => {
                                    const ham = item.pax <= 12 ? Math.round((item.pax / 12) * 2) : Math.round(item.pax / 12) * 2;
                                    const egg = item.pax <= 12 ? Math.round((item.pax / 12) * 2) : Math.round(item.pax / 12) * 2;
                                    const beef = item.pax <= 12 ? Math.round((item.pax / 12)) : Math.round(item.pax / 12);
                                    const salmon = item.pax <= 12 ? Math.round((item.pax / 12)) : Math.round((item.pax / 12));
                                    const chicken = item.pax <= 12 ? Math.round((item.pax / 12) * 3) : Math.round(item.pax / 12) * 3;
                                    const tuna = item.pax <= 12 ? Math.round((item.pax / 12)) : Math.round(item.pax / 12);
                                    const platters = Math.round(item.pax / 12);
                                    const savoury = Math.round(item.pax / 12);


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


                            {items
                                .filter(item => item.category === "Category CL")
                                .map(item => {

                                    const club = <span>{item.add}</span>;

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>{item.add * 2}</td>
                                            <td>{item.add * 2}</td>
                                            <td>{item.add}</td>
                                            <td>{item.add}</td>
                                            <td>{item.add * 3}</td>
                                            <td>{item.add}</td>
                                            <td>{club}</td>
                                        </tr>
                                    );
                                })}

                            {items
                                .filter(item => item.category === "Category SV")
                                .map(item => {

                                    const savoury = <span>{item.add}</span>;

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>{savoury}</td>
                                        </tr>
                                    );
                                })}

                            {items
                                .filter(item => item.category === "Category VG")
                                .map(item => {

                                    const vegan = <span style={{ backgroundColor: "yellow", padding: '2px' }}>{item.add} X {item.platter}</span>;

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{vegan}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    );
                                })}

                            <span className='title'>RIBBONS</span>

                            {items
                                .filter(item => item.category === 'Category D' || item.category === "Category I")
                                .map(item => {
                                    const ham = item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2;
                                    const egg = item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2;
                                    const beef = item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2;
                                    const salmon = item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2;
                                    const chicken = item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2;
                                    const tuna = item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2;
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



                            {items
                                .filter(item => item.category === "Category RB")
                                .map(item => {

                                    const ribbon = <span>{item.add}</span>;

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>{item.add * 2}</td>
                                            <td>{item.add * 2}</td>
                                            <td>{item.add * 2}</td>
                                            <td>{item.add * 2}</td>
                                            <td>{item.add * 2}</td>
                                            <td>{item.add * 2}</td>
                                            <td>{ribbon}</td>
                                        </tr>
                                    );
                                })}

                            {items
                                .filter(item => item.category === "Category GF")
                                .map(item => {

                                    const gluten_free = <span style={{ backgroundColor: "yellow", padding: '2px' }}>{item.add} X {item.platter}</span>;

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{gluten_free}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    );
                                })}



                            <tr style={{ backgroundColor: 'yellow' }}>
                                <td>
                                    LUNCH BOX
                                </td>
                                <td>
                                    {Math.round((items.length * 2 / 6))}
                                </td>
                                <td>
                                    {Math.round((items.length * 2 / 6))}
                                </td>
                                <td>
                                    {Math.round((items.length * 2 / 6))}
                                </td>
                                <td>
                                    {Math.round((items.length * 2 / 6))}
                                </td>
                                <td>
                                    {Math.round((items.length * 2 / 6))}
                                </td>
                                <td>
                                    {Math.round((items.length * 2 / 6))}
                                </td>
                            </tr>


                            <tr style={{ fontWeight: 'bold', border: '1px solid black' }}>
                                <td>Total</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === "Category D" || item.category === "Category E").reduce((acc, item) => acc + (item.pax <= 10 ? Math.round((item.pax / 12) * 2) : Math.round(item.pax / 12) * 2), 0) + items.filter(item => item.category === 'Category D' || item.category === "Category I").reduce((acc, item) => acc + (item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2), 0) + Math.round((items.length * 2 / 6)) + items.filter(item => item.category === 'Category CL').reduce((acc, item) => acc + item.add * 2, 0) + items.filter(item => item.category === 'Category RB').reduce((acc, item) => acc + item.add * 2, 0)} </td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === "Category D" || item.category === "Category E").reduce((acc, item) => acc + (item.pax <= 10 ? Math.round((item.pax / 12) * 2) : Math.round(item.pax / 12) * 2), 0) + items.filter(item => item.category === 'Category D' || item.category === "Category I").reduce((acc, item) => acc + (item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2), 0) + Math.round((items.length * 2 / 6)) + items.filter(item => item.category === 'Category CL').reduce((acc, item) => acc + item.add * 2, 0) + items.filter(item => item.category === 'Category RB').reduce((acc, item) => acc + item.add * 2, 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D' || item.category === "Category E").reduce((acc, item) => acc + (item.pax <= 10 ? Math.round((item.pax / 12)) : Math.round(item.pax / 12)), 0) + items.filter(item => item.category === 'Category D' || item.category === "Category I").reduce((acc, item) => acc + (item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2), 0) + Math.round((items.length * 2 / 6)) + items.filter(item => item.category === 'Category CL').reduce((acc, item) => acc + item.add * 1, 0) + items.filter(item => item.category === 'Category RB').reduce((acc, item) => acc + item.add * 2, 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D' || item.category === "Category E").reduce((acc, item) => acc + (item.pax <= 10 ? Math.round((item.pax / 12)) : Math.round(item.pax / 12)), 0) + items.filter(item => item.category === 'Category D' || item.category === "Category I").reduce((acc, item) => acc + (item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2), 0) + Math.round((items.length * 2 / 6)) + items.filter(item => item.category === 'Category CL').reduce((acc, item) => acc + item.add * 1, 0) + items.filter(item => item.category === 'Category RB').reduce((acc, item) => acc + item.add * 2, 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D' || item.category === "Category E").reduce((acc, item) => acc + (item.pax <= 10 ? Math.round((item.pax / 12) * 3) : Math.round(item.pax / 12) * 3), 0) + items.filter(item => item.category === 'Category D' || item.category === "Category I").reduce((acc, item) => acc + (item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2), 0) + Math.round((items.length * 2 / 6)) + items.filter(item => item.category === 'Category CL').reduce((acc, item) => acc + item.add * 3, 0) + items.filter(item => item.category === 'Category RB').reduce((acc, item) => acc + item.add * 2, 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D' || item.category === "Category E").reduce((acc, item) => acc + (item.pax <= 10 ? Math.round((item.pax / 12)) : Math.round(item.pax / 12)), 0) + items.filter(item => item.category === 'Category D' || item.category === "Category I").reduce((acc, item) => acc + (item.pax <= 25 ? Math.round((item.pax / 25) * 2) : Math.round(item.pax / 25) * 2), 0) + Math.round((items.length * 2 / 6)) + items.filter(item => item.category === 'Category CL').reduce((acc, item) => acc + item.add * 1, 0) + items.filter(item => item.category === 'Category RB').reduce((acc, item) => acc + item.add * 2, 0)}</td>
                                <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D' || item.category === "Category E").reduce((acc, item) => acc + Math.round(item.pax / 12), 0) + items.filter(item => item.category === 'Category D' || item.category === "Category I").reduce((acc, item) => acc + Math.round(item.pax / 25), 0) + items.filter(item => item.category === 'Category CL').reduce((acc, item) => acc + item.add * 1, 0) + items.filter(item => item.category === 'Category RB').reduce((acc, item) => acc + item.add * 1, 0)}</td>

                                {/* <td>{items.filter(item => item.category === 'Category C' || item.category === 'Category D' || item.category === 'Category B').reduce((acc, item) => acc + Math.round(item.pax / 10), 0)}</td> */}
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

                                    const fruit = item.pax <= 30 ? (<span>1 SMALL</span>) : (<span> {Math.round(item.pax / 30)} LARGE </span>);

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>{fruit}</td>
                                        </tr>
                                    );
                                })}

                            {items
                                .filter(item => item.category === "Category FR")
                                .map(item => {

                                    const fruit = <span>{item.add}</span>;

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

                                    const macarons = (item.pax * 1) + " PCS"

                                    return (

                                        <tr key={item.id}>
                                            <td>{item.name} </td>
                                            <td>{macarons}</td>
                                        </tr>
                                    );
                                })}

                            {items
                                .filter(item => item.category === "Category MC")
                                .map(item => {

                                    const macarons = <span>{item.add}</span>;

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

                            {items
                                .filter(item => item.category === "Category SL")
                                .map(item => {

                                    const slices = <span>{item.add}</span>;

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
                                let scones;
                                let additionalInfo = Math.round((item.pax * 1.5) / 4) + " EACH";

                                if (item.pax < 30) {
                                    scones = (
                                        <span>
                                            {Math.round((item.pax * 1.5) / 15)} SMALL
                                            ({additionalInfo})
                                        </span>
                                    );
                                } else {
                                    scones = (
                                        <span>
                                            {Math.round((item.pax * 1.5) / 24)} LARGE
                                            ({additionalInfo})
                                        </span>
                                    );
                                }
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

                        {items
                            .filter(item => item.category === "Category SC")
                            .map(item => {
                                let scones;
                                let additionalInfo = Math.round((item.add * 1.5) / 4) + " EACH";

                                if (item.pax < 30) {
                                    scones = (
                                        <span>
                                            {Math.round((item.add * 1.5) / 15)} SMALL
                                            ({additionalInfo})
                                        </span>
                                    );
                                } else {
                                    scones = (
                                        <span>
                                            {Math.round((item.add * 1.5) / 24)} LARGE
                                            ({additionalInfo})
                                        </span>
                                    );
                                }


                                return (
                                    <tr >
                                        <td>{item.name}</td>
                                        <td>{scones}</td>
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

                            {items
                                .filter(item => item.category === "Category MT")
                                .map(item => {

                                    const meatballs = <span>{item.add}</span>;

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
                    <table style={{ width: '60%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category P")
                                .map(item => {

                                    const platters = <span>{item.add} {item.platter}</span>;

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

                <br></br>

                <div>
                    <table style={{ width: '100%', letterSpacing: '0.1px ', borderCollapse: 'seperate', marginTop: '10px', borderSpacing: '10px', textAlign: 'justify' }}>
                        <tbody>
                            {items
                                .filter(item => item.category === "Category J")
                                .map(item => {

                                    const macedoinian = (item.pax <= 50) ? (
                                        <span> {item.pax} BREAD ROLLS + BUTTER PORTION, {Math.round(item.pax / 25)} BOWLS MIXED OLIVES, {item.pax} FRIED FISH, {Math.round(item.pax / 25)} MEDIUM TRAY BAKED BEANS, {Math.round(item.pax / 25)} MEDIUM TRAY FRIED RICE, {Math.round(item.pax / 25)} KOMPIR SALAD, {Math.round(item.pax / 25)} CABBAGE SALAD, {Math.round(item.pax / 25)} SHOPSKA SALAD, {item.pax} HALVA, {item.pax} LOKUM, {Math.round(item.pax / 25)} FRUIT PLATTER
                                        </span>
                                    ) : (
                                        <span> {item.pax} BREAD ROLLS + BUTTER PORTION, {Math.round(item.pax / 25)} BOWLS MIXED OLIVES, {item.pax} FRIED FISH, {Math.round(item.pax / 25)} MEDIUM TRAY BAKED BEANS, {Math.round(item.pax / 25)} MEDIUM TRAY FRIED RICE, {Math.round(item.pax / 25)} KOMPIR SALAD, {Math.round(item.pax / 25)} CABBAGE SALAD, {Math.round(item.pax / 25)} SHOPSKA SALAD, {item.pax} HALVA, {item.pax} LOKUM, {Math.round(item.pax / 25)} FRUIT PLATTER
                                        </span>
                                    )

                                    return (

                                        <tr key={item.id}>
                                            <td style={{ fontWeight: 'bold' }}>{item.name} </td>
                                            <td>{macedoinian}</td>
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
