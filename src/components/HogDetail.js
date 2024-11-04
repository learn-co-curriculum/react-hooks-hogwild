import React from 'react';
import {card} from 'sematic-ui-react';

const HogDetail = ({hog}) => (
    <card>
        <card.content>
            <card.Header>{hog.name}</card.Header>
            <card.Description>
                <p>specialty:{hog.specialty}</p>
                <p>weight: {hog.weight}</p>
                <p>greased: {hog.greased ? 'yes' : 'no' } </p>
                <p>Highest Medal: {hog.highestMedal} </p>
             </card.Description>
             </card.content>
            </card> 

);

export default HogDetail: