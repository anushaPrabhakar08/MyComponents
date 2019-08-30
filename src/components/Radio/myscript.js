import React, { Component } from "react";

function myscript(url) {
  debugger;
  var script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    //IE
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
      }
    };
  } else {
    //Others
    alert("hello");
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
  return <div>kkk</div>;
}

export default myscript;
