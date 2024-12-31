import React, { useState } from 'react';

export const Contador = () => {
    const [contador, setContador] = useState(0);

    const handleIncrementar = () => {
        setContador(contador + 1);
    }
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={handleIncrementar}>Incrementar</button>
        </div>
    )
}