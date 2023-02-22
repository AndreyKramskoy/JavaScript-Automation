const {
  sendRequest
} = require("../helpers/api.helper.js");
const testData = require("../config/data.json")

describe("API Test Suit", () => {

    it("GET post/1", async ()=> {
const response = await sendRequest("posts/1");

console.log(response.data);
console.log(response.status);

expect(response.data.userId).to.equal(1);
expect(response.status).to.equal(200);
});

    it("POST post", async ()=> {
        const response = await sendRequest("posts", {
                title: 'Hello',
                body: 'bar',
                userId: 1,
              }, "post");

              console.log(response.data);
              console.log(response.status);
      
              expect(response.status).to.equal(201);     
        });
        


it("PUT post", async ()=> {
  const response = await sendRequest("posts", testData, "put");

          console.log(response.data);
          console.log(response.status);
      
          expect(response.status).to.equal(201);     
    });
    
    
});

