---
layout: post
title: Continental Divide Trail Maps and Data
date: '2016-03-07T01:19:00.000-08:00'
author: Noam Gal
tags:
- CDT
- Ley
- CDTC
- Continental Divide Trail
- Orux Maps
- BackCountry Navigator
- Bear Creek Survey
modified_time: '2016-10-09T22:38:41.467-07:00'
thumbnail: https://4.bp.blogspot.com/-FK7dlDg9rEI/Vt1HFBMSY0I/AAAAAAAFq3w/vt8f-u89Vug/s72-c/cdt.png
blogger_id: tag:blogger.com,1999:blog-8715620883377891841.post-6796803695697531225
blogger_orig_url: http://pct14.blogspot.com/2016/03/continental-divide-trail-maps-and-data.html
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/ol3/3.18.2/ol-debug.js" type="text/javascript"></script>
<script src="https://unpkg.com/ol-wrapper@0.5.7/dist/ol-wrapper.min.js" type="text/javascript"></script>
<script src="https://storage.googleapis.com/atgardner-blog/trails.bundle.js" type="text/javascript"></script>
<script> trails.loadMap('cdt', 'map-cdt') </script>

I have been playing around with CDT data over the weekend, and figured out I'd share what I made so that other people can use and enjoy it.

{% include image.html src="https://4.bp.blogspot.com/-FK7dlDg9rEI/Vt1HFBMSY0I/AAAAAAAFq3w/vt8f-u89Vug/s1600/cdt.png" %}

I had used several sources for my files -

 <ul>
 <li>[Bear Creek Survey] 2016 GPX files
 </li>
 <li>[Jonathan Ley 2014] GPX files
 </li>
 <li>[Continental Divide Trail Coalition Interactive Map] KML file (Which includes water sources and trailheads layers from BCS)
 </li>
 </ul>

I have imported all the data into [Google Earth] KML format, cleaned it up (removed Timestamp data, fixed some line styles), and split it all up to separate files for each state/layer/source. I then made some compilation files.

I have made a separate file for each state, to make it easier to use on mobile apps - [New Mexico], [Colorado], [Wyoming] and [Montana]. I have also created a single file for the [whole trail].

I have also kept separate files for every state/source/layer combination, so you can also mix and match anything you'd like, from my [Google Drive] folder.

I have also used my [Offline Map File Generator] (OMFG) to generate offline map files for the CDT using USA Topo Maps source (Copyright:© 2013 National Geographic Society, i-cubed) for both [Backcountry Navigator] and [Orux Maps] (Both for Android).

<div id="map-cdt"></div>

This map shows the trail layer (with alternates), using the same map tile data I used for creating the offline files, so you can zoom in and out, and see what you will get on your Android phone. The main difference is that the offline files contain only the trail corridor, to keep the file size manageable.

### Disclaimer

All the data was used "as-is", and I do not take responsibility for its correctness. Please use your judgment when navigating along the trail (or anywhere else). Any errors or omissions I made in the process of compiling the files are my own. The "Water Report" layer from the CDTC source is not updated, so do not count on the reports found there while hiking the trail. Visit the [Water Report] page for up-to-date information.

### Here are the files:
[BCNav] (842MB)
[Orux] (877MB)

A detailed walk-through on how to use these files with Backcountry Navigator or Orux Maps can be found [here].

Share and enjoy!

[Bear Creek Survey]: http://www.bearcreeksurvey.com/but_ct_waypoints.htm
[Jonathan Ley 2014]: http://www.phlumf.com/travels/cdt/cdtmaps.shtml
[Continental Divide Trail Coalition Interactive Map]: http://continentaldividetrail.org/cdnst-interactive-map/
[Google Earth]: https://www.google.com/earth/
[New Mexico]: https://drive.google.com/open?id=0B_DXc1YJDxkHZVdWSmpCbDR3X28
[Colorado]: https://drive.google.com/open?id=0B_DXc1YJDxkHRGxNOFNEQU00elE
[Wyoming]: https://drive.google.com/open?id=0B_DXc1YJDxkHblB4WFJHbUVwa28
[Montana]: https://drive.google.com/open?id=0B_DXc1YJDxkHRFJocWxpa3JCZDA
[whole trail]: https://drive.google.com/open?id=0B_DXc1YJDxkHRWZKUW1FcEdrMW8
[Google Drive]: https://drive.google.com/open?id=0B_DXc1YJDxkHUXFsYTY2MGwxazg
[Offline Map File Generator]: http://atgardner.github.io/OfflineMapFileGenerator/
[Backcountry Navigator]: http://backcountrynavigator.com/
[Orux Maps]: http://www.oruxmaps.com/index_en.html
[Water Report]: http://continentaldividetrail.org/water-report/
[BCNav]: https://storage.googleapis.com/atgardner/CDT%20-%20USA%20Topo%20Maps%20-%200-15%20-%20BCNav.zip
[Orux]: https://storage.googleapis.com/atgardner/CDT%20-%20USA%20Topo%20Maps%20-%200-15%20-%20MBTiles.zip
[here]: http://pct14.blogspot.co.il/p/offline-maps.html
