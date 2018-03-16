---
id: 164
title: 'Free as in speech&#8230;'
date: 2006-12-26T07:35:02+00:00
author: josh
layout: post
guid: http://surber.us/?p=164
permalink: /2006/12/free-as-in-speech/
btc_comment_summary:
  - 's:6:"a:0:{}";'
btc_comment_counts:
  - 's:6:"a:0:{}";'
tmac_last_id:
  - "152954852497035264"
categories:
  - Blog
tags:
  - freedom
  - google
  - open source
  - privoxy
---
The [open source movement’s](http://opensource.org) motto has long been “Free as in speech, not as in beer.” Of course, I go for both as I am poor 🙂

After reading [Features vs Freedom](http://www.jonobacon.org/?p=843), I realized that I use mostly non-free software. I had thought myself big on free software, but had not considered the fact that web apps aren’t really free. I use [a lot of Google’s web apps](http://surber.us/2006/04/16/google). Nearly all of them, in fact. I am trying to change that.

I am still using [GMail](http://mail.google.com) because my web host’s <acronym title="Post Office Protocol">POP</acronym> and <acronym title="Internet Mail Access Protocol">IMAP</acronym> servers don’t seem to work. However, I have weaned myself from [my favorite Google app](http://surber.us/2006/11/24/google-reader-blogging-for-bucks), [Reader](http://reader.google.com), for [Vienna](http://www.vienna-rss.org), a desktop aggregator. I am also using the bookmarks built into [my browser](http://surber.us/2005/11/27/home-depot-camino) ([Camino](http://caminobrowser.org)), instead of [Google’s bookmarks](http://google.com/bookmarks).

Don’t get me wrong, I still love the way Google makes their stuff, I just want to have as much freedom as possible. This is _my_ computer, after all. Shouldn’t _I_ be able to control the stuff on it?

**Bonus tip:** If you use [Privoxy](http://privoxy.org) (which you should) try enabling `user.filter` (in `Privoxy/config` then paste these two lines in it:

    FILTER: noscripts Kill all &lt;script> tags
    s@(</?)(script)[^>]*>@$1no$2><a href="https://twitter.com/intent/user?screen_name=gU">@gU</a>
    

Combine that with the build in filter for JS events and you can disable JS on a site by site basis. Comes in handy.