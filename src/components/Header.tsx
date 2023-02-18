import styled from "styled-components";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";

import { useToggle } from "../hooks/useToggle";

interface HeaderProps {
  count: number;
  theme: string;
  toggleTheme: () => void;
}

function Header({ count, theme, toggleTheme }: HeaderProps): JSX.Element {
  const [isSideBarOpen, toggleSidebar] = useToggle(false);

  const toggleSideBar = () => {
    toggleSidebar();
  };

  return (
    <HeaderContainer>
      <BurgerIcon onClick={toggleSideBar}>
        <Bars3Icon />
      </BurgerIcon>
      {isSideBarOpen ? (
        <>
          <SideBar>
            <CloseButtonIcon onClick={toggleSideBar}>
              <XMarkIcon />
            </CloseButtonIcon>
          </SideBar>
          <Backdrop onClick={toggleSideBar} />
        </>
      ) : null}
      <Countdown>{count}</Countdown>
      <ToggleThemeButton onClick={toggleTheme}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </ToggleThemeButton>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  position: relative;
  padding: 3rem 0;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Countdown = styled.div`
  font-size: 5rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  padding-bottom: 4rem;
  padding-top: 5rem;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

const ToggleThemeButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.text};

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    width: 2rem;
    height: 2rem;
    padding: 0.3rem;
  }
`;

const BurgerIcon = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text};

  @media (max-width: 600px) {
    display: block;
  }
`;

const CloseButtonIcon = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text};

  @media (max-width: 600px) {
    display: block;
  }
`;

const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  z-index: 100;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
