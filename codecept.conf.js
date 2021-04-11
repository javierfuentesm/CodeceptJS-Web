exports.config = {
	output: './output',
	helpers: {
		Playwright: {
			url: 'https://www.saucedemo.com',
			show: true,
			browser: 'chromium',
		},
		Mochawesome: {
			uniqueScreenshotNames: 'true',
		},
	},
	include: {
		I: './steps_file.js',
		loginPage: './pages/loginPage',
	},
	mocha: {
		reporterOptions: {
			'mocha-junit-reporter': {
				stdout: './output/console.log',
				options: {
					mochaFile: './output/result.xml',
					attachments: true, //add screenshot for a failed test
				},
			},
		},
	},
	bootstrap: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './features/*.feature',
		steps: ['./step_definitions/steps.js', './step_definitions/loginSteps.js'],
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
		stepByStepReport: {
			enabled: false,
			screenshotsForAllureReport: true,
		},
	},
	tests: './tests/*_test.js',
	name: 'framework-for-web',
}
