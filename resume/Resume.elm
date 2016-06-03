module Main exposing (..) --where

import Html exposing (div, button, text)
import Html.Attributes exposing (..)
import Html.App exposing (beginnerProgram)
import Html.Events exposing (onClick)
import Markdown


main =
    beginnerProgram 
        { model = 0
        , view = view
        , update = (\m -> m)
        }


view model =
    Markdown.toHtml [ class "content" ] """
Matthew Griffith
================

matt@mechanical-elephant.com • (646) 470 8636 • [pdf version](https://mdgriffith.github.io/resume/Matthew Griffith - Resume.pdf)

[http://github.com/mdgriffith](http://github.com/mdgriffith) 

_I am a programmer with many interests and a passion for making things. I view programming as my tool to dive deeper into the subjects that I love, be it art, music, design, or science._

_I am fluent in `Python`, `Javascript`, `Elm`, and `Haskell`.  In operations I've worked with `Google Compute`, `Docker`, and `Kubernetes`.  I'm very comfortable with `Unix` based systems, `Git`, and a variety of databases such as `Postgres`, and `Neo4j`._

_This position at Cornell Tech interests me greatly.  Seeing a number of student presentations on demo day and speaking with Arnaud Sahuguet about some of the subject matter of faculty research has convinced me that Cornell Tech is a fast growing place of innovation, focusing on interesting, relevant problems._

_I flourish when given creative license, interesting subject matter, and smart people to collaborate with.  Being able to work on varied projects intrigues me and is something I am well suited for._



<span class="strikethrough">History</span>
-------

__Evotec__ • _Data Scientist, 2008-2016_

> _Evotec is a biotech company though I worked in the compound management area, developing cheminformatics infrastructure and working on chemical data enrichment.  Our most public compound set was the NIH's Molecular Library Small Molecule Repository of 440K compounds, which can be [found on Pubchem](https://www.ncbi.nlm.nih.gov/pcsubstance?term=MLSMR)_
>
> At Evotec I developed a proprietary `Python` library for Datamining the public NCBI databases. We used Jupyter Notebooks for public data retrieval and extraction, which sometimes involved usage of `Python's natural language processing` libraries to extract data from articles and papers.
> 
> Later in my employment at Evotec I created a pilot program to use a Graph Database(`Neo4j`) to capture relationships between published papers, our compounds, and other interesting datasets.  Finally, I used `D3.js` to create visually reviewable reports of outgoing shipments and datasets.


[__Ally Labs__](http://ally.is/) • _Contractor, 2016_

> _Ally is a recent startup that focuses on passive audio analysis for elderly care._
> 
> I developed a prototype API for them using `Python`, `Flask`, and `Postgres`.
>
> As more developers were brought on, I transitioned to working on Operations, establishing deployment and development pipelines on `Google Compute` using `Docker` and `Kubernetes`.



__Songwise__ • _Personal Project.  Hopefully Future Business._

> _Songwise is a web project to teach music to guitarists by creating interactive visualizations on a fretboard._
> 
> The server is written in `Haskell` using the `Yesod` framework. I've written a Guitar Tablature parser using `Haskell` and parser combinators from the `Parsec` Library.
>
> The entire frontend, including fretboard animations and music theory visualizations, is written using `Elm`.


[__Elm Style Animation__](https://github.com/mdgriffith/elm-style-animation) • _Open Source Elm Library_

> _`Elm` is a recent language that targets the browser by compiling into Javascript. It has many of the desirable characteristics of Haskell though is much more approachable._
>
> I developed an open source keyframe animation library for Elm to be used for user interface design as well as for browser games.  Complex animations are easily expressed, especially compared to existing Javascript animation libraries.
> 
> It was [very](https://groups.google.com/d/msg/elm-discuss/SgyCIFBmKwg/lMHbI-DbCwAJ) [well](https://groups.google.com/d/msg/elm-discuss/jAtEHcJfTs8/l8tnEF2NAQAJ) [received](https://groups.google.com/d/msg/elm-discuss/E2F-y89IEN0/JCalDy9ABAAJ) when it was released.
> 
> Some Examples
>
> * [Batman Logo Morphing](https://mdgriffith.github.io/elm-style-animation/1.0.0/Batman.html)
>    * Using automatic SVG interpolation
> * [A Mobile Menu](https://mdgriffith.github.io/elm-style-animation/1.0.0/FlowerMenu/)
>    * Using transformation stacking to keep the math trivial.


[__Mechanical Elephant__](http://mechanical-elephant.com/) • _Blog_

> _I started a small technology and design blog.  It's still woefully underpopulated, though its first article received 20K views._
>
> Prominent Article - [Becoming Productive in Haskell](http://mechanical-elephant.com/thoughts/2015-04-20-becoming-productive-in-haskell/)


[__The Wise Manatee__](http://wise-manatee.com) • _Web Experiment_

>  _This was an art installation I created using `ReactJS`.  It is a manatee that gives encouraging, sometimes funny programming advice._



__[Fill in the Blank Media](http://www.fillintheblankmedia.com/)__ • _Example from Freelance Work_

> _This is a videographer's website using the `Django` framework, and `Postgres`.  Behind the scenes it has batch video transcoding using a message queue and ffmpeg._


__University of California Santa Cruz__

>  _Bachelors of Science in Biology_
>
> _One of my first projects was to create a visualizer for Nuclear Magnetic Resonance data in `PERL`.  Nuclear Magnetic Resonance data is generally used to reconstruct a chemical structure based on magnetic vibrations in certain atoms._



<span class="strikethrough">Interests</span>
---------

__Rockclimbing__

> _I find rockclimbing to be great complement to programming.  Being able to step away from the computer, engage in a different, physical puzzle, and then return to the computer turns out to be very useful in solving heavy problems.  _

__Music__

> _Beyond what I'm doing with my project Songwise mentioned above, I play guitar and hope to learn the keyboard in the near future._

__Aquaculture__

> _Going back to my degree in Biology, I have an interest in the environment and biological processes.  More recently I've been interested in developments in aquaculture such as those [detailed in this article](https://medium.com/invironment/an-army-of-ocean-farmers-on-the-frontlines-of-the-blue-green-economic-revolution-d5ae171285a3#.i8ephj9sw)._

__Cryptocurrencies__

> _I've been following the development of Bitcoin for quite a while now and am intrigued by the possibilities that the blockchain technology could provide._


"""
