import * as empl from "../../../src/api/empl"
// @ponicode
describe("empl.empl.getAll", () => {
    test("0", async () => {
        await empl.empl.getAll()
    })
})

// @ponicode
describe("empl.empl.update", () => {
    test("0", async () => {
        await empl.empl.update({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", name: "Jean-Philippe", role: empl.Roles.write, email: "something.example.com", createdAt: "da7588892" })
    })

    test("1", async () => {
        await empl.empl.update({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", name: "Pierre Edouard", role: empl.Roles.read, email: "something.example.com", createdAt: "da7588892" })
    })

    test("2", async () => {
        await empl.empl.update({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", name: "Jean-Philippe", role: empl.Roles.read, email: "ponicode.com", createdAt: "12345" })
    })

    test("3", async () => {
        await empl.empl.update({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", name: "Edmond", role: empl.Roles.amin, email: "user@host:300", createdAt: "bc23a9d531064583ace8f67dad60f6bb" })
    })

    test("4", async () => {
        await empl.empl.update({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", name: "Jean-Philippe", role: empl.Roles.write, email: "ponicode.com", createdAt: "12345" })
    })

    test("5", async () => {
        await empl.empl.update({ id: "", name: "", role: empl.Roles.read, email: "", createdAt: "" })
    })
})
