---
title: My first client site
---

A couple of weeks ago, I pushed my first client site live! [TnT Cakery](https://tntcakery.com) is a San Antonio-local custom cake home baker. Tina, the owner, had no idea what she wanted when she said she would like a website, so the entire thing was mostly left to my discretion. After a brief meeting with her, I found that as she custom makes (and prices) all her cakes, an online ordering system would not work well, so the focus should be showing off previous work with a primary call-to-action of having the viewer contact Tina to order a cake.

The color scheme was designed to call to mind an iced cake. The logo (which was originally designed in CSS and only moved to SVG via a screenshot) should be reminiscent of a two-layered cake on a cake stand.

The code is almost entirely HTML and vanilla CSS, written in Vim. JavaScript is used only to size the images in the carousel to eliminate weird reflow issues. The image carousel uses scroll snapping rather than a complicated (and potentially inaccessible) JavaScript solution (though a [recent video by Kevin Powell](https://youtu.be/a8OiB2NnHMo) highlights the [A11y slider](https://a11yslider.js.org/) which I will probably experiment with). There is a CMS backend powered by NetlifyCMS so Tina can upload new cakes and reviews herself in the future. The site responds well all the way down to the slimmest candybar phone.

I have been using Jekyll for a long time for my personal site, but [eleventy](http://11ty.dev) has recently caught my eye, so I learned it for this project. It is mostly similar to Jekyll but not so much so that the little differences tripped me up (being almost the same is worse than being completely alien). Having used it, I am now planning to move this site to 11ty as well in the near future. Of course, this means GitHub Pages will no longer work for a CI/CD workflow, but I also discovered Netlify (I'd heard of it, of course, but never used it) and already plan to move over there.

Overall, this project changed drastically between my original concept and the version that went live, but Tina was very excited about it. All her friends and clients who have seen it love it. And the logo I designed is now on her business cards, cake box stickers, and is about to be on shirts. Overall, I consider this an incredibly successful first foray into the world of professional development.
