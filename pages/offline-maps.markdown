---
layout: page
title: Offline Maps
weight: 5
---

I have big plans to create a nice web service that allows anyone to download an
offline map file for any trail of his or her choosing. Since I am a terrible
procrastinator (or a great one), I decided to start by adding some value,
instead of planning too big. So here are some map files I already made, for your
pleasure:

| Trail                                  | Size (MB) |          Tile Source           |            BCNav            |         Orux Maps          |  Updated   |
| -------------------------------------- | :-------: | :----------------------------: | :-------------------------: | :------------------------: | :--------: |
| [Alta Via 1 - (dolomita)][av1d]        |    13     |       [OpenTopoMap][otm]       |     [link][av1d-bcnav]      |     [link][av1d-orux]      | 2018-09-18 |
| [Alta Via 2 - (dolomita)][av2d]        |    18     |       [OpenTopoMap][otm]       |     [link][av2d-bcnav]      |     [link][av2d-orux]      | 2018-09-18 |
| [Appalachian Trail][at]                |    259    | [CalTopo Mapbuilder Topo][mbt] |      [link][at-bcnav]       |      [link][at-orux]       | 2018-01-03 |
| [Arizona Trail][azt]                   |    93     | [CalTopo Mapbuilder Topo][mbt] |      [link][azt-bcnav]      |      [link][azt-orux]      | 2018-01-03 |
| [Baja Divide Trail][bdt]               |    187    |       [OpenTopoMap][otm]       |      [link][bdt-bcnav]      |      [link][bdt-orux]      | 2018-01-03 |
| [Colorado Trail][ct]                   |    83     | [CalTopo Mapbuilder Topo][mbt] |      [link][ct-bcnav]       |      [link][ct-orux]       | 2018-01-03 |
| [Continental Divide Trail][cdt]        |    371    | [CalTopo Mapbuilder Topo][mbt] |      [link][cdt-bcnav]      |      [link][cdt-orux]      | 2018-01-03 |
| [GR10][gr10]                           |    222    |       [OpenTopoMap][otm]       |     [link][gr10-bcnav]      |     [link][gr10-orux]      | 2018-09-10 |
| [GR11][gr11]                           |    204    |       [OpenTopoMap][otm]       |     [link][gr11-bcnav]      |     [link][gr11-orux]      | 2018-09-10 |
| [GR20][gr20]                           |    49     |       [OpenTopoMap][otm]       |     [link][gr20-bcnav]      |     [link][gr20-orux]      | 2018-09-11 |
| [Haute Route Pyrenees][hrp]            |    255    |       [OpenTopoMap][otm]       |      [link][hrp-bcnav]      |      [link][hrp-orux]      | 2018-09-10 |
| gr10/11/hrp                            |    494    |       [OpenTopoMap][otm]       | [link][gr10-gr11-hrp-bcnav] | [link][gr10-gr11-hrp-orux] | 2018-09-10 |
| [Hayduke Trail][hdt]                   |    164    | [CalTopo Mapbuilder Topo][mbt] |      [link][hdt-bcnav]      |      [link][hdt-orux]      | 2018-01-03 |
| [Israel National Trail][int] (English) |    663    |    [Israel Hiking Map][ihm]    |    [link][int-bcnav-en]     |    [link][int-orux-en]     | 2018-09-11 |
| [Israel National Trail][int] (Hebrew)  |    662    |    [Israel Hiking Map][ihm]    |    [link][int-bcnav-he]     |    [link][int-orux-he]     | 2018-09-11 |
| [John Muir Trail][jmt]                 |    31     | [CalTopo Mapbuilder Topo][mbt] |      [link][jmt-bcnav]      |      [link][jmt-orux]      | 2018-01-03 |
| [Pacific Crest Trail][pct]             |    537    | [CalTopo Mapbuilder Topo][mbt] |      [link][pct-bcnav]      |      [link][pct-orux]      | 2018-01-03 |
| [Sunshine Coast Trail][sct]            |    17     |       [OpenTopoMap][otm]       |      [link][sct-bcnav]      |      [link][sct-orux]      | 2018-01-03 |
| [Te Araroa][ta]                        |    711    |    [Land Information][linz]    |      [link][ta-bcnav]       |      [link][ta-orux]       | 2018-01-03 |
| [Tour du Mont Blanc][tmb]              |    30     |       [OpenTopoMap][otm]       |      [link][tmb-bcnav]      |      [link][tmb-orux]      | 2018-01-03 |
| [Walker's Haute Route][whr]            |    51     |       [OpenTopoMap][otm]       |      [link][whr-bcnav]      |      [link][whr-orux]      | 2018-01-03 |

Let me know if you want any more trails or tile sources or general help on how
to use these map files.

Here is a short walk-through explaining how to use the offline map files with
[Backcountry Navigator](#backcountry-navigator) or [Orux Maps](#orux-maps). The
gpx/kml file in step 1 refers to the file I used to generate the map file from,
usually downloaded from the specific trail's web site. The sqlitedb/mbtiles file
refers to the file extracted from the zip downloaded from my blog.

## [Backcountry Navigator]

1.  Copy the gpx or kml file to your Android’s “Downloads” folder
1.  Copy the sqlitedb file to your Android’s “bcnav\atlases” folder
1.  Launch Backcounty Navigator
1.  Tap the menu icon 11 {% include image.html src="/assets/images/bcnav 4.png"
    class="screen-shot" %}
1.  Tap “Trip Database” {% include image.html src="/assets/images/bcnav 5.png"
    class="screen-shot" %}
1.  Tap “Create a new (empty) trip database” {% include image.html
    src="/assets/images/bcnav 6.png" class="screen-shot" %}
1.  Give it a meaningful name
1.  Tap "OK" {% include image.html src="/assets/images/bcnav 8.png"
    class="screen-shot" %}
1.  Tap the menu icon again
1.  Tap “Trip Database” again
1.  Tap “Import Tracks or Waypoints” {% include image.html
    src="/assets/images/bcnav 11.png" class="screen-shot" %}
1.  Select the gpx or kml file you placed in step 1
1.  Select the trip database you created in step 7 {% include image.html
    src="/assets/images/bcnav 13.png" class="screen-shot" %}
1.  Tap “Start Import” {% include image.html src="/assets/images/bcnav 14.png"
    class="screen-shot" %}
1.  Tap the “Map Layers” icon {% include image.html src="/assets/images/bcnav
    15.png" class="screen-shot" %}
1.  Check the “Prebuilt Map” check box {% include image.html
    src="/assets/images/bcnav 16.png" class="screen-shot" %}
1.  Tap the “Browse” button {% include image.html src="/assets/images/bcnav
    17.png" class="screen-shot" %}
1.  Select the sqlitedb file you placed in step 2 {% include image.html
    src="/assets/images/bcnav 18.png" class="screen-shot" %}

## [Orux Maps]

1.  Copy the gpx or kml file to your Android’s “oruxmaps\tracklogs” folder
1.  Copy the mbtiles file to your Android’s “oruxmaps\mapfiles” folder
1.  Launch Orux Maps
1.  Tap the “Tracks” icon {% include image.html src="/assets/images/orux 4.png"
    class="screen-shot" %}
1.  Tap the “Load KML/GPX file” menu option {% include image.html
    src="/assets/images/orux 5.png" class="screen-shot" %}
1.  Select the gpx or kml file you placed in step 1 {% include image.html
    src="/assets/images/orux 6.png" class="screen-shot" %}
1.  Tap on “OK” {% include image.html src="/assets/images/orux 7.png"
    class="screen-shot" %}
1.  Tap the “Maps” icon {% include image.html src="/assets/images/orux 8.png"
    class="screen-shot" %}
1.  Tap the “Switch map” menu option  
    {% include image.html src="/assets/images/orux 9.png" class="screen-shot" %}
1.  Tap the “Offline” tab {% include image.html src="/assets/images/orux 10.png"
    class="screen-shot" %}
1.  Select the mbtiles file you placed in step 2 {% include image.html
    src="/assets/images/orux 11.png" class="screen-shot" %}

[av1d]: https://hiking.waymarkedtrails.org/#route?id=177743
[av1d-bcnav]: https://storage.googleapis.com/atgardner/AV1%20Dolomites%20-%20OpenTopoMaps%20-%201-14%20-%20BCNav.zip
[av1d-orux]: https://storage.googleapis.com/atgardner/AV1%20Dolomites%20-%20OpenTopoMaps%20-%201-14%20-%20Orux.zip
[av2d]: https://hiking.waymarkedtrails.org/#route?id=404914
[av2d-bcnav]: https://storage.googleapis.com/atgardner/AV2%20Dolomites%20-%20OpenTopoMaps%20-%201-14%20-%20BCNav.zip
[av2d-orux]: https://storage.googleapis.com/atgardner/AV2%20Dolomites%20-%20OpenTopoMaps%20-%201-14%20-%20Orux.zip
[at]: http://www.appalachiantrail.org/home/explore-the-trail
[at-bcnav]: https://storage.googleapis.com/atgardner/Appalachian%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20BCNav.zip
[at-orux]: https://storage.googleapis.com/atgardner/Appalachian%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20Orux.zip
[azt]: http://www.aztrail.org/interactive_map.php
[azt-bcnav]: https://storage.googleapis.com/atgardner/Arizona%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20BCNav.zip
[azt-orux]: https://storage.googleapis.com/atgardner/Arizona%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20Orux.zip
[bdt]: https://bajadivide.com/mapping/
[bdt-bcnav]: https://storage.googleapis.com/atgardner/Baja%20Divide%20Trail%20-%20OpenTopoMap%20-%201-15%20-%20BCNav.zip
[bdt-orux]: https://storage.googleapis.com/atgardner/Baja%20Divide%20Trail%20-%20OpenTopoMap%20-%201-15%20-%20Orux.zip
[ct]: http://bearcreeksurvey.com/but_ct_waypoints.htm
[ct-bcnav]: https://storage.googleapis.com/atgardner/Colorado%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20BCNav.zip
[ct-orux]: https://storage.googleapis.com/atgardner/Colorado%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20Orux.zip
[cdt]: http://continentaldividetrail.org/cdt-data/
[cdt-bcnav]: https://storage.googleapis.com/atgardner/Continental%20Divide%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20BCNav.zip
[cdt-orux]: https://storage.googleapis.com/atgardner/Continental%20Divide%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20Orux.zip
[gr10]: https://hiking.waymarkedtrails.org/#route?id=7411272
[gr10-bcnav]: https://storage.googleapis.com/atgardner/GR10%20-%20OpenTopoMap%20-%201-15%20-%20BCNav.zip
[gr10-orux]: https://storage.googleapis.com/atgardner/GR10%20-%20OpenTopoMap%20-%201-15%20-%20Orux.zip
[gr11]: https://hiking.waymarkedtrails.org/#route?id=380905
[gr11-bcnav]: https://storage.googleapis.com/atgardner/GR11%20-%20OpenTopoMap%20-%201-15%20-%20BCNav.zip
[gr11-orux]: https://storage.googleapis.com/atgardner/GR11%20-%20OpenTopoMap%20-%201-15%20-%20Orux.zip
[gr20]: https://hiking.waymarkedtrails.org/#route?id=101692
[gr20-bcnav]: https://storage.googleapis.com/atgardner/GR20%20-%20OpenTopoMap%20-%201-15%20-%20BCNav.zip
[gr20-orux]: https://storage.googleapis.com/atgardner/GR20%20-%20OpenTopoMap%20-%201-15%20-%20Orux.zip
[gr10-gr11-hrp-bcnav]: https://storage.googleapis.com/atgardner/GR10%2C%20GR11%2C%20HRP%20-%20OpenTopoMap%20-%201-15%20-%20BCNav.zip
[gr10-gr11-hrp-orux]: https://storage.googleapis.com/atgardner/GR10%2C%20GR11%2C%20HRP%20-%20OpenTopoMap%20-%201-15%20-%20Orux.zip
[hrp]: https://hiking.waymarkedtrails.org/#route?id=2018553
[hrp-bcnav]: https://storage.googleapis.com/atgardner/HRP%20-%20OpenTopoMap%20-%201-15%20-%20BCNav.zip
[hrp-orux]: https://storage.googleapis.com/atgardner/HRP%20-%20OpenTopoMap%20-%201-15%20-%20Orux.zip
[hdt]: http://www.hayduketrail.org/Maps.html
[hdt-bcnav]: https://storage.googleapis.com/atgardner/Hayduke%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20BCNav.zip
[hdt-orux]: https://storage.googleapis.com/atgardner/Hayduke%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20Orux.zip
[int]: https://hiking.waymarkedtrails.org/#route?id=282071
[int-bcnav-en]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%2C%20en%20-%207-15%20-%20BCNav.zip
[int-orux-en]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%2C%20en%20-%207-15%20-%20Orux.zip
[int-bcnav-he]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%2C%20he%20-%207-15%20-%20BCNav.zip
[int-orux-he]: https://storage.googleapis.com/atgardner/INT%20-%20Israel%20Hiking%20Map%2C%20he%20-%207-15%20-%20Orux.zip
[jmt]: https://hiking.waymarkedtrails.org/#route?id=1244828
[jmt-bcnav]: https://storage.googleapis.com/atgardner/John%20Muir%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%201-15%20-%20BCNav.zip
[jmt-orux]: https://storage.googleapis.com/atgardner/John%20Muir%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%201-15%20-%20Orux.zip
[pct]: https://www.pctmap.net/google/
[pct-bcnav]: https://storage.googleapis.com/atgardner/Pacific%20Crest%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20BCNav.zip
[pct-orux]: https://storage.googleapis.com/atgardner/Pacific%20Crest%20Trail%20-%20CalTopo%20MapBuilder%20Topo%20-%208-15%20-%20Orux.zip
[sct]: https://hiking.waymarkedtrails.org/#route?id=7406716
[sct-bcnav]: https://storage.googleapis.com/atgardner/Sunshine%20Coast%20Trail%20-%20OpenTopoMap%20-%201-15%20-%20BCNav.zip
[sct-orux]: https://storage.googleapis.com/atgardner/Sunshine%20Coast%20Trail%20-%20OpenTopoMap%20-%201-15%20-%20Orux.zip
[ta]: https://www.teararoa.org.nz/downloads/
[ta-bcnav]: https://storage.googleapis.com/atgardner/Te%20Araroa%20-%20NZ%20Topo50%20-%200-15%20-%20BCNav.zip
[ta-orux]: https://storage.googleapis.com/atgardner/Te%20Araroa%20-%20NZ%20Topo50%20-%200-15%20-%20Orux.zip
[tmb]: https://hiking.waymarkedtrails.org/#route?id=6436417
[tmb-bcnav]: https://storage.googleapis.com/atgardner/Tour%20du%20Mont%20Blanc%20-%20OpenTopoMap%20-%201-15%20-%20BCNav.zip
[tmb-orux]: https://storage.googleapis.com/atgardner/Tour%20du%20Mont%20Blanc%20-%20OpenTopoMap%20-%201-15%20-%20Orux.zip
[whr]: https://hiking.waymarkedtrails.org/#route?id=7383151
[whr-bcnav]: https://storage.googleapis.com/atgardner/Walker's%20Haute%20Route%20-%20OpenTopoMap%20-%201-15%20-%20BCNav.zip
[whr-orux]: https://storage.googleapis.com/atgardner/Walker's%20Haute%20Route%20-%20OpenTopoMap%20-%201-15%20-%20Orux.zip
[otm]: https://hiking.waymarkedtrails.org/
[mbt]: https://caltopo.com/map.html#b=mbt
[ihm]: https://israelhiking.osm.org.il/
[linz]: https://www.topomap.co.nz/
[backcountry navigator]: http://backcountrynavigator.com/
[orux maps]: http://www.oruxmaps.com/
