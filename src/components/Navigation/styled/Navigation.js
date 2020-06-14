import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.5rem;
  background-color: ${(props) => props.theme.color.naviBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-logo {
    margin: 0 1rem;

    a {
      color: ${(props) => props.theme.color.color};
      margin: 0;
      cursor: pointer;
      text-decoration: none;
    }
  }

  .header-items {
    margin: 0 1rem;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
      align-content: center;
      align-items: center;
    }

    li {
      margin: 0 1rem;
    }

    a,
    button {
      text-decoration: none;
      color: ${(props) => props.theme.color.color};
      padding: 0.25rem 0.5rem;
      border: none;
      font: inherit;
      background: transparent;
      cursor: pointer;
      vertical-align: middle;
      margin: 0;

      &:hover,
      &.active {
        color: ${(props) => props.theme.color.color};
        background: ${(props) => props.theme.color.hoverColor};
        border-radius: 5px;
      }
    }
  }
`;
