import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/action";
import { DivStyled } from "./style";

const UserCard = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const { name } = useSelector((state) => state.user);

  console.log(name);
  const handleClick = () => {
    dispatch(changeName(user));
  };

  return (
    <DivStyled>
      <p>{`Nome é: ${name}`}</p>
      <input
        type="text"
        placeholder="Novo nome"
        onChange={(event) => setUser(event.target.value)}
      />
      <button onClick={handleClick}>Change</button>
    </DivStyled>
  );
};

export default UserCard;
