---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
published: false
redirect_from:
  - /resume
---

{% include base_path %}

Education
=====
* Ph.D in [Your Field], [Your University], 20XX (expected)
* M.S. in [Your Field], [Your University], 20XX
* B.S. in [Your Field], [Your University], 20XX

Work experience
=====
* 20XX - present: [Job Title]
  * [Company / Institution]
  * Duties includes: [Description]
  * Supervisor: [Supervisor's Name]

* 20XX - 20XX: [Job Title]
  * [Company / Institution]
  * Duties included: [Description]
  * Supervisor: [Supervisor's Name]

Skills
=====
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
* Skill 3

Publications
=====
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
=====
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
=====
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
=====
* [Service / leadership position]

---
*此页面为占位骨架，请在 `_pages/cv.md` 中填写真实经历。*
