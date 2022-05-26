import React, { useState } from "react";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import { getCurrentHousehold } from "../../actions/infoActions";
const Searchbox = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  return (
    <div className="searchBox">
      <input
        type="number"
        placeholder="residence ID here..."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button
        onClick={() => {
          if (id) {
            const resId = id;
            setId("");
            dispatch(getCurrentHousehold(resId));
          } else {
            dispatch(getCurrentHousehold(10));
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbox;
