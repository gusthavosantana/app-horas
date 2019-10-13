import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { findAll } from '../actions/hour';

import Form from '../components/hour/Form';
import List from '../components/hour/List';

function Home(props) {

    useEffect(() => {
        props.findAll()
    }, []);

    return (
        <>
            <Form />
            <List />
        </>
    );
};

const mapStateToProps = store => ({ hours: store.hour.items });
const mapDispatchToProps = dispatch => bindActionCreators({ findAll }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);