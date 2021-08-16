import "./styles.css";
import luckyimage from "./lucky.svg";
import noluckyimage from "./no_lucky.svg";

export default function App() {
  function changeDateHandler(e) {
    const birthdayDate = document.querySelector("#birthday-date");
    const luckyNumber = document.querySelector("#lucky-number");

    const resultBox = document.querySelector("#result");

    if (birthdayDate.value !== "" && luckyNumber.value !== "") {
      let sum = 0;
      // apply regular expression to replace all - to empty space
      const allString = birthdayDate.value.replace(/-/g, "");
      //iterate every character
      for (var i = 0; i < allString.length; i++) {
        //convert every string into number
        sum = sum + Number(allString[i]);
      }

      // check is your birth day is lucky or not
      if (sum % luckyNumber.value === 0) {
        document.body.style.backgroundImage = `url(${luckyimage})`;
        resultBox.innerHTML = "Your Birthday is lucky 🎈 ";
      } else {
        document.body.style.backgroundImage = `url(${noluckyimage})`;
        resultBox.innerHTML = "Your Birthday is not lucky 😞 ";
      }

      if (luckyNumber.value === "") {
        resultBox.innerHTML = " ";
      }
    } else {
      alert("Please enter both value");
      resultBox.innerHTML = " ";
      var emptyImage = "";
      document.body.style.backgroundImage = `url(${emptyImage})`;
    }
  }

  /* Only number support */
  const NumericOnly = (e) => {
    const reg = /^[0-9\b]+$/;
    let preval = e.target.value;
    if (e.target.value === "" || reg.test(e.target.value)) return true;
    else e.target.value = preval.substring(0, preval.length - 1);
  };

  return (
    <div className="App">
      <h1>
        Let's Check Your birthday <span role="img">🎂</span> is lucky or not
      </h1>
      <label>Enter Your birthday Date</label>
      <br />
      <input type="date" id="birthday-date" />
      <br />
      <br />
      <label>Enter your Lucky Number </label>
      <br />
      <input onChange={NumericOnly} id="lucky-number" />
      <br />
      <br />
      <button onClick={changeDateHandler}>Let Check</button>
      <br />
      <br />
      <strong id="result"></strong>
    </div>
  );
}
