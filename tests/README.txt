These are automated tests to site
To run them, in terminal get to the location of project and run:

npx playwright test (run all tests)
npx playwright test "NameOfFile" (run specific test)
npx playwright test --headed (run in headed mode)
npx playwright test --project webkit/chromium/firefox (run specific browsers)

you can run different parameters at once:
npx playwright test login.spec.js --headed --project chromium

To see more commands go to https://playwright.dev/docs/running-tests