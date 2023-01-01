import React from "react";
import { connect } from "react-redux";
import { agregarTitular, agregarSuplente } from "../store";

const Jugadores = (props) => {
    return (
        <section className="section-jugadores">
            <h2>Jugadores</h2>
            <div className="container-jugadores">
                {!props.jugadores.length ? <h3>Sin jugadores</h3> : null}
                {props.jugadores.map((j) => (
                    <article className="container-jugador" key={j.id}>
                        <figure className="container-img">
                            <img src={j.image} alt={j.name} />
                        </figure>
                        <h3>{j.name}</h3>
                        <div className="btns">
                            <button
                                onClick={() =>
                                    props.agregarTitular({ id: j.id, obj: j })
                                }
                            >
                                Titular
                            </button>
                            <button
                                onClick={() =>
                                    props.agregarSuplente({ id: j.id, obj: j })
                                }
                            >
                                Suplente
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        jugadores: state.jugadores,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        agregarTitular: (id_obj) => dispatch(agregarTitular(id_obj)),
        agregarSuplente: (id_obj) => dispatch(agregarSuplente(id_obj)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
