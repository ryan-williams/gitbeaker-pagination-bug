import { Gitlab } from "@gitbeaker/rest"
const gl = new Gitlab({ token: "" })
// type defs say this returns an ExpandedGroupSchema, but for the root group it actually returns a GroupSchema[] (similar to allSubgroups)
const page = await gl.Groups.show(
    "",
    {
        page: 1,
        perPage: 5,
    }
)
console.log(`${page.length} items`)
console.log(page)
