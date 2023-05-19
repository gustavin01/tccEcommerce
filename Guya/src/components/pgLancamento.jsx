import React from 'react';
import "./style.css";
import Navbar from './navbar';
import ProdutoFilter from './produtoFilter';

export default function PgLancamento() {
    return(
        <>
            <Navbar/>
            <ProdutoFilter />
        </>
    )
}