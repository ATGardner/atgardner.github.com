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
mapName: cdt
---
I have been playing around with CDT data over the weekend, and figured out I'd share what I made so that other people can use and enjoy it.

{% include image.html src="https://4.bp.blogspot.com/-FK7dlDg9rEI/Vt1HFBMSY0I/AAAAAAAFq3w/vt8f-u89Vug/s1600/cdt.png" %}

I had used several sources for my files -

* [Bear Creek Survey] 2016 GPX files
* [Jonathan Ley 2014] GPX files
* [Continental Divide Trail Coalition Interactive Map] KML file (Which includes water sources and trailheads layers from BCS)

I have imported all the data into [Google Earth] KML format, cleaned it up (removed Timestamp data, fixed some line styles), and split it all up to separate files for each state/layer/source. I then made some compilation files.

I have made a separate file for each state, to make it easier to use on mobile apps - [New Mexico], [Colorado], [Wyoming] and [Montana]. I have also created a single file for the [whole trail].

I have also kept separate files for every state/source/layer combination, so you can also mix and match anything you'd like, from my [Google Drive] folder.

I have also used my [Offline Map File Generator] (OMFG) to generate offline map files for the CDT using USA Topo Maps source (Copyright:© 2013 National Geographic Society, i-cubed) for both [Backcountry Navigator] and [Orux Maps] (Both for Android).

<div id="map-cdt"></div>

This map shows the trail layer (with alternates), using the same map tile data I used for creating the offline files, so you can zoom in and out, and see what you will get on your Android phone. The main difference is that the offline files contain only the trail corridor, to keep the file size manageable.

#### Disclaimer

All the data was used "as-is", and I do not take responsibility for its correctness. Please use your judgment when navigating along the trail (or anywhere else). Any errors or omissions I made in the process of compiling the files are my own. The "Water Report" layer from the CDTC source is not updated, so do not count on the reports found there while hiking the trail. Visit the [Water Report] page for up-to-date information.

#### Here are the files:

[BCNav] (842MB)
[Orux] (877MB)

A detailed walk-through on how to use these files with Backcountry Navigator or Orux Maps can be found [here].

Share and enjoy!

[Bear Creek Survey]: http://www.bearcreeksurvey.com/but_ct_waypoints.htm
[Jonathan Ley 2014]: http://www.phlumf.com/travels/cdt/cdtmaps.shtml
[Continental Divide Trail Coalition Interactive Map]: http://continentaldividetrail.org/cdnst-interactive-map/
[Google Earth]: https://www.google.com/earth/
[New Mexico]: https://drive.google.com/file/d/0B_DXc1YJDxkHZVdWSmpCbDR3X28/view?usp=sharing&resourcekey=0-VsptkAEyNkmDVROYSqpG-g
[Colorado]: https://drive.google.com/file/d/0B_DXc1YJDxkHRGxNOFNEQU00elE/view?usp=sharing&resourcekey=0-JVtmkuGcIyiuiSDtSFiWNw
[Wyoming]: https://drive.google.com/file/d/0B_DXc1YJDxkHblB4WFJHbUVwa28/view?usp=sharing&resourcekey=0-KICLLcBRIomG_FcNvXbIrQ
[Montana]: https://drive.google.com/file/d/0B_DXc1YJDxkHRFJocWxpa3JCZDA/view?usp=sharing&resourcekey=0-M5sr8iZAmtpyWEzb0nIWfQ
[whole trail]: https://drive.google.com/file/d/0B_DXc1YJDxkHRWZKUW1FcEdrMW8/view?usp=sharing&resourcekey=0-UM9xZ6fGXndIsxOg30Yqkw
[Google Drive]: https://drive.google.com/drive/folders/0B_DXc1YJDxkHUXFsYTY2MGwxazg?resourcekey=0-UTmrfaAYcb7QIbs9d1tIHQ&usp=sharing
[Offline Map File Generator]: http://atgardner.github.io/OfflineMapFileGenerator/
[Backcountry Navigator]: http://backcountrynavigator.com/
[Orux Maps]: http://www.oruxmaps.com/index_en.html
[Water Report]: http://continentaldividetrail.org/water-report/
[BCNav]: https://storage.googleapis.com/atgardner/CDT%20-%20USA%20Topo%20Maps%20-%200-15%20-%20BCNav.zip
[Orux]: https://storage.googleapis.com/atgardner/CDT%20-%20USA%20Topo%20Maps%20-%200-15%20-%20MBTiles.zip
[here]: {{ site.baseurl }}{% link pages/offline-maps.markdown %}
