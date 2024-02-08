import styled from "styled-components";

export const NavStyle = styled.nav`
/* color: #eee; */
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 2px 4px rgba(0,0,0,.2);
padding: 0%.8rem;
user-select: none;
a{
    color: inherit;
}
.navbar-items{
    display: flex;
    justify-content: center;
    align-items: center;

    &.showNavbar {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;
    }
}
`;