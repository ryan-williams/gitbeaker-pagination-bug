# GitBeaker top-level groups issue

See [gitbeaker#3602]:
- Various "all" APIs (`allRepositoryTrees`, `allSubprojects`) automatically iterate through pages of results returned by GitLab, returning a full array to the user
- Fetching top-level groups can only be done using `Groups.show`, but the declared returned type (and input pagination options) are incorrect. 

See [root-group.js]:
```js
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
```

[gitbeaker#3602]: https://github.com/jdalrymple/gitbeaker/issues/3602
[root-group.js]: root-group.js
[.github/workflows/test.yml]: .github/workflows/test.yml
