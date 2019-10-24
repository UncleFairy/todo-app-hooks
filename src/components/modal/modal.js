import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import { styles } from "./styles";
import { connect } from "react-redux";
import {fetchFact} from "./actions";

function Modal({ fetchFact, fact }) {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <Popup
      modal
      closeOnDocumentClick
      defaultOpen={true}
      contentStyle={styles.popup}
    >
      <div className="container">
        <h3 style={styles.h3}>Intresting fact for today {date}</h3>{" "}
        <div className="row align-items-center">
          <div className="col-sm-3">
            <img
              src="https://p.pngsee.com/uploadpng/small/71-715934_cat-cats-cute-cute-animals-png-image-smiling.png"
              alt="squirrel"
              style={styles.img}
            />
          </div>
          <div className="col-sm-8">
            <p style={styles.paragraph}>{fact}</p>{" "}
          </div>
        </div>
        <h3 style={styles.h3}>Have a nice day!!!</h3>{" "}
      </div>
    </Popup>
  );
}

const mapDispatchToProps = {
  fetchFact
};

const mapStateToProps = state => ({
  fact: state.fact
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
