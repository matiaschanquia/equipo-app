import React from "react";
import { connect } from "react-redux";
import { volver } from "../store";

const Suplentes = (props) => {
    return (
        <div>
            <h2>Suplentes</h2>
            <div className="container-suplentes">
                {!props.suplentes.length ? <h3>Sin jugadores</h3> : null}
                {props.suplentes.map((j) => (
                    <article className="container-jugador" key={j.id}>
                        <figure className="container-img">
                            <img src={j.image} alt={j.name} />
                        </figure>
                        <h3>{j.name}</h3>
                        <div className="btns">
                            <button
                                onClick={() =>
                                    props.volver({ id: j.id, obj: j })
                                }
                            >
                                X
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        suplentes: state.suplentes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        volver: (id_obj) => dispatch(volver(id_obj)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
