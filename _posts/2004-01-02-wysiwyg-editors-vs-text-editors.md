---
id: 13
title: WYSIWYG editors vs. text editors
date: 2004-01-02T19:03:00+00:00
author: josh
excerpt: |
  <p>Call me a lemming, but I feel like tossing my two bits into the classic web design <a href="http://www.catb.org/~esr/jargon/html/H/holy-wars.html" title="Holy war definition in the Jargon File">holy war</a>: <a href="http://www.sitepoint.com/article/969"><abbr title="what you see is what you get">WYSIWYG</abbr> editors</a> <abbr title="versus">vs.</abbr> <a href="http://www.sitepoint.com/article/968">hand coding</a>.</p>
  
  <p>While I find that <abbr>WYSIWYG</abbr> editors have their place, I could not stand to not do most of my design in code. Some of the benifits of this include:</p>
layout: post
guid: http://surber.us/?p=9
permalink: /2004/01/wysiwyg-editors-vs-text-editors/
btc_comment_summary:
  - 's:6:"a:0:{}";'
btc_comment_counts:
  - 's:6:"a:0:{}";'
tmac_last_id:
  - ""
categories:
  - Blog
tags:
  - blather
  - web design
---
Call me a lemming, but I feel like tossing my two bits into the classic web design [holy war](http://www.catb.org/~esr/jargon/html/H/holy-wars.html "Holy war definition in the Jargon File"): [WYSIWYG editors](http://www.sitepoint.com/article/969) vs. [hand coding](http://www.sitepoint.com/article/968).

While I find that <abbr>WYSIWYG</abbr> editors have their place, I could not stand to not do most of my design in code. Some of the benifits of this include:

<!--more-->

no platform/software dependance
:   I create my pages on multiple platforms, sometime other people&#8217;s computers. If I used my computer only, I may find that I liked WYSIWYG enough to use it regularly, but as I use other people&#8217;s computers quite a bit, I need to do my design in a way that if familiar to me on all platforms. While various text editors have their differences, they all operate closely enough that I can sit down at any computer and create something.

better standards compliance
:   I make sure that everything I create [validates](http://validator.w3.org) and uses structural markup. While this is possible in some visual editors, it is far more difficult that just knowing the code. And as I do much of my design work (95% or more) in CSS, I need the flexibility that hand coding offers.

easier server side programming
:   I do quite a bit of server side programming. It may be more than I need, as I am fairly new to it, but even if it was just a little, visual design tools make it difficult to do any of it, much less `echo` items (such as table rows and cells) in loops.

better understanding of markup
:   Part of using standard markup is understanding that it is not meant as a visual design tool. Using WYSIWYG editors gets people in the mindset that, for instance, `<h1>` tags mean &#8220;big and bold&#8221;, rather than the main title of a page. They enforce the misconception that (X)HTML is meant for page layout, rather than describing what all the parts on a page mean in relation to one another. Understanding this is the key to creating useable, accessible, and interoperable web pages.

On the other hand, I&#8217;m not going to lie and say that I never use visual editors. I do so rarely, and never on a final product, but I find that using Claris Home Page (extinct for several years now, but almost supports <abbr>HTML</abbr> 2.0) to clean up documents, create headings, and the such on existing documents can be faster than using a text editor.

I don&#8217;t believe that anyone even semi-experienced in web design should even remotely depend on them, but they can be quite useful for newbies. Not for creating pages, per se, but they let new users create a page then examine the source (hopefully **after** running [HTML Tidy](http://tidy.sourceforge.net) on it) to develop a feel for how the code works. That is part of how I learned.

Summarized: visual editors have their place, but for the ultimate in power and flexibility, nothing beats working with code.