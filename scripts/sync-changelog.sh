#!/bin/sh

set -eu

source_path=${1:-../conjuror/CHANGELOG.md}
target_path=content/changelog.md
temporary_path=$(mktemp)
trap 'rm -f "$temporary_path"' EXIT

if [ ! -f "$source_path" ]; then
  echo "Changelog not found: $source_path" >&2
  exit 1
fi

cat > "$temporary_path" <<'EOF'
---
title: Changelog
description: What has changed in each Conjuror release.
type: changelog
url: /changelog/
---

EOF

awk '
  /^## / && $0 != "## Unreleased" { released = 1 }
  released { print }
' "$source_path" >> "$temporary_path"

if ! grep -q '^## ' "$temporary_path"; then
  echo "No released versions found in $source_path" >&2
  exit 1
fi

mv "$temporary_path" "$target_path"
trap - EXIT
echo "Synced released versions from $source_path to $target_path"
