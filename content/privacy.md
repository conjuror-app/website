---
title: Privacy
browserTitle: Privacy policy
description: How Conjuror handles local searches, preferences, permissions, and optional exchange-rate downloads.
---

Updated 5 September 2026.

Conjuror is a macOS app made by Tom Bell. Your launcher searches are processed on your Mac. Conjuror does not send your search text to a server or require an account.

## What stays on your Mac

Application and System Settings search, file and folder search, emoji search, arithmetic, unit conversions, relative dates, and timezone conversions work locally.

Conjuror stores your settings and a limited history of recently launched apps, run Shortcuts, and copied emoji in local preferences. This history helps order results and show recently used emoji. It is not uploaded to a Conjuror service.

When you choose an emoji or calculation result, Conjuror writes it to the macOS clipboard so you can paste it. macOS and any clipboard tools you use control what happens to copied content afterwards.

## Files and permissions

File search uses the Spotlight index on your Mac and respects the access macOS grants to Conjuror. macOS may ask for permission to search protected locations such as Desktop, Documents, Downloads, and iCloud Drive. You can review those permissions in **System Settings → Privacy & Security**.

Conjuror asks for Automation permission to search and run Apple Shortcuts through Shortcuts Events. A Shortcut you choose to run may access files, use the network, or contact other services according to its own actions and permissions.

## Optional currency conversion

Currency conversion is off by default. If you enable it under **Settings → Calculator**, Conjuror downloads an exchange-rate snapshot from [Frankfurter](https://frankfurter.dev). The request contains no launcher search text or calculation. Like any network request, it exposes your IP address to the service receiving it.

After a successful download, Conjuror refreshes the snapshot after 24 hours while running. Failed requests may be retried after 15 minutes. The latest snapshot is cached on your Mac so it can be used offline. Turning currency conversion off stops refreshes and removes the cached rates.

## This website and downloads

This static website is hosted on GitHub Pages. Its pages do not include analytics scripts or set cookies. GitHub also hosts app downloads, issues, and discussions, and processes connection information such as IP addresses under its [privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

If you post an issue or discussion, the information you submit is visible publicly on GitHub. Share only the details you want to make public.

## Questions and changes

You can ask Tom about Conjuror’s privacy behaviour through [Conjuror Discussions](https://github.com/conjuror-app/releases/discussions). This page will be updated when that behaviour changes, with the revision date shown above.
