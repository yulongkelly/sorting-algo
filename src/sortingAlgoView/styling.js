import styled from 'styled-components'

export const ArrayContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex: 1;
    margin: auto;
`

export const NumBar = styled.span`
    width: 10px;
    background-color: blue;
    margin-left: 5px;
    height: ${(props) => `${props.height}px`};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content:space-between;
    height: 100vh;
`
