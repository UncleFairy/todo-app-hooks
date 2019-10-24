import React, { useState, useEffect } from "react";
import api from "../../api";
import Popup from "reactjs-popup";

function FactHeader() {
  const [fact, setFact] = useState("");

  function Modal() {
    return (
        <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            closeOnDocumentClick
            defaultOpen={true}
        >
            <span> Modal content </span>
        </Popup>
    );
  }
  useEffect(() => {
    api.facts.getFact().then(async ({ data }) => setFact(data[0].text));
  }, []);

  return (
    <div>
      <p>{fact}</p>
    </div>
  );
}

export default FactHeader;
