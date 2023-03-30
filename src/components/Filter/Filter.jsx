import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer } from './Filter.styled';


export const Filter = ( { changeFilter, value  }) => {    
    return (
        <>
            <FilterContainer>
                <span>Find contacts by name</span> 
                <input value={value} type="text" onChange={changeFilter} />
            </FilterContainer>

        </>
    )
}

Filter.propTypes = {
    changeFilter: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

    





