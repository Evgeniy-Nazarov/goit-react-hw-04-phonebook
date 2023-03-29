import styled from "styled-components";

export const ContactItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    list-style: none;
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    &:last-child {
        margin-bottom: 0;
    }
    &:hover {
        box-shadow: 0 0 10px 0 #000;
    }
    & > button {
        padding: 5px;
        border-radius: 5px;
        border: none;
       background-color: #000;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: all 250ms linear;
    &:hover {
        background-color: grey;
        box-shadow: 0 0 10px 0 #000;
    }
`;