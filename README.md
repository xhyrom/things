<p align="center">
  <img src=".github/hammer-and-wrench.png" alt="Hammer and Wrench Emoji" width="64" height="64">
</p>

<h1 align="center">Things</h1>

<p align="center">
    <a href="https://s.xhyrom.dev/discord" alt="Discord">
        <img src="https://img.shields.io/discord/1046534628577640528?label=discord&style=for-the-badge&color=2fbfc4"/>
    </a>
    <a href="https://github.com/xHyroM/things/issues" alt="Issues">
      <img src="https://img.shields.io/github/issues/xHyroM/things?style=for-the-badge"/>
    </a>
</p>

**⚒️ Things** - monorepo for useful tools and utilities to make your life easier and reduce boilerplate code.

## Packages

<!-- START-PACKAGES-TABLE -->
| Package                                                                                                                                                                | Status                                                                                              | Description                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [![@xhyrom/colour-palette](https://img.shields.io/npm/v/@xhyrom/colour-palette?label=%40xhyrom%2Fcolour-palette&style=flat)](https://npmjs.org/@xhyrom/colour-palette) | [![stable](https://img.shields.io/badge/status-stable-brightgreen.svg?style=flat)](#status-meaning) | A colour palette (branding)                                                          |
| [![@xhyrom/configs](https://img.shields.io/npm/v/@xhyrom/configs?label=%40xhyrom%2Fconfigs&style=flat)](https://npmjs.org/@xhyrom/configs)                             | [![beta](https://img.shields.io/badge/status-beta-orange.svg?style=flat)](#status-meaning)          | Personal configurations for my projects, currently for TypeScript, Prettier and tsup |
| [![dummy](https://img.shields.io/npm/v/dummy?label=dummy&style=flat)](https://npmjs.org/dummy)                                                                         | [![wip](https://img.shields.io/badge/status-wip-red.svg?style=flat)](#status-meaning)               | This is a dummy package, it does nothing.                                            |
| [![lists](https://img.shields.io/npm/v/lists?label=lists&style=flat)](https://npmjs.org/lists)                                                                         | [![wip](https://img.shields.io/badge/status-wip-red.svg?style=flat)](#status-meaning)               | This package contains specific implementations of lists                              |
<!-- END-PACKAGES-TABLE -->

## Status meaning

| Status   | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| `stable` | Ready for production use.                                              |
| `beta`   | Ready for production use, but may contain minor bugs.                  |
| `lts `   | Long term support. Will be supported for a long time. Only fixing bugs |
| `wip`    | Work in progress. Not ready for production use.                        |

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

## Contributing

To contribute to this project, please follow the [standard Git workflow](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#The-Standard-Git-Workflow) and [CONTRIBUTING](./CONTRIBUTING.md).

1. Fork this repository
2. Create a new branch for your changes: `git checkout -b my-feature`
3. Commit your changes: `git commit -am "Add my feature"`
4. Push the branch: `git push origin my-feature`
5. Open a pull request


## License

This project is licensed under the [Apache-2.0 License](LICENSE).