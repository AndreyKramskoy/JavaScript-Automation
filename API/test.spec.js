const axios = require("axios");

describe("API Test Suit", () => {

    it("GET post/1", async ()=> {
const response = await axios({
    url:"https://jsonplaceholder.typicode.com/posts/1",
    method:"get"
});
console.log(response.data);
console.log(response.status);

expect(response.data.userId).to.equal(1);
expect(response.status).to.equal(200);
    });

});