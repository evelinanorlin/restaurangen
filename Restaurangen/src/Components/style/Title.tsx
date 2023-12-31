import styled from "styled-components";

export const HeaderH1 = styled.h1 `
    display: inline-block;
    position: relative;
    font-size:2rem;
    bottom: 0px;
    font-family: 'Lobster', cursive;
    color: #F3EDC9;

    @media (min-width: 768px) {
        bottom: 0px;
    }

    @media (min-width: 1200px) {
        bottom: 20px;
        font-size: 3.2rem;
}

`

export const HeaderH2Static = styled.h2`
    display: flex;
    justify-content: center;
    margin-top: 0px;
    padding-top:25px;
    font-family: 'Nixie One', cursive;
    font-size: 1.4rem;

    @media (min-width: 768px) {
        font-size: 2.3rem;
    }

    @media (min-width: 1200px) {
        font-size: 3rem;
        margin-bottom: 0px;
    }
`

export const HeaderH2Menu = styled(HeaderH2Static)`
    @media (min-width: 1200px) {
        margin-bottom: 20px;
    }
`

export const HeaderH3Static = styled.h3 `
    font-family: 'Lobster', cursive;
    font-size: 1.5rem;

    @media (min-width: 768px) {
        font-size: 1.6rem;
    }

    @media (min-width: 1200px) {
        font-size: 2.3rem;
    }
`

export const HeaderH3Menu = styled(HeaderH3Static) `

    @media (min-width: 768px) {
    }

    @media (min-width: 1200px) {
        font-size: 2rem;
    }
`

export const H2 = styled.h2 `
    font-family: 'Nixie One', cursive;
    color: #F3EDC9;`

export const H2centered = styled(H2)`
    text-align: center;
    line-height: 3rem;
    margin-bottom: 50px;
`

export const CookieH2 = styled(H2) `
    margin-top: 0px;
    padding: 20px 25%;
    padding-top: 120px;
`

export const CookieInfoH3 = styled(HeaderH2Static) `
    font-size: 2rem;
`
/*
@media (min-width: 768px) {

}
*/