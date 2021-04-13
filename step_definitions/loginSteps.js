const { I, loginPage } = inject()


Given(/^I am in the right page$/, function () {
	I.amOnPage('/')
})

Given(/^I fill my username and password$/, function () {
	loginPage.fillTheFields()
})

Then(/^I should see the main screen$/, function () {
	loginPage.validateMainScreen()
})
