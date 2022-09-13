---
title: Android unrooted
date: 2016-09-22T02:29:55.000Z
layout: post
categories:
  - Blog
tags:
  - android
  - freedom
  - geeky
  - open source
  - root
---
<blockquote class="twitter-tweet" data-width="474">
  <p lang="en" dir="ltr">
    After updating to Nougat, I actually unrooted my phone. First time my phone hadn't been rooted since 2012. I kind of like it. <a href="https://twitter.com/hashtag/confessions?src=hash">#confessions</a>
  </p>
  
  <p>
    &mdash; Josh Surber (<a href="https://twitter.com/intent/user?screen_name=JoshSurber">@JoshSurber</a>) <a href="https://twitter.com/JoshSurber/status/776496768355700736">September 15, 2016</a>
  </p>
</blockquote>

When I got my first modern Android phone, a Nexus 4, back in 2012, the first thing I did was root it. I had owned a bunch of cheap no-name Android phones before, but none of them had available roots, and were all locked up pretty tightly. My N4 was the first phone I had that made rooting easy. Since then, I have owned a N5, N6, and N6P. Every single one, I rooted as soon as I turned it on. However, after getting the upgrade to the latest Android version, Nougat, I unrooted my phone for the first time in years. I have been running without root for over a week and don&#8217;t miss it at all.

There are several apps I always install that depend on root, but all of them are now either rolled into the system, or have a rootless alternative. [Greenify](https://play.google.com/store/apps/details?id=com.oasisfeng.greenify&hl=en) is one of the first root apps I ever used, but most of its functionality is absorbed into [Doze on the Go](http://www.androidauthority.com/android-n-doze-678982/).

Another main reason I always rooted was for [AdAway](https://adaway.org/), a simple way to block ads across my entire phone instead of just in the browser. However, I have since found that [AdGuard](http://adguard.com/?c=854933) can also block ads very well, without root. To do so system-wide requires paying for it, but if you change the currency you are paying in to Russian rubles, after converting the currency it is about $5 for a lifetime subscription. You can block ads in browsers only for free. Through a bit of sneakery, you are even able to block ads on HTTPS sites and on compressed pages in Chrome, which AdAway was not able to do.

I used [Xposed](http://forum.xda-developers.com/showthread.php?t=3034811), mainly for two modules: Greenify and [GravityBox](http://forum.xda-developers.com/xposed/modules/app-gravitybox-v3-1-4-tweak-box-android-t2316070). GravityBox is a very comprehensive module that is able to interact with several parts of your system. A lot of its less useful functionality is lost but the parts I used the most have similar features built in to Nougat. Settings->Display->Size lets you change the size of your interface, mimicking shrinking the navbar and allowing more info on your screen at a time. Quick setting tiles are now editable. UI Tweaks (open quick settings menu and press and hold on settings icon) lets you make adjustments to how notifications, silent mode, and status bar icons are handled.

Android&#8217;s greatest strength has always been that you can modify it to do whatever you wanted or needed it to with enough work, but after eight years it has matured to the point where you no longer need to take drastic measures or void your warranty to do so.
