import React, { useState } from "react";
import { Container, Notification } from "./styles";
import { MdArrowBack } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [total, setTotal] = useState(0);
  return (
    <Container background="#2196f3">
      <div>
        <MdArrowBack size={24} />
        <p>Alo mundo</p>
      </div>

      {/* secondary */}
      <div>
        <Notification total={total}>
          <FaBell size={16} />
        </Notification>
        <span>Olá Usuário Teste</span>
        <BiDotsVerticalRounded size={24} />
      </div>
    </Container>
  );
};

export default Header;
