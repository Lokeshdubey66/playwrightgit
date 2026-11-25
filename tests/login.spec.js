import {test} from "@playwright/test"
test("title",async({page})=>{
     await page.goto("https://playwright.dev/docs/intro")
})