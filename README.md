# gitbeaker-pagination-bug

See [.github/workflows/test.yml]:
```bash
npm i
node trees-test.js
```

[trees-test.js] asks for 5 items (from [hudcostreets/ctbk.dev]) and `keyset` pagination:

```js
await gl.Repositories.allRepositoryTrees(
    "hudcostreets/ctbk.dev",
    {
        pagination: "keyset",
        perPage: 5,
    }
)
```

but it receives 22 items, and no pagination info:

<details><summary>Output</summary>

```
22 items:
[
  {
    id: '3feefd8ee63849b372cb325a0c0a70f8ec863935',
    name: '.dvc',
    type: 'tree',
    path: '.dvc',
    mode: '040000'
  },
  {
    id: '581dbbc53f025cb4e8ae2ce4c3c648948f1708e3',
    name: '.github',
    type: 'tree',
    path: '.github',
    mode: '040000'
  },
  {
    id: '66295ee9c29a49c56eb90e0bfbc5213b68142373',
    name: 'ctbk',
    type: 'tree',
    path: 'ctbk',
    mode: '040000'
  },
  {
    id: '6214e20c859027bfb504edaa6d6e341e1059fb1e',
    name: 'nbs',
    type: 'tree',
    path: 'nbs',
    mode: '040000'
  },
  {
    id: '22dad0a89a0e5d62cdf76b781703da077df5def3',
    name: 's3',
    type: 'tree',
    path: 's3',
    mode: '040000'
  },
  {
    id: '7491f1271e7df6a3f87149eb871cbccfa7b7343a',
    name: 'www',
    type: 'tree',
    path: 'www',
    mode: '040000'
  },
  {
    id: '51973055237895f2d23e65e015793fd302f4b9da',
    name: '.dvcignore',
    type: 'blob',
    path: '.dvcignore',
    mode: '100644'
  },
  {
    id: 'b3c5972eccadf4300448d121ca6984849903814f',
    name: '.gitignore',
    type: 'blob',
    path: '.gitignore',
    mode: '100644'
  },
  {
    id: '53e104e0a9be0f25d708c3f7fe36a780e3e89ad1',
    name: 'README.md',
    type: 'blob',
    path: 'README.md',
    mode: '100644'
  },
  {
    id: 'a14ee80b864271a4a7fd4261605684be31d810c6',
    name: 'favicon.ico',
    type: 'blob',
    path: 'favicon.ico',
    mode: '100644'
  },
  {
    id: '1eed2659cb981829c6fc1f4be776e2b6ca8c41e7',
    name: 'gender-percents-minutes.png',
    type: 'blob',
    path: 'gender-percents-minutes.png',
    mode: '100644'
  },
  {
    id: 'c702a94683c4c8a2ef60134cb08daa29167586e2',
    name: 'gsmo.yml',
    type: 'blob',
    path: 'gsmo.yml',
    mode: '100644'
  },
  {
    id: '16d74645a5d9895ebf175bd114cfaa18e2ae7968',
    name: 'index.html',
    type: 'blob',
    path: 'index.html',
    mode: '100644'
  },
  {
    id: '788b09b90a97134fe1654d6fb49e81708e7b509c',
    name: 'jc_monthly.png',
    type: 'blob',
    path: 'jc_monthly.png',
    mode: '100644'
  },
  {
    id: 'a9cef57ddf0dd23298a219130b8943803b1b36bc',
    name: 'jc_monthly.svg',
    type: 'blob',
    path: 'jc_monthly.svg',
    mode: '100644'
  },
  {
    id: 'a5406197aa86a145fc9b7bbae2f130463649d834',
    name: 'month_counts.parquet',
    type: 'blob',
    path: 'month_counts.parquet',
    mode: '100644'
  },
  {
    id: '9cb26eb3eca2b278307dcf1d919699abeecfb7d3',
    name: 'requirements.txt',
    type: 'blob',
    path: 'requirements.txt',
    mode: '100644'
  },
  {
    id: '9bff0e00f7c3fe9a944339f290cb9c524e9e25cc',
    name: 'runtime.txt',
    type: 'blob',
    path: 'runtime.txt',
    mode: '100644'
  },
  {
    id: 'd2b36aa3e7a056fb668556d9df4c73792c4f19d5',
    name: 'send_email.py',
    type: 'blob',
    path: 'send_email.py',
    mode: '100644'
  },
  {
    id: '49dba5686feb3bc1ffc5070ab5eedd8e91a78070',
    name: 'setup.py',
    type: 'blob',
    path: 'setup.py',
    mode: '100644'
  },
  {
    id: '46f17eaed5415727c0f76063b8fbee97ef2fedeb',
    name: 'sync.sh',
    type: 'blob',
    path: 'sync.sh',
    mode: '100755'
  },
  {
    id: '43455a09c93bc088bae667137c2654b4d74fee77',
    name: 'year-month-region-gender-weekday.parquet',
    type: 'blob',
    path: 'year-month-region-gender-weekday.parquet',
    mode: '100644'
  }
]
```
</details>

[.github/workflows/test.yml]: .github/workflows/test.yml
[trees-test.js]: trees-test.js
[hudcostreets/ctbk.dev]: https://gitlab.com/hudcostreets/ctbk.dev
