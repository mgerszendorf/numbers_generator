import React, { useState } from "react";

function FieldsCompleted(props) {
  const [numberArr, setNumberArr] = useState([]);
  const [inscribedMin, setInscribedMin] = useState();
  const [inscribedMax, setInscribedMax] = useState();
  const [inscribedQuantity, setInscribedQuantity] = useState();

  function btnFunction(e, inscribedMin, inscribedMax, inscribedQuantity) {
    const min = Number(inscribedMin);
    const max = Number(inscribedMax);
    const quantity = Number(inscribedQuantity);

    e.preventDefault();

    setNumberArr([]);

    for (let i = 0; i < quantity; i++) {
      setNumberArr((numberArr) => [
        ...numberArr,
        Math.floor(Math.random() * (max - min + 1)) + min,
      ]);
    }
  }

  return (
    <section className="app_wrapper">
      <div className="results_numbers">
        {numberArr.map((data) => (
          <p>{data}</p>
        ))}
      </div>
      <form className="form_fc">
        <div>
          <label>
            <p>Najmniejsza liczba:</p>
            <input
              type="Number"
              onChange={(e) => {
                setInscribedMin(e.target.value);
              }}
            />
          </label>
          <label>
            <p>Największa liczba:</p>
            <input
              type="number"
              onChange={(e) => {
                setInscribedMax(e.target.value);
              }}
            />
          </label>
          <label>
            <p>Ilość liczb:</p>
            <input
              className="input_number"
              type="number"
              onChange={(e) => {
                setInscribedQuantity(e.target.value);
              }}
            />
          </label>
        </div>
        <button
          type="submit"
          onClick={(e) =>
            btnFunction(e, inscribedMin, inscribedMax, inscribedQuantity)
          }
        >
          Zatwierdź
        </button>
      </form>
    </section>
  );
}

export default FieldsCompleted;
