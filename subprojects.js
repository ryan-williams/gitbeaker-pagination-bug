import { Gitlab } from "@gitbeaker/rest"
const gl = new Gitlab({ token: "" })
const page = await gl.Groups.allProjects(
    "runsascoded/rc",
    {
        pagination: "keyset",
        perPage: 50,
    }
)
console.log(`${page.length} items`)
