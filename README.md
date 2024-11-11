# action-restrict-pr-label

[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/praha-inc/action-restrict-pr-label/blob/main/LICENSE)
[![Github](https://img.shields.io/github/followers/praha-inc?label=Follow&logo=github&style=social)](https://github.com/orgs/praha-inc/followers)

Restrict pull request labels based on the combination of the base and head branches.

## 👏 Getting Started

Create a workflow file under ```.github/workflows``` directory.

```yaml
name: Restrict pr label
on:
  pull_request_target:
    types: [opened, edited, synchronize]

jobs:
  restrict-pr-label:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
    steps:
      - uses: praha-inc/action-restrict-pr-label@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          rules: |
            main <- staging [release] [production]
            staging <- development [release] [staging]
            development <- feature/* [feature]
            development <- bugfix/* [bugfix]
            development <- refactor/* [refactor]
            development <- chore/* [chore]
            development <- deps/* [deps]
```

## 🔧 Configurations

### `rules`

A list of rules that restrict labels for pull requests based on the combination of base and head branches.

Each rule is a list of branch patterns separated by `<-` and label names enclosed in `[]`.

If you want to add a release label when you submit a PR from the development branch to the main branch, configure as follows.

```yaml
rules: |
  main <- development [release]
```

Multiple label names can be specified, separated by spaces.

```yaml
rules: |
  main <- development [release] [production]
```

You can also use Glob to specify the branch name.

[Minimatch](https://github.com/isaacs/minimatch) is used for the matching process.

If you want to add a feature label when submitting a PR from a feature branch to a development branch, configure as follows

```yaml
rules: |
  development <- feature/* [feature]
```

Also, multiple rules can be specified by adding a new line as shown below.

```yaml
rules: |
  main <- development [release]
  development <- feature/* [feature]
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/praha-inc/action-restrict-pr-label/issues) if you want to contribute.

## 📝 License

Copyright © 2024 [PrAha](https://www.praha-inc.com/).

This project is [```MIT```](https://github.com/praha-inc/action-restrict-pr-label/blob/main/LICENSE) licensed.
