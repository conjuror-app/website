# Conjuror website

Product website for [Conjuror](https://github.com/conjuror-app/conjuror), built with Hugo.

```sh
hugo server
```

The generated site is written to `public/` by `hugo --minify`.

## Changelog

The app repository's `CHANGELOG.md` is the source of truth. To publish its released versions on the website, run:

```sh
./scripts/sync-changelog.sh
```

The script reads `../conjuror/CHANGELOG.md` by default, omits the `Unreleased` section, and updates `content/changelog.md`. Pass a different source path as its first argument when needed.
