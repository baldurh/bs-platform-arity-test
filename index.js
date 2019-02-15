const Foo406 = require("./406/Foo.bs.js");
const Foo407 = require("./407/Foo.bs.js");
const Foo4018 = require("./4018/Foo.bs.js");
const Foo4019 = require("./4019/Foo.bs.js");

try {
  Foo406.bar(() => {
    console.log("** 4.0.6 **");
  });
} catch (error) {
  console.log("[bs-plaform v4.0.6 error]:", error); // Never hit
}

try {
  Foo407.bar(() => {
    console.log("** 4.0.7 **");
  });
} catch (error) {
  console.log("[bs-plaform v4.0.7 error]:", error);
}

try {
  Foo4018.bar(() => {
    console.log("** 4.0.18 **");
  });
} catch (error) {
  console.log("[bs-plaform v4.0.18 error]:", error);
}

try {
  Foo4019.bar(() => {
    console.log("** 4.0.19 **");
  });
} catch (error) {
  console.log("[bs-plaform v4.0.19 error]:", error);
}
