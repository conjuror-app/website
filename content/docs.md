---
title: Conjuror documentation
description: Everything you need to move faster on your Mac, without leaving the keyboard.
type: docs
url: /docs/
---

## Getting started

1. **Download Conjuror.** Get the latest release from the [Conjuror download page](https://github.com/conjuror-app/conjuror/releases/latest).
2. **Move it to Applications.** Put Conjuror in your Applications folder so it is easy to find and update.
3. **Press `⌥ Space`.** Show the launcher from anywhere on your Mac and start typing.

### The essentials

| Keys | Action |
| --- | --- |
| `⌥ Space` | Show or hide Conjuror |
| `↑` `↓` | Move through results |
| `←` `→` | Move through the emoji grid |
| `Return` | Open, copy, or run the selection |
| `Escape` | Clear the query, leave a mode, or close Conjuror |

### Three modes, one launcher

| Mode | How to enter it | What Return does |
| --- | --- | --- |
| Applications | Type normally | Opens the selected app or copies a calculation |
| Emoji | Start with `:` | Copies the selected emoji |
| Apple Shortcuts | Start with `>` | Runs the selected Shortcut |

## Launcher basics

Conjuror runs as a single Dockless window. Press the global keyboard shortcut to show or hide it, type a query, use the arrow keys to select a result, and press Return to act.

The default shortcut is `⌥ Space`. You can record a different shortcut in Settings. Conjuror also supports the usual text-editing shortcuts for copy, paste, cut, select all, undo, and redo while the search field is active.

The menu bar item provides quick access to Settings and Quit.

## Applications

Type part of an application name to find it. Conjuror ranks matching installed applications and gives recently launched apps more weight, so the results adapt to what you open.

Conjuror scans these locations:

- `/Applications`
- `/System/Applications`
- `/System/Applications/Utilities`
- `~/Applications`
- Application folders on mounted volumes

Use `↑` and `↓` to change the selection, then press Return or click a result to open it.

## Calculations

Calculations work directly in application mode. When Conjuror recognises a complete expression, its answer appears above matching applications. Select the answer and press Return to copy its compact value.

Plain numbers and incomplete expressions remain normal application searches.

### Arithmetic

Conjuror supports parentheses, powers, percentages, `mod`, `pi`, `e`, `sqrt`, `abs`, implicit multiplication, and word operators such as `plus`, `minus`, `times`, `divided by`, and `over`.

```text
2 plus 3 times 4
100 + 15%
20% of 50
2pi
```

Chained percentage changes compound against each intermediate result. For example, `123 + 25% + 10%` produces `169.125`. Use parentheses to apply percentages to the same source value: `123 + (25% + 10%)` produces `166.05`.

### Number bases

Convert integers between decimal, hexadecimal, octal, and binary. Use full names or `dec`, `hex`, `oct`, and `bin`.

```text
255 to hex
0o377 to binary
0xFF
-42 to hex
```

Results use the standard `0x`, `0o`, and `0b` prefixes. Negative signs appear before the prefix.

### Units

Quantity calculations support length, mass, duration, temperature, volume, and decimal or binary data units. Use `to`, `in`, `->`, or `→` to choose a target.

```text
10 km to miles
10kg + 500g
30 °C to °F
5 ft 3 in
100 lbs
```

A quantity without a target converts to a useful counterpart automatically. US customary volume units use US definitions.

### Relative dates

Use `from now` or `ago` with minutes, hours, days, weeks, months, and years. Results include the local date and time.

```text
5 days from now
1.5 hours from now
2 weeks ago
```

Minutes, hours, days, and weeks can be decimal values. Months and years must be whole numbers.

### Timezones

Convert 12-hour or 24-hour times between timezone abbreviations recognised by macOS.

```text
10:00 BST in EST
9am GMT → PDT
1:00 pm in PDT
```

If you omit the source timezone, Conjuror uses your Mac's current timezone and daylight-saving rules for the current date.

### Currencies

Currency conversion is optional and disabled by default. Enable it under **Settings → Calculator** to use ISO codes and common symbols.

```text
100 USD to EUR
$50 in GBP
20 EUR → ¥
1 CAD
```

A currency without a target converts to the currency from your regional settings. Conjuror downloads a complete rate snapshot from [Frankfurter](https://frankfurter.dev) at most once per day. Search text is never sent, the latest snapshot works offline, and disabling currency conversion removes cached rates.

## Emoji

Type `:` to open the emoji grid. Search the full Unicode catalog by name, including gender and skin-tone variants, then use all four arrow keys to navigate. Press Return or click an emoji to copy it and hide Conjuror.

When the emoji query is empty, recently copied emoji appear first. Choose a preferred skin tone under **Settings → Emoji** to apply it automatically when an emoji supports it.

## Apple Shortcuts

Type `>` to switch to Apple Shortcuts, search by name, and press Return or click a result to run it. Conjuror remembers recent runs to improve ordering.

Shortcuts that require input are currently excluded.

## Settings

Open Settings from the menu bar item or press `⌘ ,` while Conjuror is active.

- **General:** Record the global keyboard shortcut and choose between 3 and 10 visible results before scrolling.
- **Emoji:** Select the preferred skin tone applied to supported emoji.
- **Calculator:** Enable or disable optional currency conversion.
- **About:** View the installed version, GitHub repository, and licence.

General settings can be reset to their defaults from the General tab.

## Permissions

macOS asks for Automation permission the first time Conjuror accesses Shortcuts Events. Grant this permission if you want to search and run Apple Shortcuts.

Currency conversion requires network access only when it downloads a daily exchange-rate snapshot. Application search, calculations, unit conversion, date and timezone handling, and emoji search stay on your Mac.

## Requirements

Conjuror requires macOS 26 or later.
