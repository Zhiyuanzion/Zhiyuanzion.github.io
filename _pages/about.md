---
layout: home
permalink: /
title: "Zhiyuan"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div class="personal-home" id="top">
  <div class="home-background" data-home-background data-backgrounds='{{ site.data.home.backgrounds | jsonify }}' aria-hidden="true"></div>
  <div class="home-content">
    <section class="profile-card" id="about">
      <img class="profile-avatar" src="{{ site.data.home.avatar | relative_url }}" alt="{{ site.data.home.name }}">
      <div class="profile-copy">
        <p class="profile-kicker">{{ site.data.home.school }}</p>
        <h1>{{ site.data.home.name }}</h1>
        <p class="profile-major">{{ site.data.home.major }}</p>
        {% if site.data.home.bio != "" %}<p class="profile-bio">{{ site.data.home.bio }}</p>{% endif %}
        <div class="profile-links">
          {% if site.data.home.email != "" %}<a href="mailto:{{ site.data.home.email }}">Email</a>{% endif %}
          {% if site.data.home.github != "" %}<a href="{{ site.data.home.github }}">GitHub</a>{% endif %}
        </div>
      </div>
    </section>

    <section class="home-section" id="skills">
      <h2>Skills</h2>
      <div class="skill-list">
        {% for skill in site.data.home.skills %}<span>{{ skill }}</span>{% endfor %}
      </div>
    </section>

    <section class="home-section" id="projects">
      <div class="section-heading"><h2>Projects</h2><a href="{{ site.data.home.github }}">GitHub</a></div>
      <div class="project-list">
        {% for project in site.data.home.projects %}
        <a class="project-item" href="{{ project.url }}"><strong>{{ project.name }}</strong><span>{{ project.description }}</span></a>
        {% endfor %}
      </div>
    </section>

    <section class="home-section home-writing" id="writing">
      <div class="section-heading"><h2>Writing</h2><a href="{{ '/writing/' | relative_url }}">All posts</a></div>
      <p>文章内容可以放在 <code>_posts</code> 目录中。</p>
    </section>
  </div>
</div>

