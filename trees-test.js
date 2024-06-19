import { Gitlab } from "@gitbeaker/rest"
const gl = new Gitlab({ token: "" })
const page = await gl.Repositories.allRepositoryTrees(
    "hudcostreets/ctbk.dev",
    {
        pagination: "keyset",
        perPage: 5,
    }
)
console.log(`${page.length} items:`)
console.log(page)
