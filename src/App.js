import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ActionList from "./component/actionsList";
import Board from "./component/board";
import PropertyWindow from "./component/propertyWindow";

import Music from "./actions/music";
import Web from "./actions/web";

import WriteFile from "./utils/writeFile";

function App() {
  const [selected, setSelected] = useState("");
  const [keyDict, setKeyDict] = useState("");
  const [paramDict, setParamDict] = useState("");

  function handleClick(evt) {
    setSelected(evt);
  }

  function setKey(evt) {
    if (keyDict.length > 0) {
      const result = keyDict.filter(
        (i) => Object.keys(i)[0] !== Object.keys(evt)[0]
      );
      setKeyDict([...result, evt]);
    } else {
      setKeyDict([...keyDict, evt]);
    }
  }

  function setParam(evt) {
    if (paramDict.length > 0) {
      const result = paramDict.filter(
        (i) => Object.keys(i)[0] !== Object.keys(evt)[0]
      );
      setParamDict([...result, evt]);
    } else {
      setParamDict([...paramDict, evt]);
    }
  }

  const actionMap = {
    Music: <Music />,
    Web: <Web selected={selected} setParam={setParam} paramDict={paramDict} />,
  };

  return (
    <div className="grid-container">
      <div className="Actions-list">
        <ActionList></ActionList>
      </div>
      <div className="board">
        <Board handleKeySelect={handleClick} setKey={setKey}></Board>
      </div>
      <div className="property">
        <h1
          onClick={() => {
            console.log("kd", keyDict);
            console.log("pd", paramDict);
            WriteFile(JSON.stringify(paramDict));
          }}
        >
          PropertyWindow
        </h1>
        <h1>{JSON.stringify(paramDict)}</h1>
        {/* <PropertyWindow selected={selected} setParam={setParam}> */}
        <PropertyWindow>
          <div>{Object.keys(selected)}</div>
          {actionMap[Object.values(selected)]}
        </PropertyWindow>
      </div>
    </div>
  );
}

export default App;
