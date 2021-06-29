import { ClearBtn } from "../../style/style";

const ClearSearch = (props) => {
  return (
    <div>
      <ClearBtn onClick={() => props.clearSearch(true)}>Clear</ClearBtn>
    </div>
  );
};

export default ClearSearch;
