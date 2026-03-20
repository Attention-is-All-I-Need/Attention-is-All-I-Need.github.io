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

My research focuses on **large language models (LLMs)**, particularly on improving models' **reasoning**, **agentic capabilities**, **reliability**, and **efficiency** by developing advanced **post-training (SFT, RL)** and **data synthesis** methods.

I am actively seeking a research internship for summer 2026 and welcome any referrals or connections. I am also open to research collaborations; if you are interested in working together, please feel free to reach out via [email](mailto:weizeliu1115@gmail.com).

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
