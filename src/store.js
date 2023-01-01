import { createStore } from "redux";

const initialState = {
    jugadores: [
        {
            id: 1,
            name: "Leanne Graham",
            image: "https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1024x1332/1024x1332-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=480:*",
        },
        {
            id: 2,
            name: "Ervin Howell",
            image: "https://img.freepik.com/foto-gratis/hombre-guapo-sonriendo-retrato-cara-feliz-cerca_53876-143272.jpg?w=500",
        },
        {
            id: 3,
            name: "Clementine Bauch",
            image: "https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?resize=500%2C500&ssl=1",
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/6EE3/production/_97678382_okface.jpg",
        },
        {
            id: 5,
            name: "Chelsey Dietrich",
            image: "https://www.trecebits.com/wp-content/uploads/2019/02/Persona-1-445x445.jpg",
        },
        {
            id: 6,
            name: "Dennis Schul",
            image: "https://junglamoderna.com/wp-content/uploads/2019/02/esta-persona-no-exist-297x300.jpg",
        },
        {
            id: 7,
            name: "Kurtis Weissnat",
            image: "https://i.pinimg.com/originals/32/13/4d/32134d535817223c07490a212f5a0ea7.jpg",
        },
        {
            id: 8,
            name: "Nicholas Runolf",
            image: "https://i0.wp.com/www.periodismo.com/wp-content/subid/3-2-1.jpg?resize=696%2C696&ssl=1",
        },
        {
            id: 9,
            name: "Glenna Reichert",
            image: "https://i.blogs.es/f6f619/window_y_100k_models_-_google_drive/450_1000.jpg",
        },
    ],
    titulares: [],
    suplentes: [],
};

const AGREGAR_TITULAR = "AGREGAR_TITULAR";
const AGREGAR_SUPLENTE = "AGREGAR_SUPLENTE";
const VOLVER = "VOLVER";

export const agregarTitular = ({ id, obj }) => {
    return {
        type: AGREGAR_TITULAR,
        payload: {id, obj},
    }
}

export const agregarSuplente = ({ id, obj }) => {
    return {
        type: AGREGAR_SUPLENTE,
        payload: {id, obj},
    }
}

export const volver = ({ id, obj }) => {
    return {
        type: VOLVER,
        payload: {id, obj}
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AGREGAR_TITULAR:
            return {
                ...state,
                jugadores: state.jugadores.filter(j => j.id !== action.payload.id),
                titulares: [...state.titulares, action.payload.obj],
            };
        case AGREGAR_SUPLENTE:
            return {
                ...state,
                jugadores: state.jugadores.filter(j => j.id !== action.payload.id),
                suplentes: [...state.suplentes, action.payload.obj],
            }
        case VOLVER:
            return {
                jugadores: [...state.jugadores, action.payload.obj],
                titulares: state.titulares.filter(t => t.id !== action.payload.id),
                suplentes: state.suplentes.filter(s => s.id !== action.payload.id),
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
