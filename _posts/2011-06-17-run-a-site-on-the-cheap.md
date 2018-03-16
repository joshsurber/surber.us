---
id: 1018
title: Run a site on the cheap
date: 2011-06-17T03:55:22+00:00
author: josh
layout: post
guid: http://surber.us/?p=1018
permalink: /2011/06/run-a-site-on-the-cheap/
tmac_last_id:
  - "152954834713190400"
dsq_thread_id:
  - "517039226"
categories:
  - Blog
tags:
  - Namecheap
  - OpenDNS
  - blogging
  - finances
  - geeky
  - hosting
  - money
---
Do you have a personal site or blog? How much do you pay for it? If you are like most people who host their own blog, you more than likely pay around $5 or $10 a month, and another $10 a year for your domain. This comes out to around $100 a year.

Let me tell you how I keep my blog up for under $30 a year. (It would be under $20 but I bought a second domain for my URL shortener).

Ever since I switched to <a class="zem_slink" title="1&1 Internet" href="http://1and1.com/" rel="homepage">1&1 internet</a> I have been dissatisfied. No really big problems with them that would make me recommend against them; I just felt they weren&#8217;t right for me. I don&#8217;t like their billing policies (why charge for my hosting in February then for the domain in March?), I don&#8217;t care for their control panel, I don&#8217;t like the way the user and host of my MySQL database are even more obfuscated than the password I randomly generated.

I had been thinking of packing up and moving to [Lifehacker favorite](http://lifehacker.com/5685843/best-domain-name-registrar-namecheap) [Namecheap](http://www.namecheap.com?aff=19511 "Disclaimer: this is an affiliate link.") for a while anyway, so when Namecheap offered a to let me [move my domain for cheap while helping wildlife](http://www.namecheap.com/default/aboutus/press-releases/11-03-31/Namecheap_com_donates_to_Save_the_Elephants_in_Response_to_the_Elephant_Hunt.aspx), just as my 1&1 account was due for renewal, I took it as a sign from [_insert deity here_].<!--more-->

<div class="zemanta-img zemanta-action-dragged" style="margin: 1em;">
</div>

I already had an account with NearlyFreeSpeech.net, one of [Lifehackers five best personal web hosts](http://lifehacker.com/5545568/five-best-personal-web-hosts). Rather than charge you by the month, they [charge you by usage](https://www.nearlyfreespeech.net/services/pricing). However, this will almost always come out cheaper for a personal site. It may even be cheaper for a big professional site. They have a [calculator](https://www.nearlyfreespeech.net/estimate) so you can get an estimate of how much your site will cost, and I will be quite suprised if it is more than you are paying now. They are also the only host I know of that doesn&#8217;t make you pay a premium for SSH access; everyone gets SSH included in their hosting. You can [sign up](https://www.nearlyfreespeech.net/signup/) and feel your way around for free before you invest any money, and they don&#8217;t lock you into any contracts. They [aren&#8217;t as easy to use as some hosts](https://www.nearlyfreespeech.net/about/faq#Easy), but if you are familiar with Unix/Linux or the Mac OS X command line, you should be okay.

You don&#8217;t want to host your domain with them, though. For one thing, you are limited to a [few TLDs](https://www.nearlyfreespeech.net/services/domains). For another, domains cost about the same everywhere, but NFSN doesn&#8217;t have an affiliate program. Get your domain somewhere else that has one, then you can make use of that to pick up a few bucks on the side. Again, I recommend [Namecheap](http://www.namecheap.com/?aff=19511 "Disclaimer: this is an affiliate link").

Another reason is that you&#8217;ll pay around $10 a year for email forwarding from NFSN. Hosting it elsewhere lets you use their (probably cheaper) email forwarding to your existing email account, or you can set up Google Apps for your domain for [free](http://www.google.com/apps/intl/en/group/index.html), as long as you aren&#8217;t going to have many users.

After you have set up your NFSN and Namecheap accounts, you will need to set up your domain to point to your site. Set up to use the NFSN <a class="zem_slink" title="Domain Name System" href="http://en.wikipedia.org/wiki/Domain_Name_System" rel="wikipedia">DNS</a>, and then follow the directions in [this FAQ entry](http://faq.nearlyfreespeech.net/section/domainnameservice/otherregistrar#otherregistrar).

<div class="zemanta-img zemanta-action-dragged" style="margin: 1em;">
</div>

At this point you are already going to save a lot of money on your site, but you can really crank up your savings using <a class="zem_slink" title="CloudFlare" href="http://www.cloudflare.com" rel="homepage">CloudFlare</a>. CF is for servers what <a class="zem_slink" title="OpenDNS" href="http://www.opendns.com/" rel="homepage">OpenDNS</a> is for clients: it handles their DNS for them, while adding safety and speed features on as an added bonus. It is free and really easy to set up; so easy I&#8217;m not going to walk you through it. Once it is set up, though, it will cache several of your resources, saving on bandwidth charges from NFSN while speeding up your site. After it is working, cancel your DNS from NFSN (CF replaces it anyway) to save an extra $3.65 a year.

&nbsp;

Make sure you have plenty of time before doing any of this though: there are several DNS changes required through this entire process, each of which can take hours. If you use [OpenDNS](http://opendns.com) (and you should) then their [CacheCheck](http://cache.opendns.com) feature can help, but you can still spend an entire weekend easily moving your site. However, the savings can be well worth it.

<span style="color: #000000; font-size: 13px; line-height: 19px;">Related articles</span>

<ul class="zemanta-article-ul">
  <li class="zemanta-article-ul-li">
    <a href="http://thenextweb.com/industry/2011/06/07/cloudflare-a-website-security-product-accidentally-makes-sites-60-faster/">CloudFlare: A website security product accidentally makes sites 60% faster</a> (thenextweb.com)
  </li>
  <li class="zemanta-article-ul-li">
    <a href="http://thenextweb.com/industry/2011/04/05/namecheap-raises-20k-for-save-the-elephants-following-godaddy-ceo%25e2%2580%2599s-hunt-video/">Namecheap raises $20k for Save the Elephants following GoDaddy CEO&#8217;s hunt video</a> (thenextweb.com)
  </li>
  <li class="zemanta-article-ul-li">
    <a href="http://www.makeuseof.com/tag/protect-speed-website-free-cloudflare-service/">Protect And Speed Up Your Website With Free CloudFlare Service</a> (makeuseof.com)
  </li>
</ul>