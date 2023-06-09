import React from "react";
import { BounceLoader } from "react-spinners";
import "./spiral.css";

export default function Spiral() {
    const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    color: red;
  `;

    return (
        <div className="spiral-container">
            <p>Cargando...</p> <BounceLoader color="#FF1616" size={30} css={override} className="custom-loader" />
        </div>
    );
}
