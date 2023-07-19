import csrfFetch from "./csrf"


export const SET_BENCHES = '/benches/SET_BENCHES'
export const ADD_BENCH = '/benches/ADD_BENCH'

export const setBenches = (benches) => ({
    type: SET_BENCHES,
    benches
})

export const addBench = (bench) => ({
    type: ADD_BENCH,
    bench
})

export const createBench = (bench) => async (dispatch) => {
    const res = await csrfFetch(`/api/benches`, {
        method: 'POST',
        body: JSON.stringify(bench)
    })
    const data = await res.json();
    dispatch(addBench(data.bench));
}

export const fetchBench = (benchId) => async (dispatch) => {
    const res = await csrfFetch(`/api/benches/${benchId}`);
    const data = await res.json();
    dispatch(addBench(data.bench));
}


export const fetchBenches = () => async (dispatch) => {
    const res = await csrfFetch('/api/benches');
    const data = await res.json();
    dispatch(setBenches(data))
}

const benchReducer = (initialState = {}, action) => {
    const nextState = {...initialState}
    switch (action.type) {
        case SET_BENCHES:
            return {
                ...nextState,
                ...action.benches
            }
        case ADD_BENCH:
            return {
                ...nextState,
                [action.bench.id]: action.bench
            }
        default: 
            return nextState
    }
}

export default benchReducer;