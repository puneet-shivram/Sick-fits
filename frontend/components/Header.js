import Link from "next/Link";
import styled from "styled-components";
import Nav from "./Nav";
export default function Header() {
  const Logo = styled.h1`
    background: red;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    font-size: 4rem;
    a {
      color: #ffffff;
      text-decoration: none;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
    }
  `;
  const HeaderStyles = styled.header`
    .bar {
      border-bottom: 10px solid var(--black);
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      align-items: center;
    }
    .sub-bar {
      display: grid;
      grid-template-columns: 1fr auto;
      border-bottom: 1px solid var(--black);
    }
  `;
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">Search</div>
      <Nav />
    </HeaderStyles>
  );
}
