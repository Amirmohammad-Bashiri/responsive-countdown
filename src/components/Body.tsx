import styled from "styled-components";

interface BodyProps {
  handleStart: () => void;
}

function Body({ handleStart }: BodyProps): JSX.Element {
  return (
    <BodyContainer>
      <CountDownButton onClick={handleStart}>Start Countdown</CountDownButton>
    </BodyContainer>
  );
}

export default Body;

const BodyContainer = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountDownButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    padding: 0.75rem 1rem;
    font-size: 1.2rem;
  }
`;
