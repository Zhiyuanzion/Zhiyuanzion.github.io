---
layout: home
permalink: /
title: "Zhiyuan — AI Student & Builder"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div class="home-shell" id="top">
  <section class="home-hero">
    <div>
      <div class="eyebrow">Yunnan University · Artificial Intelligence</div>
      <h1>你好，我是<br><em>Zhiyuan.</em></h1>
      <p class="hero-copy">我是一名人工智能专业学生，正在用代码、实验与持续写作，探索人与智能系统可以一起创造什么。</p>
      <div class="hero-actions">
        <a href="#work">查看项目</a>
        <a href="/year-archive/">阅读文章</a>
        <a href="https://github.com/Zhiyuanzion">GitHub ↗</a>
      </div>
    </div>
    <aside class="portrait-card" aria-label="Zhiyuan profile">
      <img src="/images/profile.png" alt="Zhiyuan 的头像">
      <p>curious / building / learning</p>
    </aside>
  </section>

  <section class="home-section" id="about">
    <div class="section-head"><h2>不止一份简历。</h2></div>
    <div class="about-grid">
      <p>这个站点记录我正在做的项目、遇到的问题，以及让我保持好奇的技术。它会随着我的学习不断生长。</p>
      <div class="interest-list" aria-label="Interests">
        <span>Artificial Intelligence</span><span>LLM Agents</span><span>Python</span><span>Open Source</span><span>Creative Coding</span><span>Human-centered AI</span>
      </div>
    </div>
  </section>

  <section class="home-section" id="work">
    <div class="section-head"><h2>Selected work</h2><a href="https://github.com/Zhiyuanzion">全部仓库 ↗</a></div>
    <div class="project-grid">
      <a class="project-card" href="https://github.com/Zhiyuanzion/MaiBot">
        <span class="project-index">01 / AI AGENT</span>
        <h3>MaiBot</h3>
        <p>一个基于大语言模型的智能体开源项目；我在这里进行本地探索，关注更自然的人机交互。</p>
        <small>Python · LLM</small>
      </a>
      <a class="project-card" href="https://github.com/Zhiyuanzion/PCL2-CE">
        <span class="project-index">02 / COMMUNITY</span>
        <h3>PCL2-CE</h3>
        <p>面向 Minecraft 启动体验的社区开源项目，是我接触桌面应用和开源协作的一段实践。</p>
        <small>Visual Basic .NET</small>
      </a>
      <a class="project-card" href="https://github.com/Zhiyuanzion/Zhiyuanzion.github.io">
        <span class="project-index">03 / THIS SITE</span>
        <h3>Digital garden</h3>
        <p>我的个人主页与写作花园：让项目、学习记录和想法拥有一个持续更新的容器。</p>
        <small>Jekyll · SCSS</small>
      </a>
    </div>
  </section>

  <section class="home-section" id="writing">
    <div class="section-head"><h2>Latest writing</h2><a href="/year-archive/">查看全部 →</a></div>
    <ul class="writing-list">
      {% for post in site.posts limit: 4 %}
      <li><a href="{{ post.url | relative_url }}"><time>{{ post.date | date: "%Y.%m.%d" }}</time><strong>{{ post.title }}</strong><span>↗</span></a></li>
      {% else %}
      <li><a href="/year-archive/"><time>SOON</time><strong>新的学习笔记正在路上。</strong><span>↗</span></a></li>
      {% endfor %}
    </ul>
  </section>

  <section class="home-section">
    <div class="contact-panel">
      <div class="eyebrow" style="color:#d9daff">LET'S CONNECT</div>
      <h2>聊聊 AI、代码，<br>或任何新点子。</h2>
      <p>欢迎通过 <a href="mailto:zhiyuanzion@outlook.com">zhiyuanzion@outlook.com</a> 联系我。</p>
      <a href="https://github.com/Zhiyuanzion">@Zhiyuanzion on GitHub ↗</a>
    </div>
  </section>
</div>

