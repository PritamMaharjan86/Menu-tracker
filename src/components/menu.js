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
                                .filter(item => item.category === 'Category C')
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
                                .filter(item => item.category === 'Category D')
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

                                    const fruit = item.pax <= 30 ? (<span>1 LARGE</span>) : (<span> {Math.round(item.pax / 30)}LARGE </span>);

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
                                .filter(item => item.category === "Category B")
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
                <span className='title'>SCONES</span>
                <div>
                    {items
                        .filter(item => item.category === 'Category A')
                        .map(item => (
                            <li key={item.id}>
                                {item.name}: {Math.round(item.pax * 1.5) + "each"}
                                {item.pax < 30 ? (
                                    <span> {Math.round((item.pax * 1.5) / 15)}small platters </span>
                                ) : (

                                    <span> {Math.round((item.pax * 1.5) / 24)} large platters</span>

                                )}
                            </li>
                        ))}
                </div>
            </div>

            <div>
                <span className='title'>Savoury Muffin</span>
                <div>
                    {items
                        .filter(item => item.category === "Category A")
                        .map(item => (
                            <li key={item.id}>{item.name}: {Math.round(item.pax * 1.5) + " bacon puff"}, {Math.round(item.pax * 1.5) + " spinach puff"}</li>
                        ))}
                </div>
            </div>






            <div>
                <span className='title'>CULTURAL</span>
                <div>
                    {items
                        .filter(item => item.category === "Category E")
                        .map(item => (
                            <li key={item.id}>{item.name}:{(item.pax <= 50) ? (
                                <span> 1 antipasto platter (mortadella, prosciutto di Parma and calabrese salami, provolone, pecorino, olives and gardinera), 1 foccacia, grissini, oilve oil, vinegar, {item.pax * 2} calamari, {item.pax * 2} fish, {item.pax} chipolata, {item.pax} pastizzi, {item.pax} mushroom aranchini, {item.pax} pumpkin aranchini, {item.pax} cannoli, {Math.round(item.pax / 30)} bags meatballs</span>
                            ) : (
                                <span> {Math.round(item.pax / 50)} antipasto platter (mortadella, prosciutto di Parma and calabrese salami, provolone, pecorino, olives and gardinera), {Math.round(item.pax / 50)} foccacia, grissini, oilve oil, vinegar, {item.pax * 2} calamari, {item.pax * 2} fish, {item.pax} chipolata, {item.pax} pastizzi, {item.pax} mushroom aranchini, {item.pax} pumpkin aranchini, {item.pax} cannoli, {Math.round(item.pax / 30)} bags meatballs </span> //Math.round is for getting answer in round figure

                            )}</li>
                        ))}
                </div>
                <br></br>
                <div>
                    {items
                        .filter(item => item.category === "Category F")
                        .map(item => (
                            <li key={item.id}>{item.name}:{(item.pax <= 50) ? (
                                <span> 1 mezze platter (Greek dolmades, kalamata olives, kesseri, kefalograviera and feta cheese),{Math.round(item.pax / 10)} olives bread, 2 pita breads, oilve oil, balsamic vinegar, {item.pax * 3} calamari, {item.pax * 3} fish, {item.pax} octopus, {item.pax} spanokopita, {item.pax} tiropita, {item.pax / 2} paximathia, {item.pax / 2} koulouria, {Math.round(item.pax / 50)} greek salad</span>
                            ) : (
                                <span> {Math.round(item.pax / 50)} mezze platter (Greek dolmades, kalamata olives, kesseri, kefalograviera and feta cheese), {Math.round(item.pax / 10)} olives bread, {Math.round(item.pax / 20)} pita breads, oilve oil, balsamic vinegar, {item.pax * 3} calamari, {item.pax * 3} fish, {item.pax} octopus, {item.pax} spanokopita, {item.pax} tiropita, {item.pax / 2} paximathia, {item.pax / 2} koulouria, {Math.round(item.pax / 50)} greek salad</span> //Math.round is for getting answer in round figure

                            )}</li>
                        ))}
                </div>
            </div>


        </div>


    )
}
