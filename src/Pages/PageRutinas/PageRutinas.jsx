import React, { useState } from 'react';
import Dia1 from '../../Components/Rutinas/Dia1';
import Dia2 from '../../Components/Rutinas/Dia2';
import Dia3 from '../../Components/Rutinas/Dia3';
import Dia4 from '../../Components/Rutinas/Dia4';
import Dia5 from '../../Components/Rutinas/Dia5';
import Dia6 from '../../Components/Rutinas/Dia6';
import Dia7 from '../../Components/Rutinas/Dia7';
import './PageRutinas.css'
export default function PageRutinas() {
    const [activeDia, setActiveDia] = useState(1);

    const renderDiaComponent = () => {
        switch (activeDia) {
            case 1:
                return <Dia1 />;
            case 2:
                return <Dia2 />;
            case 3:
                return <Dia3 />;
            case 4:
                return <Dia4 />;
            case 5:
                return <Dia5 />;
            case 6:
                return <Dia6 />;
            case 7:
                return <Dia7 />;
            default:
                return null;
        }
    };

    return (
        <div className='RutinasContain'>
            <div>
                <button onClick={() => setActiveDia(1)}>Día 1</button>
                <button onClick={() => setActiveDia(2)}>Día 2</button>
                <button onClick={() => setActiveDia(3)}>Día 3</button>
                <button onClick={() => setActiveDia(4)}>Día 4</button>
                <button onClick={() => setActiveDia(5)}>Día 5</button>
                <button onClick={() => setActiveDia(6)}>Día 6</button>
                <button onClick={() => setActiveDia(7)}>Día 7</button>
            </div>
            <div>{renderDiaComponent()}</div>
        </div>
    );
}
