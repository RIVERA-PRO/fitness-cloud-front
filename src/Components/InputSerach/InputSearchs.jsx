import React, { useState, useEffect } from "react";
import "./InputSearchs.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Importar axios

export default function InputSearchs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEjercicios, setFilteredEjercicios] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [ejercicios, setEjercicios] = useState([]);

    useEffect(() => {
        axios.get('https://fitness-ue8o.onrender.com/ejercicios')
            .then(response => {
                const ejercicios = response.data.ejercicios;
                setEjercicios(ejercicios);
                console.log(ejercicios)
            })
            .catch(error => {
                console.error('Error al obtener los ejercicios:', error);
            });
    }, []);

    const handleButtonClick = (ejercicio) => {
        console.log(ejercicio);
    };

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const results = ejercicios.filter((ejercicio) => {
            return (
                ejercicio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ejercicio.categoria.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        setFilteredEjercicios(results);
        setShowResults(searchTerm !== "");
        setNoResults(searchTerm !== "" && results.length === 0);
    };

    return (
        <div className="fondo-input">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="inputJobs"
                />
                {showResults && (
                    <div className="modal">
                        {filteredEjercicios.map((ejercicio) => (
                            <div key={ejercicio._id}>
                                <button className="btn-music" onClick={() => handleButtonClick(ejercicio)}></button>
                                <Link to={`/ejercicios/${ejercicio._id}`}>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    <p>{ejercicio.title} - {ejercicio.categoria}</p>
                                </Link>
                            </div>
                        ))}
                        {noResults && <p>No se encontraron resultados.</p>}
                    </div>
                )}
            </div>
        </div>
    );
}
