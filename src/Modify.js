import React from "react";
import { useState } from "react";
import "./styles.css";
function Modify() {
  const [value1, setValue1] = useState(" ");
  const [value2, setValue2] = useState(" ");
  const numbers1 = [2000, 500, 100, 20, 10, 5, 1];
  const numbers2 = [];
  const noOfNotes = document.querySelectorAll(".no-of-notes");
  function Answer1(e) {
    var a = e.target.value;
    setValue1(a);
  }

  function Answer2(e) {
    var b = e.target.value;
    setValue2(b);
  }

  function Change() {
    if (value1 > 0) {
      var c = value2 - value1;
      if (c > 0) {
        for (var i = 0; i <= 6; i++) {
          var z = Math.trunc(c / numbers1[i]);
          c = c % numbers1[i];

          numbers2[i] = z;
          noOfNotes[i].innerText = z;
        }
      } else {
        alert("Do you gona wash plates");
      }
    } else {
      alert("Invalid Bill ");
    }
  }

  return (
    <div id="aaa">
      <h1> Cash Register Manager </h1>
      <br />

      <h4>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </h4>
      <br />
      <label> Bill Amount : </label>
      <input
        placeholder="Enter Bill amount"
        size="20"
        id="111"
        onChange={Answer1}
      />
      <br />
      <br />
      <label> Cash given : </label>
      <input
        placeholder="Enter Bill amount"
        size="20"
        id="111"
        onChange={Answer2}
      />
      <br />
      <br />
      <button onClick={Change}>Change</button>
      <br />
      <br />
      <br />
      <br />
      <table class="change-table">
        <tr style={{ border: "2px solid black" }}>
          <th>No of Notes</th>
          <td class="no-of-notes"></td>
          <td class="no-of-notes"></td>
          <td class="no-of-notes"></td>
          <td class="no-of-notes"></td>
          <td class="no-of-notes"></td>
          <td class="no-of-notes"></td>
          <td class="no-of-notes"></td>
        </tr>
        <tr>
          <th>Note</th>
          <td>2000</td>
          <td>500</td>
          <td>100</td>
          <td>20</td>
          <td>10</td>
          <td>5</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
}
export default Modify;
