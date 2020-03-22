import styled from 'styled-components';


export const Descript = styled.p`
    text-align: center;
    font-size: 20px;
    color: #ffffff38;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
`;

export const Tittles = styled.h1`
    text-align: center !important;
    color: #fff;
    font-size: 49px;
    font-family: 'Roboto', sans-serif;

`;

export const Tittle = styled.h1`
    font-size: 16px;
    text-align: center;
    color: #fff;
    letter-spacing: 1px;
    text-align: left;
`;

export const TopList = styled.h3`
    font-size: 17px;
    margin-bottom: 0px;
    text-align: center;
    color: #fff;
`;

export const Listing = styled.div`
    img {
        width: 23px;
        margin: 0 43%;
    }

    th {
        border: 1px solid #444 !important;
        border-color: #444 !important;
    }
    .cont-blak {
        background-color: black;
    }
    .table {
        width: 50%;
        margin-bottom: 0rem;
        color: #212529;
        margin: 0 25%;
    }
    .table-bordered thead td, .table-bordered thead th {
        border-bottom-width: 1px;
    }

    .none-th {
        visibility: hidden;
    }
    .badge-secondary {
        color: #000;
        background-color: #ffffff;
        text-align: center;
        text-transform: uppercase;
        font-size: 9px;
    }
    @media only screen and (max-width: 600px) {
        .table {
            width: 73%;
            margin-bottom: 0rem;
            color: #212529;
            margin: 0px 13%;
        }
    }
`;
