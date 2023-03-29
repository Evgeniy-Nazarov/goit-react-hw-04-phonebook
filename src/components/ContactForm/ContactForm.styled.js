import styled from "styled-components";

export const PhoneBook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 5px;
`;

export const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
`;
export const FormLabel = styled.label`
margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

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
`;

export const FormSpan = styled.span`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const FormButton = styled.button`
    margin-top: 10px;
    position: relative;
left: 50%;
transform: translate(-50%, 0);
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: all 250ms linear;
    &:hover {
        background-color: grey;
        box-shadow: 0 0 10px 0 #000;
    }
`;