import request from "supertest";
import app from "./index.js"

var id = 1

describe("Articles", () => {

    describe("GET /articles", () => {
        it("article get", (done) => {
            request(app)
            .get('/articles')
            .expect(200, done)
        })
    })
})