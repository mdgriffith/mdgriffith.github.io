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

> _I am a programmer with many interests and a passion for making things. I view programming as my tool to dive deeper into the subjects that I love, be it art, music, design, or biology._
>
> _I consider myself fluent in `Python`, `Javascript`, `Elm`, and `Haskell`, though with less experience in some of the deeper aspects of Haskell._
>
> _This position at Cornell Tech interests me greatly.  I flourish when given creative license, interesting subject matter, and smart people to collaborate with.  Being able to work on varied projects intrigues me and is something I believe I am well suited for._


<span class="strikethrough">History</span>
-------


[__Ally Labs__](http://ally.is/) • _contractor, 2016_

> _Ally is a recent startup that focuses on passive audio analysis for elderly care._
> 
> I developed a prototype API for them using `Python`, `Flask`, and `Postgres`.
>
> As more developers were brought on I transitioned to working on Operations, establishing deployment and development pipelines on `Google Compute` using `Docker` and `Kubernetes`.


__Evotec__ • _Data Scientist, 2008-2016_

> _Evotec is a biotech company based in Germany.  I worked in the compound management area, which is located in South San Francisco._
>
> * Developed a proprietary `Python` library for Datamining the NCBI databases.
> * Implemented a chemical structure canonicalization process which allows a compound to be indexed in a database.
> * Utilized Jupyter Notebooks for public data retrieval and extraction.
> * Some usage of `Python's Natural Language Processing` libraries
> * Created a pilot program to use a Graph Database(`Neo4j`) to capture relationships between published papers, our compounds, and other interesting datasets.
> * Used `D3.js` to create visually reviewable reports of outgoing shipments and datasets.


__Songwise__ • _Personal Project.  Hopefully Future Business._

> _A web project to interactively visualize music on a fretboard._
> 
> _The server written in `Haskell` using the `Yesod` framework. I've written a Guitar Tablature parser using `Haskell` and parser combinators from the `Parsec` Library._ 
>
> _The entire frontend including fretboard animations, and music theory visualizations is written using `Elm`._


[__Elm Style Animation__](https://github.com/mdgriffith/elm-style-animation)

> _`Elm` is a recent language that targets the browser by compiling into Javascript. It has many of the desirable characteristics of Haskell though has made prominent efforts to be more approachable._
>
> _I developed an open source keyframe animation library for Elm to be used for user interface design as well as for browser games.  Complex animations are easily expressed, especially compared to existing javascript animation libraries._
> 
> _It was [very](https://groups.google.com/d/msg/elm-discuss/SgyCIFBmKwg/lMHbI-DbCwAJ) [well](https://groups.google.com/d/msg/elm-discuss/jAtEHcJfTs8/l8tnEF2NAQAJ) [received](https://groups.google.com/d/msg/elm-discuss/E2F-y89IEN0/JCalDy9ABAAJ) when it was released._
> 
> Some Examples
>
> * [Batman Logo Morphing](https://mdgriffith.github.io/elm-style-animation/1.0.0/Batman.html)
>    * Using automatic SVG interpolation
> * [A Mobile Menu](https://mdgriffith.github.io/elm-style-animation/1.0.0/FlowerMenu/)
>    * Using transformation stacking to keep the math trivial.


[__Mechanical Elephant__](http://mechanical-elephant.com/) • _Blog_

> _I started a small technology and design blog.  It's still woefully underpopulated, though it's first article received 20k views._
>
> Prominent Article - [Becoming Productive in Haskell](http://mechanical-elephant.com/thoughts/2015-04-20-becoming-productive-in-haskell/)


[__The Wise Manatee__](http://wise-manatee.com) • _Web Experiment_

>  _This was an art installation I created using ReactJS.  It is a manatee that gives encouraging, sometimes funny programming advice.  Mostly people just think it's bizarre.  And, of course, I agree._



__[Fill in the Blank Media](http://www.fillintheblankmedia.com/)__ • _Example from Freelance Work_

> _A videographer's website using the `Django` framework, and `Postgres`.  Behind the scenes it has batch video transcoding using a message queue and ffmpeg, which saves the owners some time in uploading._

__University of California Santa Cruz__

>  _Bachelors of Science in Biology_
>
> _Used `PERL` to interpret Nuclear Magnetic Resonance data. This is data that can be used to reconstruct a chemical structure based on magnetic vibrations in certain atoms._



<span class="strikethrough">Interests</span>
---------

__Rockclimbing__

> _I find rockclimbing to be great complementary to programming.  Being able to step away from the computer, engage in a different, physical puzzle, and then return to the computer, turns out to be very useful in solving heavy problems.  _

__Music__

> _Beyond what I'm doing with my project Songwise mentioned above, I play guitar and hope to learn the keyboard in the near future._

__Aquaculture__

> _Going back to my degree in biology I have an interest in the environment and biological processes.  More recently I've been interested in developments in aquaculture such as those [detailed in this article](https://medium.com/invironment/an-army-of-ocean-farmers-on-the-frontlines-of-the-blue-green-economic-revolution-d5ae171285a3#.i8ephj9sw)._

__Cryptocurrencies__

> _I've been following the development of Bitcoin for quite a while now and am intrigued by the possibilities that the blockchain technology could provide._


"""
