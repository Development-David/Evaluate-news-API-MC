// import { handleSubmit } from "../src/client/js/formHandler"
import { getData } from "../src/client/js/formHandler"

describe("Testing the submit", () => {
  test("Testing getdata() ", () => {
    return getData("https://api.meaningcloud.com/sentiment-2.1?key=","").then(data => {
      expect(data.status).toEqual(false)
    })
  })
})
