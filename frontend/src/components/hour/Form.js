import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import { add, update } from '../../actions/hour';

/** 
 * Componente de Formulário de cadastro/alteração de horas
 * @param {*} props 
 */
function Form(props) {

    const [hour, setHour] = useState({ start: '', end: '' });

    useEffect(() => {
        if (props.hourId) {
            const currentHour = props.hours.find(h => h.id === props.hourId) || { start: '', end: '' }
            setHour(currentHour)
        }
    }, [])

    const history = useHistory();

    const changeValue = (e) => {
        setHour({ ...hour, [e.target.name]: e.target.value });
    };

    const edit = (e) => {
        e.preventDefault();
        props.update(hour);
        setHour({ start: '', end: '' });
        history.push('/');
    };

    const add = (e) => {
        e.preventDefault();
        props.add(hour)
        setHour({ start: '', end: '' });
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="start">Hora de entrada</label>
                <input type="time" className="form-control" id="start" name="start" onChange={e => changeValue(e)} value={hour.start} />
            </div>
            <div className="form-group">
                <label htmlFor="end">Hora de Saída</label>
                <input type="time" className="form-control" id="end" name="end" onChange={e => changeValue(e)} value={hour.end} />
            </div>
            <div className="buttons">
                {props.hourId
                    ? <button className="btn btn-primary" onClick={edit}>SALVAR</button>
                    : <button className="btn btn-primary" onClick={add}>ADICIONAR</button>
                }
            </div>
        </form>
    );
};

const mapStateToProps = store => ({ hours: store.hour.items });
const mapDispatchToProps = dispatch => bindActionCreators({ add, update }, dispatch);

Form.propTypes = {
    hourId: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);