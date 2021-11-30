---
title: 'What is the role of AI in music?'
excerpt: "Can musicians benefit from AI music generation?"
collection: posts
feature_image: "/files/images/waves-abstract.jpg"
date: 2021-11-24
location: "Sydney, Australia"
category: 
  - Music
  - Computation
layout: 'post'
permalink: /posts/2021/11/AI-music-generation/
redirect_from:
  - /AI-music-generation/
  - /AI-music-generation
  - /projects/AI-music-generation
---
<style>
  figcaption {
    font-style: italic;
    padding: 2px;
    text-align: center;
  }
</style>
<br>
AI technologies has proven prolific as a means to perform tasks at a scale. Machine learning is finding its way into every line of business and transforming many industries. But among musicians, AI has not enjoyed as warm a reception as it did in other fields. As a classically trained pianist, I feel that it is unclear how a musician can benefit from AI. In setting up this page, I am to explore the role of AI in music composition and production through a series of projects. 
<br>
<h2>Objective</h2> 
<!-- <br> -->

<!-- <h4>Autonomy vs. Assistance</h4> -->
<!-- <br> -->
To begin with, I would like to make clear distinction of the two main objectives of music generation. A system that generates complete a music piece assumes the role of a composer. Amper and Aiva strive for the autonomous creation of original music for content creators. In contrast, a system that generates music fragments assists with composition. The earliest record of such a system dates back to the 18th century – Musikalisches Würfelspiel uses dice to generate arrangements for precomposed music segments. Digital Audio Workstation plugins such as iZotope Ozone, Jamahook are present day examples of an assistive tool for musicians and producers.
<br>

<!-- <h4>Characteristics</h4> -->
<!-- <br> -->
The nature of the content to be generated are characterised by texture, usage, mode of generation, and musical style. <b>Texture</b> describes the overall quality of sound in a piece of music. The intangible qualities tempo, melody, harmony, rhythm, and timbre all have an impact on music texture. In musical terms, the different types of texture are described by <a href="https://en.wikipedia.org/wiki/Monophony">monophony</a>, <a href="https://en.wikipedia.org/wiki/Homophony">homophony</a>, <a href="https://en.wikipedia.org/wiki/Polyphony">polyphony</a>, and <a href="https://en.wikipedia.org/wiki/Heterophony">heterophony</a>. The <b>destination</b> for the generated content can be a sound system, for which the content must be an audio file; a software instrument, for which the content should be in the form of a MIDI[^1] file; a musician, for whom the desired formats is some kind of music documentation (music score, guitar tab etc.) The <b>mode</b> of generation may or may not involve human interaction. The <b>style</b> of the generated music largely depends on the choice of training dataset.


We will explore these aspects of music generation by creating and implementing a series of AI music generation tools. The focus is on finding ways for musicians to benefit from AI. Accordingly, a good starting point would be an AI that assists with composition.


<br>
<h2>Projects</h2>
<br>

<h4><a href="/groove-box.html">AI Bassist</a></h4>
<br>
AI Bassist is a symbolic model that generates monophonic bass melodies in the style of minimal house and techno music. You can play with the web app <a href="/groove-box.html">on this page</a>. The target destination is a software synthesiser which reads MIDI files. Human interaction is limited though possible during content generation via a SoftMax temperature parameter[^2]. However, it is not reflected in the user interface (UI) in the current release. 

Access to music instruments and knowledge in music theory are the main obstacles for novice producers. Exploring creativity and articulating artistic expressions can be especially challenging when all audio/visual feedback is contained within a digital audio workstation (DAW). AI Bassist eliminates the "composer's block" and encourages novice producers to focus on sound design. AI Bassist puts a producer in the audience's perspective by generating 2-bar melodies in MIDI format, which is readily processed by any software instrument. The producer can focus on sound design and arrangement but also has the option to modify the melody. The demo track below is a collaboration between myself and AI Bassist.
<br>
<audio style="width:100%;height:100%;" class="mejs__player">
  <source src="/files/music/AI_bassist_demo_1.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>
<br>
Two generated MIDI note sequences were processed by Roland TB-303 and Jupiter-8. The 303 gave sets the acidic scene and the arpeggiated Jupiter-8 adds occasional polyphony. My contribution was on the drum track, audio FX and arrangement. 

<figure>
  <img src="/files/images/AI-Bassist-Demo-1.jpg" alt="Logic X Pro" style="width:100%">
  <figcaption>Figure 1. DAW during the making of demo track</figcaption>
</figure>

AI Bassist is currently built into a Yamaha DX7 emulator in a <a href="/groove-box.html">web application</a>. You can play generated melodies and download the ones you like as MIDI files. 


<br>
<br>
More to follow!


---

[^1]: MIDI (Musical Instrument Digital Interface) is an industry standard music technology protocol that connects digital musical instruments, computers, tablets, and smartphones from many different companies.
[^2]: The SoftMax temperature may be considered as a parameter that affects the confidence of the model. 
