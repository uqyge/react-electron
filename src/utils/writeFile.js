const WriteFile = (body) => {
  const fs = window.require("fs");
  const path = require("path");
  try {
    console.log("fs", body);
    console.log("path", __dirname);
    fs.writeFileSync("config.json", body, function (err) {
      if (err) return console.log(err);
      console.log("Hello World > helloworld.txt");
    });
  } catch (e) {
    console.log(e);

    alert("Failed to save the file !");
  }
};

export default WriteFile;
