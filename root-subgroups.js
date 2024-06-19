import { Gitlab } from "@gitbeaker/rest"
const gl = new Gitlab({ token: "" })
// Attempting to fetch subgroups of the root group fails
const page = await gl.Groups.allSubgroups(
    "",
    {
        perPage: 100,
    }
)
console.log(`${page.length} items`)
