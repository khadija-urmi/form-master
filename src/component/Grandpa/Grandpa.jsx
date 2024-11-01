import React, { createContext, useState } from 'react';
import './Granda.css';
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext();

const Grandpa = () => {
    const asset = 'diamond';
    const [money, setMoney] = useState(1000);
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>net money:{money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='gold'>
                    <section className='flex'>
                        <Dad asset={asset}></Dad>
                        <Aunty></Aunty>
                        <Uncle></Uncle>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;