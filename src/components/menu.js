import React from 'react'

export default function Menu({items}) {
    return (
        <div>
            <div>
                <span className='title'>Club Sandwiches</span>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right', gap: '30px' }}>
                        <p>Ham</p> <p>Egg</p><p>Beef</p> <p>Salmon</p><p>chicken</p> <p>tuna</p><p>Platters</p></div>
                    {items
                        .filter(item => item.category === "Category C")
                        .map(item => (
                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }} key={item.id}>{item.name}
                                {(item.pax <= 10) ? (
                                    <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '30px' }}> <p>{(item.pax / 10) * 2}</p> <p>{(item.pax / 10) * 2}</p> <p>{(item.pax / 10)}</p> <p>{(item.pax / 10) * 3}</p> <p>{(item.pax / 10)}</p> <p>{(item.pax / 10)}</p><p>{Math.round(item.pax / 10)}</p></span>
                                ) : (

                                    <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '30px' }}>
                                        <p>{Math.round(item.pax / 10) * 2}</p>
                                        <p>{Math.round(item.pax / 10) * 2}</p>
                                        <p>{Math.round(item.pax / 10)}</p>
                                        <p>{Math.round(item.pax / 10)}</p>
                                        <p>{Math.round((item.pax / 10) * 3)}</p>
                                        <p>{Math.round(item.pax / 10)}</p>
                                        <p>{Math.round(item.pax / 10)}</p>
                                    </span>

                                )}
                            </li>
                        ))}
                </div>

                <div>
                    {items
                        .filter(item => item.category === "Category D")
                        .map(item => (
                            <li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }} key={item.id}>{item.name}:
                                {(item.pax <= 25) ? (
                                    <span> 1 platters sandwich </span>
                                ) : (
                                    <span> {Math.round(item.pax / 25)}large platters</span>
                                )}
                            </li>
                        ))}


                </div>
            </div>

            <div>
                <span className='title'>Ribbon Sandwiches</span>
                <div>
                    {items
                        .filter(item => item.category === "Category D")
                        .map(item => (
                            <li key={item.id}>{item.name}:
                                {(item.pax <= 25) ? (
                                    <span> 1 platters sandwich </span>
                                ) : (

                                    <span> {Math.round(item.pax / 25)}large platters</span>

                                )}</li>
                        ))}


                </div>
            </div>

            <div>
                <span className='title'>Macarons</span>
                <div>
                    {items
                        .filter(item => item.category === "Category C" || item.category === "Category D")
                        .map(item => (
                            <li key={item.id}>{item.name}: {item.pax * 1 + "pcs"}</li>
                        ))}
                </div>
            </div>

            <div>
                <span className='title'>Savoury</span>
                <div>
                    {items
                        .filter(item => item.category === "Category B" || item.category === "Category C")
                        .map(item => (
                            <li key={item.id}>{item.name}:
                                {(item.pax <= 10) ? (
                                    <span> 1 platters </span>
                                ) : (

                                    <span> {Math.round(item.pax / 10)}large platters</span>

                                )}</li>
                        ))}
                </div>
            </div>


            <div>
                <span className='title'>Scones</span>
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
                <span className='title'>Fruits</span>
                <div>
                    {items
                        .filter(item => item.category === "Category D")
                        .map(item => (
                            <li key={item.id}>{item.name}:
                                {(item.pax <= 30) ? (
                                    <span> 1 large platter</span>
                                ) : (

                                    <span> {Math.round(item.pax / 30)}large platters</span> //Math.round is for getting answer in round figure

                                )}</li>
                        ))}
                </div>
            </div>

            <div>
                <span className='title'>Slice</span>
                <div>
                    {items
                        .filter(item => item.category === "Category B")
                        .map(item => (
                            <li key={item.id}>{item.name}:{(item.pax < 20) ? (
                                <span> 1 small platter</span>
                            ) : (

                                <span> {Math.round(item.pax / 20)}large platters</span> //Math.round is for getting answer in round figure

                            )}</li>
                        ))}
                </div>
            </div>

            <div>
                <span className='title'>Meatballs</span>
                <div>
                    {items
                        .filter(item => item.category === "Category D")
                        .map(item => (
                            <li key={item.id}>{item.name}:{(item.pax < 25) ? (
                                <span> 1 platter</span>
                            ) : (
                                <span> {Math.round(item.pax / 25)} platters</span> //Math.round is for getting answer in round figure

                            )}</li>
                        ))}
                </div>
            </div>

            <div>
                <span className='title'>Samosa Savoury</span>
                <div>
                    {items
                        .filter(item => item.category === "Category D")
                        .map(item => (
                            <li key={item.id}>{item.name}:{(item.pax <= 15) ? (
                                <span> 1 platter</span>
                            ) : (
                                <span> {Math.round(item.pax / 15)} platters</span> //Math.round is for getting answer in round figure

                            )}</li>
                        ))}
                </div>
            </div>

            <div>
                <span className='title'>Cultural Menu</span>
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
