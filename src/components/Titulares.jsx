import React from "react";
import { connect } from "react-redux";
import { volver } from "../store";

const Titulares = (props) => {
    return (
        <div>
            <h2>Titulares</h2>
            <div className="container-titulares">
                {!props.titulares.length ? <h3>Sin jugadores</h3> : null}
                {props.titulares.map((j) => (
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
        titulares: state.titulares,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        volver: (id_obj) => dispatch(volver(id_obj)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
