exports.config = {
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://www.saucedemo.com",
      show: true,
      browser: "chromium",
    },
  },
  include: {
    I: "./steps_file.js",
    loginPage: "./pages/loginPage",
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: ["./step_definitions/steps.js", "./step_definitions/loginSteps.js"],
  },
  plugins: {
    allure: {},
    screenshotOnFail: {
      enabled: true,
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
  },
  tests: "./*_test.js",
  name: "framework-for-web",
};
