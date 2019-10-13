import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { remove, update, findAll } from '../../actions/hour';

/**
 * Componente que apresenta a lista de horas
 * @param {*} props 
 */
function List(props) {
    
    return props.hours.length ? (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Entrada</th>
                    <th scope="col">Saída</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.hours.map(({id, start, end}, index) => (
                        <tr key={id}>
                            <th scope="row">{index}</th>
                            <td>{start}</td>
                            <td>{end}</td>
                            <td>
                                <Link className="btn btn-dark btn-sm btn-list-hour" to={`/edit/${id}`}>editar</Link>
                                <button className="btn btn-danger btn-sm btn-list-hour" onClick={() => props.remove(id)}>remover</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    ) : (
        <div className="alert alert-secondary" role="alert">
            Não há registros de horas ainda.
        </div>
    );
};

const mapStateToProps = store => ({ hours: store.hour.items });
const mapDispatchToProps = dispatch => bindActionCreators({ remove, update, findAll }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);