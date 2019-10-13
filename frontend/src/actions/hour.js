/**
 * Action creator que dispara ações para a API e alteração de estado de Hour
 */
import api from '../services/api';
import { ADD, REMOVE, UPDATE } from './actionTypes';

/**
 * Busca todos os registros de Hour
 */
export const findAll = () => {
    return async dispatch => {
        const result = (await api.get('/hours')).data;
        result.forEach(hour => 
            dispatch({
                type: ADD,
                payload: hour
            })
        );
    };
};

/**
 * Adiciona um novo registro de Hour
 */
export const add = hour => {
    return async dispatch => {
        const data = (await api.post('/hours', hour)).data
        dispatch({
            type: ADD,
            payload: data
        })
    }
};

/**
 * Remove um registro de Hour
 */
export const remove = id => {
    return dispatch => {
        api.delete(`/hours/${id}`)
        dispatch({
            type: REMOVE,
            payload: id
        })
    }
};

/**
 * Atualiza uma instância de Hour
 */
export const update = hour => {
    return dispatch => {
        api.put(`/hours/${hour.id}`, hour)
        dispatch({
            type: UPDATE,
            payload: hour
        })
    }
};