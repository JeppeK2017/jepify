import React from "react";
import { useState } from "react";

export default function Jepifier() {
  var [currentString, updateString] = useState("");

  return (
    <div>
      <input
        placeholder="Insert text here"
        value={currentString}
        onChange={e => updateString(e.target.value)}
      />
      <h2>{jepify(currentString)}</h2>
    </div>
  );
}

function jepify(text) {
  var inputStringArray = text.split(" ");

  var result;

  if (inputStringArray.length > 1) {
    var firstString = inputStringArray.shift().toLowerCase();

    var camelWords = inputStringArray
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join("");

    result = "#" + firstString + camelWords + "Jep";
  } else {
    result = "#" + inputStringArray.pop().toLowerCase() + "Jep";
  }

  return result;
}
