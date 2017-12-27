---
layout: page
title: Offline Maps
weight: 5
---

I have big plans on creating a nice web service that allows anyone to create an offline map file for any trail of his choosing. Since I am a terrible procrastinator (or a great one), I decided to start by creating some value, instead of planning too big. So here are some map files I already created, for your pleasure:

| Trail                                  | Size (MB) |       Tile Source        |             BCNav             |            Orux Maps            | Updated  |
| -------------------------------------- | :-------: | :----------------------: | :---------------------------: | :-----------------------------: | :------: |
| [Continental Divide Trail][cdt]        |    877    | [USA Topo Maps][ustopo]  |                               |       [link][cdt-mbtiles]       | 02-13-17 |
| [Colorado Trail][ct]                   |    754    |  [MapBuilder Topo][mbt]  | [link][colorado-trail-bcnav]  | [link][colorado-trail-mbtiles]  | 09-05-17 |
| [Colorado Trail][ct]                   |    174    | [USA Topo Maps][ustopo]  | [link][colorado-trail-bcnav2] | [link][colorado-trail-mbtiles2] | 06-16-17 |
| [Israel National Trail][int] (Hebrew)  |    554    | [Israel Hiking Map][ihm] |     [link][int-bcnav-he]      |     [link][int-mbtiles-he]      | 02-13-17 |
| [Israel National Trail][int] (English) |    554    | [Israel Hiking Map][ihm] |     [link][int-bcnav-en]      |     [link][int-mbtiles-en]      | 02-13-17 |
| [John Muir Trail][jmt]                 |    765    |  [MapBuilder Topo][mbt]  |       [link][jmt-bcnav]       |                                 | 02-13-17 |
| [Pacific Crest Trail][pct]             |    534    |  [MapBuilder Topo][mbt]  |       [link][pct-bcnav]       |        [link][pct-orux]         | 08-02-17 |
| [Pacific Crest Trail][pct]             |    991    | [USA Topo Maps][ustopo]  |      [link][pct-bcnav2]       |                                 | 02-13-17 |
| [Te Araroa][ta]                        |    724    | [Land Information][linz] |       [link][ta-bcnav]        |         [link][ta-orux]         | 10-25-17 |
| [Tour du Mont Blanc][tmb]              |    153    | [Maperitive][maperitive] |       [link][tmb-bcnav]       |        [link][tmb-orux]         | 06-16-17 |
| [Walker's Haute Route][whr]            |    269    | [Maperitive][maperitive] |       [link][whr-bcnav]       |        [link][whr-orux]         | 02-13-17 |

Let me know if you want any more trails or tile sources or general help on how to use these map files.

Here is a short walk-through explaining how to use the offline map files with [Backcountry Navigator](#backcountry-navigator) or [Orux Maps](#orux-maps). The gpx/kml file in step 1 refers to the file I used to generate the map file from, usually downloaded from the specific trail's web site. The sqlitedb/mbtiles file refers to the file extracted from the zip downloaded from my blog.

## [Backcountry Navigator]

1. Copy the gpx or kml file to your Android’s “Downloads” folder
1. Copy the sqlitedb file to your Android’s “bcnav\atlases” folder
1. Launch Backcounty Navigator
1. Tap the menu icon 11
   {% include image.html src="/assets/images/bcnav 4.png" class="screen-shot" %}
1. Tap “Trip Database”
   {% include image.html src="/assets/images/bcnav 5.png" class="screen-shot" %}
1. Tap “Create a new (empty) trip database”
   {% include image.html src="/assets/images/bcnav 6.png" class="screen-shot" %}
1. Give it a meaningful name
1. Tap "OK"
   {% include image.html src="/assets/images/bcnav 8.png" class="screen-shot" %}
1. Tap the menu icon again
1. Tap “Trip Database” again
1. Tap “Import Tracks or Waypoints”
   {% include image.html src="/assets/images/bcnav 11.png" class="screen-shot" %}
1. Select the gpx or kml file you placed in step 1
1. Select the trip database you created in step 7
   {% include image.html src="/assets/images/bcnav 13.png" class="screen-shot" %}
1. Tap “Start Import”
   {% include image.html src="/assets/images/bcnav 14.png" class="screen-shot" %}
1. Tap the “Map Layers” icon
   {% include image.html src="/assets/images/bcnav 15.png" class="screen-shot" %}
1. Check the “Prebuilt Map” check box
   {% include image.html src="/assets/images/bcnav 16.png" class="screen-shot" %}
1. Tap the “Browse” button
   {% include image.html src="/assets/images/bcnav 17.png" class="screen-shot" %}
1. Select the sqlitedb file you placed in step 2
   {% include image.html src="/assets/images/bcnav 18.png" class="screen-shot" %}

## [Orux Maps]

1. Copy the gpx or kml file to your Android’s “oruxmaps\tracklogs” folder
1. Copy the mbtiles file to your Android’s “oruxmaps\mapfiles” folder
1. Launch Orux Maps
1. Tap the “Tracks” icon
   {% include image.html src="/assets/images/orux 4.png" class="screen-shot" %}
1. Tap the “Load KML/GPX file” menu option
   {% include image.html src="/assets/images/orux 5.png" class="screen-shot" %}
1. Select the gpx or kml file you placed in step 1
   {% include image.html src="/assets/images/orux 6.png" class="screen-shot" %}
1. Tap on “OK”
   {% include image.html src="/assets/images/orux 7.png" class="screen-shot" %}
1. Tap the “Maps” icon
   {% include image.html src="/assets/images/orux 8.png" class="screen-shot" %}
1. Tap the “Switch map” menu option  
   {% include image.html src="/assets/images/orux 9.png" class="screen-shot" %}
1. Tap the “Offline” tab
   {% include image.html src="/assets/images/orux 10.png" class="screen-shot" %}
1. Select the mbtiles file you placed in step 2
   {% include image.html src="/assets/images/orux 11.png" class="screen-shot" %}

[cdt]: http://continentaldividetrail.org/cdt-data/
[cdt-mbtiles]: https://storage.googleapis.com/atgardner/CDT%20-%20USA%20Topo%20Maps%20-%200-15%20-%20MBTiles.zip
[ct]: http://bearcreeksurvey.com/but_ct_waypoints.htm
[colorado-trail-bcnav]: https://storage.googleapis.com/atgardner/Colorado%20Trail%20-%20MapBuilder%20-%2010-15.sqlitedb
[colorado-trail-mbtiles]: https://storage.googleapis.com/atgardner/Colorado%20Trail%20-%20MapBuilder%20-%2010-15.mbtiles
[colorado-trail-bcnav2]: https://storage.googleapis.com/atgardner/CT%20-%20USA%20Topo%20Maps%20-%200-15%20-%20BCNav.zip
[colorado-trail-mbtiles2]: https://storage.googleapis.com/atgardner/CT%20-%20USA%20Topo%20Maps%20-%200-15%20-%20MBTiles.zip
[int]: https://hiking.waymarkedtrails.org/#route?id=282071
[int-bcnav-he]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%20-%207-15%20-%20BCNav.zip
[int-mbtiles-he]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%20-%207-15%20-%20MBTiles.zip
[int-bcnav-en]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%2C%20EN%20-%207-15%20-%20BCNav.zip
[int-mbtiles-en]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%2C%20EN%20-%207-15%20-%20MBTiles.zip
[jmt]: https://hiking.waymarkedtrails.org/#route?id=1244828
[jmt-bcnav]: https://storage.googleapis.com/atgardner/John%20Muir%20Trail%20-%20MapBuilder%20Topo%20-%2010-16.sqlitedb
[pct]: https://www.pctmap.net/google/
[pct-bcnav]: https://storage.googleapis.com/atgardner/PCT%20-%20MapBuilder%20Topo%20-%205-15%20-%20BCNav.zip
[pct-orux]: https://storage.googleapis.com/atgardner/PCT%20-%20MapBuilder%20Topo%20-%205-15%20-%20Orux.zip
[pct-bcnav2]: https://storage.googleapis.com/atgardner/PCT%20-%20USA%20Topo%20Maps%20-%200-15%20-%20BCNav.zip
[ta]: https://www.teararoa.org.nz/downloads/
[ta-bcnav]: https://storage.googleapis.com/atgardner/TA%20-%20Land%20Information%20-%200-15%20-%20BCNav.zip
[ta-orux]: https://storage.googleapis.com/atgardner/TA%20-%20Land%20Information%20-%200-15%20-%20MBTiles.zip
[tmb]: https://hiking.waymarkedtrails.org/#route?id=6436417
[tmb-bcnav]: https://storage.googleapis.com/atgardner/Tour%20du%20Mont%20Blanc%20-%20Maperitive%20-%2010-15%20-%20BCNav.zip
[tmb-orux]: https://storage.googleapis.com/atgardner/Tour%20du%20Mont%20Blanc%20-%20Maperitive%20-%2010-15%20-%20MBTiles.zip
[whr]: https://hiking.waymarkedtrails.org/#route?id=7383151
[whr-bcnav]: https://storage.googleapis.com/atgardner/Walker's%20Haute%20Route%20-%20Maperitive%20-%2010-15%20-%20BCNav.zip
[whr-orux]: https://storage.googleapis.com/atgardner/Walker's%20Haute%20Route%20-%20Maperitive%20-%2010-15%20-%20MBTiles.zip

[ustopo]: http://www.arcgis.com/home/webmap/viewer.html?url=http%3A%2F%2Fservices.arcgisonline.com%2Farcgis%2Frest%2Fservices%2FUSA_Topo_Maps%2FMapServer&source=sd
[mbt]: https://caltopo.com/map.html#b=mbt
[ihm]: https://israelhiking.osm.org.il/
[linz]: https://www.topomap.co.nz/
[maperitive]: http://maperitive.net/
[backcountry navigator]: http://backcountrynavigator.com/
[orux maps]: http://www.oruxmaps.com/
