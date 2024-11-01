import React, { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>has :{gift}</p>
            <p>has also: {asset}</p>
        </div>
    );
};

export default Special;