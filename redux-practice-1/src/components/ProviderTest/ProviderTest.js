import React, { useContext } from 'react';
import { ClientsContext } from '../../Provider/ClientProvider';

const ProviderTest = () => {
    const { clients, reFetch } = useContext(ClientsContext)
    console.log(reFetch);
    console.log(clients);
    return (
        <div>
            
        </div>
    );
};

export default ProviderTest;