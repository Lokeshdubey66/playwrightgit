import {test} from "@playwright/test"
test("title",async({page})=>{
     await page.goto("https://playwright.dev/docs/intro")
     await page.waitForTimeout(5000)
      await page.goto("https://www.youtube.com/")
       await page.waitForTimeout(6000)  
})  