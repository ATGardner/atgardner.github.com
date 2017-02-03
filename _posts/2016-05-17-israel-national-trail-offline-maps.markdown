---
layout: post
title: Israel National Trail Offline Maps
date: '2016-05-17T21:54:00.001-07:00'
author: Noam Gal
tags:
- Israel Hiking Maps
- Israel National Trail
- Orux Maps
- INT
- BackCountry Navigator
modified_time: '2016-10-09T22:04:54.123-07:00'
thumbnail: /assets/images/INT.png
blogger_id: tag:blogger.com,1999:blog-8715620883377891841.post-2707038442989582344
blogger_orig_url: http://pct14.blogspot.com/2016/05/israel-national-trail-offline-maps.html
mapName: int
---
Lets get it straight - I have never thru-hiked the entire Israel National Trail (INT). I started it in September 2008, and did almost half of it (The northern half. The easy half), before quitting. I still hope on finishing my hike someday, either by hiking from Eilat to Arad (should take ~3 weeks), or by doing the whole thing from the beginning again.

{% include image.html src="/assets/images/INT.png" %}

The INT is ~1000Km long (~620 miles), and goes from the northern tip of Israel (near Kibbutz Dan), towards the Kinneret (Sea of Galilee), westwards to Mt. Carmel and the Mediterranean sea, south along the Israeli shoreline towards Tel Aviv, and then back east almost reaching Jerusalem (It's close enough to allow hopping over into the city). Further south it enters the dreaded desert section, which contains long and hard stretches without any natural water sources, crosses many beautiful areas like the Small, Big and Ramon Craters, and finally reaches the southern most city in Israel - Eilat, by the Red Sea.

A great source of information about the INT can be found in its Wiki page. There's a [Trail Angels list], a list of [Services along the trail], and a list of [Water Sources in the Desert], all in English. There is also a lot of up-to-date information at the [Israel National Trail Forum], including a discount to a good guide book in English.

Unlike long trails in the US, there are no fixed water caches in the desert part of the trail, so be sure to understand that the "Water Cache" entries in the Water Sources list are only popular suggestions for places that people normally use for their own water caches. They do not contain any publicly available water, and caching water there would take time and/or money. It is possible to hike the trail without any caches, but it will require some detours to nearby settlements, and some 2-day water carries. Please do not go into the desert section without considering the options, and knowing what you are going into.

I have created an offline map file along the trail, using data from [OpenStreetMaps] (OSM), and the Hiking Map Rules of the [Israel Hiking Map]. I changed the rendering rules to use the English place name labels (where available), so that the map will be more useful for hikers from abroad.

<div id="map-int"></div>

You can get an updated gpx file of the entire trail using [this] link. This uses a [simple app] I wrote that exports an OSM relation to a gpx file directly from their servers. That link uses relationId 282071, which is the Id of the INT, but you can substitute it with any other relationId you might be interested in, if you want to download an updated gpx of some other trail.

#### Disclaimer

All the data was used "as-is", and I do not take responsibility for its correctness. Please use your judgment when navigating along the trail (or anywhere else). Any errors or omissions I made in the process of compiling the files are my own.

#### Here are the files:

* [BCNav, English](https://storage.googleapis.com/atgardner/INT - Israel Hiking Map, en - 7-15 - BCNav.zip) (534MB)
* [Orux, English](https://storage.googleapis.com/atgardner/INT - Israel Hiking Map, en - 7-15 - MBTiles.zip) (534MB)
* [BCNav, Hebrew](https://storage.googleapis.com/atgardner/INT - Israel Hiking Map - 7-15 - BCNav.zip) (533MB)
* [Orux, Hebrew](https://storage.googleapis.com/atgardner/INT - Israel Hiking Map - 7-15 - MBTiles.zip) (533MB)

A detailed walk-through on how to use these files with [Backcountry Navigator] or [Orux Maps] can be found [here].

Share and enjoy!

[Trail Angels list]: http://shvil.wikia.com/wiki/INT_Trail_Angels
[Services along the trail]: http://shvil.wikia.com/wiki/Services_on_the_INT
[Water Sources in the Desert]: http://shvil.wikia.com/wiki/Water_in_the_Negev
[Israel National Trail Forum]: http://israeltrail.myfastforum.org/
[OpenStreetMaps]: http://www.openstreetmap.org/
[Israel Hiking Map]: http://israelhiking.osm.org.il/
[this]: http://osmexport.azurewebsites.net/osm2gpx?relationId=282071
[simple app]: https://github.com/ATGardner/OSMExport
[BCNav, English]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%2C%20en%20-%207-15%20-%20BCNav.zip
[Orux, English]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%2C%20en%20-%207-15%20-%20MBTiles.zip
[BCNav, Hebrew]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%20-%207-15%20-%20BCNav.zip
[Orux, Hebrew]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%20-%207-15%20-%20MBTiles.zip
[Backcountry Navigator]: http://backcountrynavigator.com/
[Orux Maps]: http://www.oruxmaps.com/index_en.html
[here]: {{ site.baseurl }}{% link pages/offline-maps.markdown %}