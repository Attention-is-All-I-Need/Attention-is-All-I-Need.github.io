---
layout: about
title: about
permalink: /

profile:
  align: right
  image: prof_pic.png
  image_circular: false
  address: >
    <p>Iribe Center</p>
    <p>College Park, MD</p>

selected_papers: true
# Restore the original bottom social icon row by uncommenting the line below.
# social: true

announcements:
  enabled: true
  scrollable: false

latest_posts:
  enabled: false
  scrollable: false
  limit: 3
---

I am a first-year Ph.D. student in Computer Science at the [University of Maryland, College Park](https://umd.edu/), advised by Prof. [Furong Huang](https://furong-huang.com/).

My research focuses on **large language models (LLMs)**, particularly on improving models' **reasoning** and **agentic capabilities** by developing advanced <strong class="nowrap">pre-training</strong>, <strong class="nowrap">mid-training</strong>, <strong><span class="nowrap">post-training</span> (SFT, RL)</strong>, and **data synthesis** methods.

I am open to research collaborations; if you are interested in working together, please feel free to reach out via [email](mailto:weizeliu1115@gmail.com).

{% comment %}
  The X / LinkedIn / Rednote follow buttons are temporarily hidden.
  To restore them identically: (1) fill in x_username, linkedin_username,
  and xiaohongshu.url in _data/socials.yml; (2) remove the enclosing
  Liquid comment tags around the markup below.
{% endcomment %}

{% comment %}
<div class="follow-link-grid">
  <a
    class="follow-link-button follow-link-button-x"
    href="https://x.com/intent/follow?screen_name={{ site.data.socials.x_username }}"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
    <span>X</span>
  </a>
  <a
    class="follow-link-button follow-link-button-linkedin"
    href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
    <span>LinkedIn</span>
  </a>
  <button id="XHSBtnInline" class="follow-link-button follow-link-button-rednote" type="button">
    <i class="fa-solid fa-book" aria-hidden="true"></i>
    <span>Rednote</span>
  </button>
</div>

<div id="XHSModInline" class="wechat-modal">
  <div class="wechat-modal-content">
    <img
      src="{{ site.data.socials.xiaohongshu.qr | prepend: 'assets/img/' | relative_url }}"
      alt="Xiaohongshu QR"
      class="xhs-qr-img"
    >
    <a
      href="{{ site.data.socials.xiaohongshu.url }}"
      class="xhs-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Rednote Link
    </a>
  </div>
</div>

<script defer src="{{ '/assets/js/xiaohongshu.js' | relative_url | bust_file_cache }}" type="text/javascript"></script>
{% endcomment %}
