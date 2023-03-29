import React from 'react';
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
    





