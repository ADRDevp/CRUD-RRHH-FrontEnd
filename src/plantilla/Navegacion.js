import React from 'react';
import { Link } from 'react-router-dom';

export default function Navegacion() {
    return (
        <div className="container">
            <nav className="navbar md:navbar-expand navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Sistema de Gestión de Recursos Humanos
                    </Link>
                    <button
                        className="btn-icon navbar-toggler"
                        type="button"
                        data-bs-toggle="drawer"
                        data-bs-target="#navbarDrawer"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <dialog className="drawer drawer-end" id="navbarDrawer">
                        <div className="drawer-header">
                            <h5 className="drawer-title">Menú</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="drawer"
                            ></button>
                        </div>
                        <div className="drawer-body">
                            <ul className="nav navbar-nav me-auto">
                                <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/agregar">
                                    Agregar Empleados
                                </Link>
                            </li>
                            </ul>
                        </div>
                    </dialog>
                </div>
            </nav>
        </div>
    );
}