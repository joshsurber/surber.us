---
id: 153
title: TextPattern vs. WordPress
date: 2006-10-24T16:23:47.000Z
author: josh
excerpt: >-
  <p>I have been using <a href="http://www.wordpress.org">WordPress</a> for two
  weeks now, which (I feel) is long enough to make a basic comparison with my
  old software (<a href="http://www.textpattern.com">TextPattern</a>) for anyone
  who is trying to find a good platform to blog from.</p>
layout: post
guid: 'http://surber.us/?p=153'
permalink: /2006/10/textpattern-vs-wordpress/
btc_comment_counts:
  - 's:6:"a:0:{}";'
btc_comment_summary:
  - 's:6:"a:0:{}";'
tmac_last_id:
  - '152954854950699008'
dsq_thread_id:
  - '12628447'
categories:
  - Blog
tags:
  - blogging
  - fixme
  - reviews
  - textpattern
  - wordpress
published: true
---
Note: I am no longer using either platform and would recommend Jekyll.

I have been using [WordPress](http://www.wordpress.org) for two weeks now, which (I feel) is long enough to make a basic comparison with my old software ([TextPattern](http://www.textpattern.com)) for anyone who is trying to find a good platform to blog from.<!--more-->

## Interface

The first difference you notice is the style of the admin interface. TextPattern (TxP) seems sparse, simple, yet a little cobbled together. It loads quickly, though. TxP feels like it expects you to know more about web programming before you can use it, but both should be fairly simple for a new user.

## Writing and editing

While I realize that interface aesthetics are a matter of personal opinion, most writers seem to be of two camps, content folks and design folks. People who focus on content, and don’t want anything getting in the way of their writing, will appreciate [Textile](http://textile.thresholdstate.com). This is available as a [WordPress plug-in](http://www.huddledmasses.org/category/development/wordpress/textile/ "The Textile plugin for WP"), but is built in to TextPattern. Textile is small, unobtrusive, and makes writing easy. People who are more focused on how their words look will defiantly prefer the rich text editor built in to WP. It slows stuff down on my archaic (1999) iMac, but makes text formatting a point-and-click affair, and should be speedy enough on a newer computer to not matter. Which one would you be more comfortable in? If you prefer writing in a word processor (MS Word, [OpenOffice.org](http://openoffice.org "An open source MS Office replacement"), etc) you would probably prefer WP, but anyone who does their writing in a text editor ([VIM](http://www.vim.org "the world's best text editor"), emacs, Notepad, etc) would be happier with TxP.

## Templates

This is the main thing that has held me to TxP for so long. [WP’s template system](http://codex.wordpress.org/Category:Templates "The WP help files for templates") is <span class="caps">PHP</span> based, with a large assortment of functions that output content. TxP uses a <span class="caps">XML</span> syntax, embedded in an (imaginary) txp: namespace. I am fairly comfortable with <span class="caps">PHP</span>, but the <span class="caps">XML</span> format of TxP just makes much more sense when editing a (X)<span class="caps">HTML</span> template. TxP is much better, and even allows a tag for basic <span class="caps">PHP</span>. However, if you plan on doing heavy-duty <span class="caps">PHP</span> inclusion in your templates, stick with WP.

## Static pages

WP makes creating static pages a breeze, but in TxP you have to jump through your own eardrum to do so. WP wins this hands down.

## File format

TxP doesn’t clutter your server up. A default install places two files (.htaccess, index.php) and three folders (textpattern, images, files) in your home directory, and stores nearly everything in the database. In theory a set up like this should be the Wrong Thing, but TxP is remarkably fast, and this makes a backup as simple as a mysqldump command. The biggest problem with this approach is editing template and plug-in files must be done either with a browser interface, or through copy and paste. (I cheat — I load the page into lynx in a terminal window, then press ^E-^E to open the file in my $<span class="caps">EDITOR</span>.) WordPress litters nearly thirty items in the base directory, and has its plug-ins and themes within the wp-content directory. This makes editing easier, but means an extra step to backups.

## Speed

Despite the fact that everything is stored in the database in TxP, my (very unscientific) testing (meaning, which feels slower) seems to show that TxP is faster at almost everything.

## Support

There is more [stuff available for WP](http://codex.wordpress.org "WordPress documentation.") (due to its larger install base) but TxP seems to have better quality (and better organized) [information](http://textpattern.net "TextPattern documentation").

WP is also updated much more often — TxP got its first update in nearly a year just last week.

## Miscellaneous

TxP has a few extra features that have no comparison in WP. TxP offers file upload and download (and keeps track of download stats) so if you have lots of files to share, this is nice. It requires browser upload, though, so <span class="caps">FTP</span> junkies won’t really use this.

WP has its own feature set, though. One nice thing for newbies is the hosted service over at [wordpress.com](http://wordpress.com "Hosted WordPress"). This keeps you from having to worry about finding hosting and creating database tables. The hosted service is much more limited, however (for example, you get a shit-load of themes to choose from, but you can’t edit them or create your own, nor can you use plugins)

WP is also integrated with Askimet for comment spam protection, but TxP’s forced comment preview defeats nearly every comment spambot on earth (I got two comment spams the entire time I was using TxP)

## Bottom line

I am using WordPress, but used TextPattern for over five years and have no regrets. If you really know nothing about web programming, and just want a simple blog, I would recommend WordPress, but for most blogs I see nowadays, TextPattern is probably the best option available.