---
layout: post
title: Te Araroa Offline Map Files
date: '2015-10-31T00:01:00.000-07:00'
author: Noam Gal
tags:
- Offline Maps
- Landcare Research
- LINZ
- Te Araroa
- OMFG
- TA
- MOBAC
modified_time: '2016-10-09T22:39:11.609-07:00'
blogger_id: tag:blogger.com,1999:blog-8715620883377891841.post-8407925655741856168
blogger_orig_url: http://pct14.blogspot.com/2015/10/te-araroa-offline-map-files.html
---
<style>
.linz {
    background-color: #D1E7F5;
}

.landcare {
    background-color: #83A7B8;
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ol3/3.18.2/ol-debug.js" type="text/javascript"></script>
<script src="https://unpkg.com/ol-wrapper@0.5.7/dist/ol-wrapper.min.js" type="text/javascript"></script>
<script src="https://storage.googleapis.com/atgardner-blog/trails.bundle.js" type="text/javascript"></script>
<script> trails.loadMap('ta', 'map-ta') </script>

A while ago a friend of mine asked for some help in getting maps for his upcoming [Te Araroa] hike, on his smart phone. I decided to create an offline map file for his use, and I am now sharing it with anyone else who might be interested.

{% include image.html src="https://3.bp.blogspot.com/-MLETxPNRjS8/VvTE5LSoJxI/AAAAAAAFrNA/myZYYDnFkN822_JZmSvedv6CtmbsHyEjA/s1600/TA.png" %}

I started out by researching the services offered by [Landcare Research], and ended up using their TMS Tile servers for the Topo Base Map and a Text layer on top of it, to create a useful map of the trail. I wanted to use my own little app ([OMFG]) to download the tiles and create the offline map file, but unfortunately it can not handle creating a single map file from two tile sources (topo + text). So I ended up using the excellent [MOBAC] app, after making some minor code improvements. On smaller zoom levels, the map seems a bit empty, but at the zoom levels most people would normally navigate (13-15), it shows all the elevation contours, streams and rivers, roads and place names. It seems like a good map to have handy, on such a long trail.

I later bumped into a post on Facebook that directed me to [this] site. The site offers offline maps for what I assume is the whole of New Zealand, in two separate files. One for each Island. Each file is around 1GB in size. That’s pretty big, though it’s still very useful. I looked at the data source for those maps, and found the [Land Information New Zealand] web site and web services, which offered a different set of map tiles than the ones I used for my first file. This time, I was able to use my own app to create an offline map file that uses their Topo250 data for zoom levels of 0-11, and the Topo50 data for zoom levels of 12-15 (I chose the grid-less option, to remove some clutter from the map).

<div id="map-ta" class="map linz"></div>

Here is a view on the data I used for my files. You can switch between the two sources by hovering over that blue button at the top right of the map. Notice that this interactive map will show all of New Zealand, so you can zoom in and out anywhere you’d like, on either island. But the offline files only contain the trail corridor itself (and ~1.5Km around it). You can switch the layers to see the difference in the maps themselves. Make sure you check out the higher zoom levels, to really decide which one you prefer.

In my opinion, the LINZ map looks a bit better than the Landcare one, but If I had to chose, I’d take both of them with me, and alternate according to my needs. Each file is 478MB, so I was able to get a good size for the entire TA. The only thing that is bothering me with those maps, is that in lower zoom levels (check out around 8-11), the trail corridor seems a bit too narrow. I thought about maybe adding the whole of New Zealand at those levels, just to get a better understanding of your whereabouts in comparison to places a bit further away from you. If there is a need for such an improvement, I can give it a shot. Don’t hesitate to ask.
 
### DISCLAIMER:

Please double check that the files contain all the mapping data you might need while on the trail. Mistakes might have been made (and probably were made) during the file's creation, so don't rely only on them on your hike. Have backup maps in case your phone's power run out, or the files don't contain a required section. Use your own judgement.

### Here are the files:

Both versions follow the trail corridor defined by the TeAraroaTrail_asTrack.gpx file from [here]. I am sure you can use the other
 versions on that site, as they should all follow the same route.
* [Land Information (BCNav)] (474MB)
* [Landcare Research (BCNav)] (472MB)
* [Land Information (Orux)] (474MB)
* [Landcare Research (Orux)] (390MB)

A detailed walk-through on how to use these files with [Backcountry Navigator] or [Orux Maps] can be found [here].

[Te Araroa]: http://www.teararoa.org.nz/
[Landcare Research]: http://maps.scinfo.org.nz/
[OMFG]: http://atgardner.github.io/OfflineMapFileGenerator/
[MOBAC]: http://mobac.sourceforge.net/
[this]: https://sites.google.com/site/irnzmaps/
[Land Information New Zealand]: https://data.linz.govt.nz/
[Land Information (BCNav)]: https://storage.googleapis.com/atgardner/TA%20-%20Land%20Information%20-%200-15%20-%20BCNav.zip
[Landcare Research (BCNav)]: https://storage.googleapis.com/atgardner/TA%20-%20Landcare%20Research%20-%200-15%20-%20BCNav.zip
[Land Information (Orux)]: https://storage.googleapis.com/atgardner/TA%20-%20Landcare%20Research%20-%200-15%20-%20MBTiles.zip
[Landcare Research (Orux)]: https://storage.googleapis.com/atgardner/TA%20-%20Land%20Information%20-%200-15%20-%20MBTiles.zip
[Backcountry Navigator]: http://backcountrynavigator.com/
[Orux Maps]: http://www.oruxmaps.com/
[here]: http://pct14.blogspot.co.il/p/offline-maps.html