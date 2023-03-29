import styled from "styled-components";

export const FilterContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;

    & > span {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        margin-top: 10px;
    }    

    & > input {
        padding: 10px;
        border-radius: 5px;
        background-color: white;
        color: black;
        font-size: 20px;
        cursor: pointer;
        transition: all 250ms linear;
        &:hover {
            box-shadow: 0 0 10px 0 #000;
        }
    &:focus {
            box-shadow: 0 0 10px 0 #000;
    }
    }
}
`;
