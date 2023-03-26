const PORT = 4004;
const App = require("./app");

App.listen(PORT, () =>
  console.log(`Server listing in http://localhost:${PORT}`)
);
