---
id: 167
title: Code Ignitor
date: 2007-01-09T12:00:00+00:00
author: josh
layout: post
guid: http://surber.us/?p=167
permalink: /2007/01/code-ignitor/
btc_comment_counts:
  - 's:6:"a:0:{}";'
btc_comment_summary:
  - 's:6:"a:0:{}";'
tmac_last_id:
  - "152954849942708224"
categories:
  - Blog
tags:
  - code igniter
  - open source
  - php frameworks
  - programming
---
I am recreating my [most used](http://surber.us/2006/04/16/google) [Google apps](http://google.com/options/) under the open source [Code Ignitor](http://codeignitor.com) framework. I have always stayed away from frameworks. Not because I feel they make you lazy (`lazy programmer = productive programmer = happy programmer`), I just don’t like having to bend my code to the way someone else thinks I should write it. I normally stay away from any library that offers more than two or three functions, but after playing with CI trying to go back to straight <acronym title="Personal Home Page Hypertext Preprocessor">PHP</acronym> just feels clunky.

The main nice things about making your own web apps is that:

  1. You don’t have to worry about [licensing issues](http://surber.us/2006/12/26/free-as-in-speech)
  2. You can hard code in stuff such as passwords and preferences
  3. You don’t have to include everything.

That last item could use some explaining. When you create a normal web app, you need to consider everything that a user could want to do and either include or ignore it. When you are making something that you will be the only one to use, you only have to worry about the stuff that you want to do often. The little one-off cases (such as changing a password) can be done directly in source files or <acronym title="Structured Query Language">SQL</acronym>. No sense spending an entire afternoon allowing yourself to change a password when you can do it directly from the command line, and you will only do so every couple of months.

If you are looking to escape from both proprietary web apps and being tied to a single computer (or syncing files) I would recommend that (after searching [FreshMeat](http://freshmeat.net)) you [download CodeIgnitor](http://www.codeigniter.com/download.php), read the [user guide](http://www.codeigniter.com/user_guide/), and make it yourself.