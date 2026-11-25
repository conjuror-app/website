---
title: Conjuror documentation
browserTitle: Documentation
description: Everything you need to move faster on your Mac, without leaving the keyboard.
type: docs
url: /docs/
---

## Getting started

### Install with Homebrew

Install the latest alpha from the [Conjuror Homebrew tap](https://github.com/conjuror-app/homebrew-tap):

```sh
brew install conjuror-app/tap/conjuror@alpha
```

Homebrew installs Conjuror in your Applications folder. To install a newer alpha when one is available, run:

```sh
brew upgrade conjuror-app/tap/conjuror@alpha
```

### Install manually

1. **Download Conjuror.** Get the free alpha from the [Conjuror download section](/#download).
2. **Open the ZIP file.** Double-click the downloaded archive to extract Conjuror.
3. **Move it to Applications.** Put Conjuror in your Applications folder, then open it.

After installing with either method, open Conjuror and press `⌥ + Space` to show the launcher from anywhere on your Mac.

### The essentials

| Keys | Action |
| --- | --- |
| `⌥ + Space` | Show or hide Conjuror |
| `↑` `↓` | Move through results |
| `←` `→` | Move through the emoji grid |
| `Tab` | Cycle through the launcher modes |
| `Return` | Open, paste, copy, or run the selection |
| `⌘ + Return` | Reveal the selected app or file in Finder, or copy the selected emoji or clipboard item |
| `⌥ + Return` | Search the web for the query |
| `Escape` | Clear the query, or close Conjuror when the query is empty |

### Seven modes, one launcher

| Mode | How to enter it | What Return does |
| --- | --- | --- |
| Applications | Type normally, or start with `;` from another mode | Opens the selected app, quicklink, or System Settings section, runs a system command, or copies a calculation |
| Apple Shortcuts | Start with `>` | Runs the selected Shortcut |
| Emoji | Start with `:` | Pastes the selected emoji into the app you were using |
| Clipboard history | Start with `#` | Pastes the selected item into the app you were using |
| Files | Start with `/` | Opens the selected file or folder |
| Running apps | Start with `@` | Switches to the selected app |
| System commands | Start with `!` | Runs the selected command |

Press `Tab` to cycle through Applications, Apple Shortcuts, Emoji, Clipboard history, Files, Running apps, and System commands. Modes you have turned off in Settings are skipped, and clipboard history is off until you turn it on. You can also type a mode prefix at any time: `;` for Applications, `>` for Apple Shortcuts, `:` for Emoji, `#` for Clipboard history, `/` for Files, `@` for Running apps, or `!` for System commands. The prefix is removed from the search query.

Pasting needs Accessibility access. Until you allow it, Return copies the emoji or clipboard item instead.

## Launcher basics

Press `⌥ + Space` to show Conjuror, then start typing. Use the arrow keys to select a result and press Return to open, paste, copy, or run it. Conjuror hides after completing the action. After pasting or copying an emoji, clipboard item, or calculation result, or running a Shortcut, focus returns to the app you were using before opening Conjuror.

Closing the launcher with Escape or its hotkey also returns focus to the previous app. If the query is not empty, press Escape once to clear it and again to close the launcher.

Press `⌘ + Return` to reveal the selected app or file in Finder instead of opening it, or to copy the selected emoji or clipboard item without pasting. Holding Return down does not repeat the action.

To change the main shortcut, open **Settings → Apps** and record a new key combination. Apple Shortcuts, Emoji, Clipboard, and Files each have a shortcut in their own Settings pane. Their defaults are `⌥ + ⇧ + Space`, `⌥ + ⇧ + E`, `⌥ + ⇧ + V`, and `⌘ + ⇧ + F`. The Clipboard shortcut only works while clipboard history is on.

A mode shortcut can also be a tap of `fn` (🌐) on its own. This needs Accessibility access. macOS can also act on the 🌐 key, so Settings shows a warning until **Press 🌐 key to** is set to **Do Nothing** under **System Settings → Keyboard**. If a shortcut cannot be registered, for example `fn` before you allow Accessibility access, Conjuror tries again each time it becomes active.

To change how the launcher looks, open **Settings → General** and choose **Launcher appearance**. Standard is the default. Minimal uses tighter spacing and smaller result rows, and hides the footer. Command Bar shows keyboard hints for the available actions, and previews the selected file or clipboard item beside the results.

{{< docs-screenshot src="/images/screenshots/command-mode-files.webp" alt="Conjuror in Command Bar appearance searching files for “Four Against”, showing a side-by-side preview of the selected PDF and keyboard hints for Open item and Reveal" caption="Command Bar appearance adds keyboard hints and a side-by-side preview in Files and Clipboard modes." >}}

While the search field is active, you can use the standard shortcuts for copy, paste, cut, select all, undo, and redo.

Use the menu bar item to open Settings or quit Conjuror.

## Applications

Start typing any part of an application’s name. Conjuror searches your installed apps, including user-facing menu bar apps such as Keychain Access and Passwords, and uses recent launches to order similarly matched results. The results update when app folders change.

When Conjuror finds separate installations of the same app, it lists each one. It uses the app filename, and sometimes its folder, to distinguish copies with the same name.

Use `↑` and `↓` to select an app, then press Return or click the result to open it. Background-only apps, embedded helpers, and Conjuror itself do not appear in the results.

Applications mode also includes sections from System Settings. Search for a section such as `Bluetooth`, `Displays`, or `Software Update`, then open it to go directly to that pane. These results are on by default; turn off **System Settings results** under **Settings → Apps** if you only want applications.

### Aliases and hotkeys

Give an app a short alias to rank it first. For example, with the alias `vs` for Visual Studio Code, typing `vs` puts Visual Studio Code at the top of the results. Typing the start of an alias also finds the app, and the alias appears next to the app in results.

An app hotkey opens the app from anywhere, or switches to it if it is already running. Press the hotkey again while the app is in front to hide it. App hotkeys work without opening the launcher.

{{< docs-screenshot src="/images/screenshots/alias.webp" alt="Conjuror showing Helium first for the query “bro”, with its alias “browser” next to the result" caption="Typing the start of an alias ranks its app first and shows the alias beside it." >}}

To add an alias or hotkey, open **Settings → Apps**, choose **Aliases & Hotkeys**, then click **Add…** and pick an app. Aliases and hotkeys follow an app if you move it, as long as only one copy is installed. If a hotkey cannot be registered, for example because another app already uses it, your other hotkeys keep working.

### Excluded apps

To hide an app from search and recent results, open **Settings → Apps**, choose **Excluded**, then click **Add…** and pick the app. Exclusions match the app’s location, so exclude it again if you move it. An excluded app’s alias stops working, but its hotkey still works.

{{< docs-screenshot src="/images/screenshots/settings-apps.webp" alt="Conjuror Apps settings showing the main keyboard shortcut, System Settings results and System commands toggles, and the Aliases & Hotkeys and Excluded lists" caption="Apps settings control the main launcher shortcut, System Settings results, system commands, app aliases and hotkeys, and excluded apps." >}}

## Quicklinks and web search

A quicklink opens a URL from the launcher. Type its keyword followed by search text, such as `gh swift testing`, to search GitHub for “swift testing”. Typing part of a quicklink’s name also finds it, listed after matching apps. If you press Return on a keyword with nothing after it, Conjuror fills in the keyword so you can keep typing.

{{< docs-screenshot src="/images/screenshots/quicklink.webp" alt="Conjuror showing the GitHub quicklink for “gh swift testing” and a Kagi web search row" caption="The GitHub quicklink searches for the text after its keyword. The last row searches the web." >}}

Conjuror includes Google (`g`), DuckDuckGo (`ddg`), GitHub (`gh`), and Wikipedia (`wiki`). Add, edit, or remove quicklinks under **Settings → Quicklinks**. Put `{query}` in the URL where the search text should go, as in `https://kagi.com/search?q={query}`. A URL without `{query}` opens as it is. Each quicklink opens in the default app for its URL unless you choose a different app. **Restore Built-ins** brings back any of the four built-in quicklinks you have removed.

The last row in application results searches the web for your query. Select it and press Return, or press `⌥ + Return` from any row. DuckDuckGo is the default search engine. Choose a different quicklink, or **None** to remove the row, under **Web search fallback** in **Settings → Quicklinks**.

Your search text is only sent to a site when you open one of its quicklinks or a web search.

{{< docs-screenshot src="/images/screenshots/settings-quicklinks.webp" alt="Conjuror Quicklinks settings showing Kagi as the web search fallback and the GitHub, Wikipedia, and Kagi quicklinks" caption="Manage quicklinks and choose the web search fallback from Settings → Quicklinks." >}}

## Running apps

Type `@` to list running apps, then press Return to switch to one. Excluded apps do not appear.

| Keys | Action |
| --- | --- |
| `⌘ + H` | Hide the app |
| `⌥ + ⌘ + H` | Hide other apps and switch to this one |
| `⌘ + ⌫` | Quit the app |
| `⌥ + ⌘ + ⌫` | Force quit the app |
| `⌘ + R` | Quit and reopen the app |
| `⇧ + ⌘ + ⌫` | Quit every listed app except Finder |
| `⌘ + Return` | Reveal the app in Finder |

Force quitting and quitting every app ask first: press Return to confirm or Escape to cancel. Apps you hide stay hidden when the launcher closes.

{{< docs-screenshot src="/images/screenshots/running-confirm.webp" alt="Conjuror in Running apps mode asking to confirm force quitting Rex, with Cancel and Force Quit buttons" caption="Force quit asks for confirmation before it runs." >}}

## System commands

Type a command’s name, such as `lock`, `sleep`, or `empty trash`, and it appears alongside your apps. Type `!` to list every command:

- Lock Screen
- Sleep
- Sleep Displays
- Start Screen Saver
- Show Desktop
- Toggle Dark Mode
- Eject All Disks
- Empty Trash
- Log Out
- Restart
- Shut Down

Empty Trash and Eject All Disks wait for a second Return before they run; press Escape to cancel. Log Out, Restart, and Shut Down show the standard macOS confirmation.

{{< docs-screenshot src="/images/screenshots/confirm.webp" alt="Conjuror showing Empty Trash selected with the prompt “Empty Trash now? Press Return again”" caption="Empty Trash waits for a second Return." >}}

To remove system commands from the launcher, turn off **System commands** under **Settings → Apps**.

## Files and folders

Type `/` to switch to Files mode, then enter at least two characters from a file or folder name. Each query word is matched independently, and its letters only have to appear in order: a short query such as `qtr rpt` can find “Quarterly Report”. Exact names and prefixes rank ahead of looser fuzzy matches. Multi-word and acronym searches use the same ranking as application search. For example, `qr` can match “Quarterly Report”.

Conjuror searches items indexed by Spotlight that macOS allows it to access. Hidden items do not appear.

Use `↑` and `↓` to select a result, then press Return or click it. Files open in their default app; folders open in Finder. Search stays on your Mac.

If a file cannot be opened, the results remain visible alongside the error. Closing and reopening the launcher restores the file search and its error.

Desktop, Documents, Downloads, and iCloud Drive are protected by macOS. Conjuror requests access when you first run a file search. You can also open **Settings → Files**, choose **Grant Access**, and approve the prompts for any of those folders you want included in results.

Use `⌘ + ⇧ + F` to open Conjuror directly in Files mode. You can turn this shortcut off or record a different key combination under **Settings → Files**.

To remove Files mode from the launcher, turn off **Files** in the same Settings pane.

{{< docs-screenshot src="/images/screenshots/settings-files.webp" alt="Conjuror Files settings showing Files enabled, the direct keyboard shortcut, and protected-folder access including iCloud Drive" caption="Enable file search, configure its shortcut, and grant protected-folder access from Settings → Files." >}}

## Calculations

Type a calculation while you’re in Applications mode. When Conjuror has an answer, it appears above the application results. Select it and press Return, or click it, to copy the answer and close the launcher.

A plain decimal number on its own or an unfinished expression remains an application search.

### Arithmetic

Enter arithmetic with symbols or words. Conjuror supports parentheses, powers, percentages, `mod`, `pi`, `e`, `sqrt`, `abs`, implicit multiplication, and operators such as `plus`, `minus`, `times`, `divided by`, and `over`.

```text
2 plus 3 times 4
100 + 15%
20% of 50
2pi
```

Percentage changes apply in sequence, so `123 + 25% + 10%` produces `169.125`. To apply both percentages to the original value, group them with parentheses: `123 + (25% + 10%)` produces `166.05`.

### Number bases

Use `to`, `in`, `->`, or `→` to convert an integer between decimal, hexadecimal, octal, and binary. You can use the full base names or shorten them to `dec`, `hex`, `oct`, and `bin`.

```text
255 to hex
0o377 to binary
0xFF
-42 to hex
```

Hexadecimal, octal, and binary answers use the standard `0x`, `0o`, and `0b` prefixes. For negative values, the minus sign appears before the prefix.

### Units

Use `to`, `in`, `->`, or `→` to convert a quantity to a specific unit. You can also add or subtract compatible units and enter composite quantities such as `5 ft 3 in`. Conjuror supports length, mass, duration, temperature, volume, and decimal or binary data units.

```text
10 km to miles
10kg + 500g
30 °C to °F
5 ft 3 in
100 lbs
90 days in months
2 years in days
```

If you omit the target unit, Conjuror chooses a common counterpart. For example, it converts pounds to kilograms, centimetres to inches, miles to kilometres, or bare days to weeks (such as `1000 days`). US customary volume units use US definitions.

Duration conversions support seconds, minutes, hours, days, weeks, months, and years, using fixed average durations (365.25 days per year and 30.4375 days per month) rather than calendar intervals. Results use unit symbols such as `wk`, `mo`, and `yr`.

### Relative dates

Enter a duration followed by `from now` or `ago`, or add it to or subtract it from `now`, to calculate a relative date. You can use seconds, minutes, hours, days, weeks, months, or years. The answer includes the resulting local date and time.

```text
5 days from now
1.5 hours from now
2 weeks ago
now + 90 seconds
now - 3 months
```

You can use decimal values for seconds, minutes, hours, days, and weeks. Use whole numbers for months and years.

### Dates

Subtract one date from another to find the time between them. The answer is in days unless you add `in` and a unit such as `weeks`, `months`, or `years`. You can also add a duration to, or subtract one from, a typed date. Use `now`, `today`, `tomorrow`, `yesterday`, or a date such as `1 aug 2025` or `2025-01-01`.

```text
now - 1 aug 2025 in days
today - 1 jan 1990 in years
1 aug 2025 + 30 days
```

### Timezones

Enter a 12-hour or 24-hour time and use `to`, `in`, `->`, or `→` to convert it between timezone abbreviations recognised by macOS.

```text
10:00 BST in EST
9am GMT → PDT
1:00 pm in PDT
```

If you omit the source timezone, Conjuror starts from your Mac’s current timezone and applies its daylight-saving rules for the current date.

### Currencies

To convert currencies, first enable **Currency conversion** under **Settings → Calculator**. You can then enter ISO currency codes or common symbols and use `to`, `in`, `->`, or `→` to choose the target currency.

```text
100 USD to EUR
$50 in GBP
20 EUR → ¥
1 CAD
500*21 GBP in USD
500*21 in GBP in USD
```

You can use arithmetic in the amount. To name the source currency after the arithmetic, add it with a connector before the target currency, as in `500*21 in GBP in USD`.

If you omit the target currency, Conjuror uses the currency from your regional settings. It downloads a complete rate snapshot from [Frankfurter](https://frankfurter.dev) daily after a successful refresh; failed requests may be retried sooner. Your search text is never sent. The latest snapshot remains available offline, and disabling currency conversion removes the cached rates.

{{< docs-screenshot src="/images/screenshots/settings-calculator.webp" alt="Conjuror Calculator settings showing the optional Currency conversion toggle enabled" caption="Turn optional daily exchange-rate downloads on or off from Settings → Calculator." >}}

## Emoji

Type `:` to switch to Emoji mode, then search by emoji name or common keyword. For example, `lol` finds 😂 even though the word is not part of its Unicode name. Results include gender and skin-tone variants from the latest Unicode catalog.

Use all four arrow keys to move through the grid. Press Return, or click an emoji, to paste it into the app you were using and close the launcher. Pasting needs Accessibility access; until you allow it, Return copies the emoji instead. Press `⌘ + Return` to copy the emoji without pasting.

Leave the search empty to see recently used emoji first. To apply the same skin tone to supported emoji automatically, choose one under **Settings → Emoji**. Searching for a specific skin tone shows that variant instead.

To remove Emoji mode from the launcher, turn it off under **Settings → Emoji**.

{{< docs-screenshot src="/images/screenshots/settings-emoji.webp" alt="Conjuror Emoji settings showing Emoji enabled, the fn keyboard shortcut, and Light selected as the preferred skin tone" caption="Turn Emoji mode on or off, set its shortcut, and pick a default skin tone from Settings → Emoji." >}}

## Clipboard history

Clipboard history is off by default. Turn it on under **Settings → Clipboard**, then type `#` or press `⌥ + ⇧ + V` to search text you have copied. Your most recent items come first, and each one shows the app it came from and how long ago you copied it.

{{< docs-screenshot src="/images/screenshots/clipboard.webp" alt="Conjuror in Clipboard history mode listing recent text copies with their source app and age" caption="Clipboard history lists recent copies alongside the app they came from and when you copied them." >}}

Press Return, or click an item, to paste it into the app you were using. Pasting needs Accessibility access; until you allow it, Return copies the item instead. Press `⌘ + Return` to copy an item without pasting, or `⌃ + X` to remove it from your history.

{{< docs-screenshot src="/images/screenshots/command-mode-clipboard.webp" alt="Conjuror in Command Bar appearance showing Clipboard history with a side-by-side text preview, source, character count, and Paste and Copy keyboard hints" caption="In Command Bar appearance, Clipboard history previews the selected copy beside the list." >}}

Conjuror keeps plain text only. It skips text copied from password managers such as 1Password, Bitwarden, KeePassXC, Keychain Access, and Passwords, and anything an app marks as concealed or temporary. macOS may ask whether Conjuror can paste from other apps the first time it reads text you copied elsewhere.

Under **Keep history for**, choose 1 day, 7 days, 30 days, 3 months, or forever. The default is 30 days, and Conjuror keeps up to 1,000 items. **Clear History…** deletes every item, and turning clipboard history off deletes it too. Your history stays on your Mac.

{{< docs-screenshot src="/images/screenshots/settings-clipboard.webp" alt="Conjuror Clipboard settings showing clipboard history enabled, the ⌥⇧V keyboard shortcut, Paste into apps allowed, 30 Days retention, and Clear History" caption="Enable clipboard history, check paste access, and manage retention from Settings → Clipboard." >}}

## Apple Shortcuts

Type `>` to switch to Apple Shortcuts mode, then search by name or subtitle. Use `↑` and `↓` to select a Shortcut, then press Return, or click the result, to run it.

Recently run Shortcuts appear first when the search is empty and can rank higher among similar matches. Shortcuts that require input do not appear in the results.

Conjuror refreshes your Shortcuts each time you open Apple Shortcuts mode. Your existing list stays searchable while it refreshes. To remove Apple Shortcuts mode from the launcher, turn it off under **Settings → Shortcuts**.

{{< docs-screenshot src="/images/screenshots/settings-shortcuts.webp" alt="Conjuror Shortcuts settings showing Apple Shortcuts enabled and the ⌥⇧Space keyboard shortcut" caption="Turn Apple Shortcuts mode on or off and set its shortcut from Settings → Shortcuts." >}}

## Settings

Open Settings from the menu bar item, or press `⌘ + ,` while Conjuror is active. The window opens on your currently active macOS Space. Choose a pane from the sidebar. You can resize the window vertically, and it remembers its height.

- **General:** Turn launch at login on or off, choose the launcher appearance and accent colour, and set how many results appear before scrolling. Appearance choices are Standard, Minimal, and Command Bar. Accent choices include Cyan, Purple, Yellow, a custom colour, or Disabled.
- **Apps:** Change the main launcher shortcut, choose whether application search includes System Settings sections and system commands, manage app aliases and hotkeys, and exclude apps from search.
- **Shortcuts:** Turn Apple Shortcuts mode on or off and configure the shortcut that opens it directly.
- **Emoji:** Turn Emoji mode on or off, configure the shortcut that opens it directly, and choose the skin tone Conjuror applies to supported emoji by default.
- **Clipboard:** Turn clipboard history on or off, configure the shortcut that opens it directly, check whether Return can paste, choose how long to keep history, and clear it.
- **Files:** Turn file and folder search on or off, configure its direct shortcut, and request access to the protected Desktop, Documents, Downloads, and iCloud Drive locations.
- **Calculator:** Turn optional currency conversion on or off.
- **Quicklinks:** Add, edit, or remove quicklinks, restore the built-in ones, and choose the web search fallback.
- **About:** Check the installed version and the status of each permission, report a bug, copy diagnostics for a bug report, and open the GitHub repository, licence, and credits.

The visible-results setting accepts values from 3 to 10. Launch at login is off by default. If macOS requires approval after you enable it, use **Open Login Items Settings** to finish the setup.

Use **Reset to Defaults** under Apps to restore all keyboard shortcuts, the accent colour, the visible-results setting, and the preferred emoji skin tone. It also removes all app aliases, app hotkeys, and excluded apps.

{{< docs-screenshot src="/images/screenshots/settings-general.webp" alt="Conjuror General settings showing launch at login, launcher appearance, accent colour, and visible results" caption="General settings control launch behaviour, the launcher appearance and accent, and result count." >}}

## Permissions

To search and run Apple Shortcuts, allow Conjuror to control Shortcuts Events when macOS first asks. This Automation permission is only required for Apple Shortcuts mode.

Some system commands also need Automation permission. macOS asks whether Conjuror can control Finder the first time you empty the Trash, and System Events the first time you toggle dark mode.

Accessibility access lets Return paste an emoji or clipboard item into the app you were using, and lets a tap of `fn` work as a mode shortcut. Without it, Return copies instead of pasting. You can grant it from **Settings → Clipboard** or **Settings → About**.

Clipboard history needs permission to read text you copy in other apps. macOS asks the first time Conjuror reads it, and only while clipboard history is on.

**Settings → About** shows the status of each permission and opens the matching page in System Settings.

{{< docs-screenshot src="/images/screenshots/settings-about.webp" alt="Conjuror About settings showing the app version, support and diagnostics buttons, and permission statuses for Accessibility, Paste from other apps, and Protected folders" caption="Check permission status, copy diagnostics, and open System Settings from Settings → About." >}}

File search uses the on-device Spotlight index. macOS may ask before Conjuror can access Desktop, Documents, Downloads, or iCloud Drive; you can trigger those prompts from **Settings → Files**.

Currency conversion uses the network to refresh an exchange-rate snapshot daily; failed requests may be retried sooner. Your search text is never sent, and the latest rates remain available offline.

Quicklinks and web search open a site in your browser or the app you chose, which sends your search text to that site.

Application, running app, file, folder, emoji, and clipboard history search, arithmetic, unit conversion, dates, and timezone conversion stay on your Mac and do not require network access.
