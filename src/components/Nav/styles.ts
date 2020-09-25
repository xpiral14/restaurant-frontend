import styled from "styled-components";

interface ContainerProps {
  background: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${(p) => p.theme.colors.primary};
  padding: 32px;
  grid-area: nv;
  justify-content: space-between;

  &,
  & > div {
    display: flex;
    align-items: center;

    span {
      margin: 0 24px;
    }
  }

  div:first-child {
    p {
      margin-left: 16px;
    }
  }
`;

interface NotificationProps {
  total?: number;
}
export const Notification = styled.div<NotificationProps>`
  width: 32px;
  height: 32px;
  background-color: #f8c835;
  padding: 4px;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 16px;
    height: 16px;
    content: "${(p) => p.total || ""}";
    position: absolute;
    opacity: ${(p) => (p.total ? 1 : 0)};

    background: #fcab58;
    color: white;

    font-weight: bold;

    font-size: 8px;

    top: -2px;

    right: -5px;
    z-index: 999;

    transition: opacity 0.3s ease-in-out;
  }
`;
