import styled from 'styled-components';

export const Header = styled.div`
.bg-light {
    background-color: transparent !important;
}
.text-header {
    font-size: 13px;
    text-transform: uppercase;
    color: black;
    letter-spacing: 2px;
}
.text-brand {
    color: black;
    font-size: 22px;
    font-weight: 500;
}
.badge-secondary {
    color: #fff;
    background-color: black;
}
.badge {
    display: inline-block;
    padding: .27em .8em;
    font-size: 74%;
    font-weight: 100;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: text-bottom;
}

.linguas {
    text-align: center;
    font-size: 16px;
    font-family: 'roboto', sans-serif;
    letter-spacing: 1px;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: 7px 20px;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.5;
    color: #000000;
    background-color: #eaeaea;
    background-clip: padding-box;
    border: 0px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.form-control:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0);
}
:focus {
    outline: none !important;
}
`;
