import {createAction} from 'redux-actions';

export const getPockemonsRequest = createAction('GET_POCKEMONS_REQUEST');
export const getPockemonsFailure = createAction('GET_POCKEMONS_FAILURE');
export const getPockemonsSuccess = createAction('GET_POCKEMONS_SUCCESS');
