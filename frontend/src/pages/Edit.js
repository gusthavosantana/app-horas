import React from 'react';
import { useParams } from 'react-router-dom';

import Form from '../components/hour/Form';

export default function Edit() {
    
    const { id } = useParams();

    return <Form hourId={id} />
};