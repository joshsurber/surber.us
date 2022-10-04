---
layout: base
hero: true
pagination:
  data: collections.posts
  size: 3
  alias: posts
  reverse: true
---

## Portfolio

<div class="even-columns">
<img src="/images/ignite.png" alt="">
<img src="/images/tntcakery.png" alt="">
</div>

## Recent articles

<div class="even-columns">
  {% for post in posts %}
  <article class="article">
    <header>
      <h3><a href="{{ post.url }}" class="brand">{{ post.data.title }}</a></h3>
      Posted
      <time datetime="{{ post.date | date: '%F' }}">
        {{ post.date | date: "%A, %e %B %Y" }}
      </time>
    </header>
    <p class="excerpt">
      {{ post.templateContent | excerpt:100 }}
      <a href="{{ post.url }}#main" class="readmore">Read more</a>...
    </p>
  </article>
  {% endfor %}
</div>
