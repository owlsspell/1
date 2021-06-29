import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  background-color: ${(props) => (props.delete ? "red" : "blue")};
  color: white;
  border: none;
  margin: 0 auto;
  border-radius: 5px;
  padding: 2px 5px;
`;

export const ClearBtn = styled(Button)`
  margin-left: 20px;
`;
export const Card = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  width: 35%;
  min-width: 250px;
  margin: 10px;
  display: grid;
  grid-template-columns: 70% 28%;
  background-color: ${(props) => (props.selected ? "#e8f2f4" : "")};
  border-radius: 20px 0 20px 0;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardContent = styled.div`
  padding: 10px;
`;

export const BoxSearch = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 5px 10px;
`;

export const CardCountry = styled(Card)`
  display: block;
  width: 60%;
  position: relative;
  padding-top: 40px;
`;
export const CardMedia = styled.img`
  width: 99.5%;
  max-width: 400px;
  height: auto;
  border: 1px solid grey;
`;
export const Stamp = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: red;
  font-weight: bold;
  border-bottom: 1px solid red;
  border-left: 1px solid red;
  padding: 5px 10px;
`;
