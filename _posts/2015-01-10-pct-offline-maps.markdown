---
layout: post
title: PCT Offline Maps
date: '2015-01-10T13:38:00.000-08:00'
author: Noam Gal
tags:
- Offline Maps
- USA Topo
- BackCountry Navigator
- GPS
- Halfmile
modified_time: '2015-06-19T09:59:58.939-07:00'
thumbnail: http://3.bp.blogspot.com/-yRQjo0FzpE4/VLGYLwfJTmI/AAAAAAAFXTY/6cytZzlpRsw/s72-c/2015-01-10%2B21.17.33.png
blogger_id: tag:blogger.com,1999:blog-8715620883377891841.post-8831418205025570707
blogger_orig_url: http://pct14.blogspot.com/2015/01/pct-offline-maps.html
---

Before hiking the PCT, I got hold of a very nice and comfortable file containing all the maps along the PCT. I got it from a friend, and I don't know how he got it, but it was very helpful indeed, especially when I used it along with [BackCountry Navigator](https://play.google.com/store/apps/details?id=com.crittermap.backcountrynavigator.licensehl=en) and the GPX files from [Halfmile's site](http://www.pctmap.net/gps/).

The past week, I've been fiddling around with creating a similar file myself, so I can freely post it over here, and distribute it to anyone who might want it. This post might get a bit too technical, so if you are here is just for the file,

##[It's in here](http://goo.gl/Riers6) (637Mb)
(Download on your home computer, or via Wi-Fi) Here's how to use the file as a map source in BackCountry Navigator:

1. Copy it into your Android phone, under the bcnav\atlases folder .

{% include image.html src="http://3.bp.blogspot.com/-yRQjo0FzpE4/VLGYLwfJTmI/AAAAAAAFXTY/6cytZzlpRsw/s1600/2015-01-10%2B21.17.33.png" caption="" %}

2. Inside BackCountry Navigator, tap on the "Layers" icon at the top

{% include image.html src="http://2.bp.blogspot.com/-vuJVmThVJBE/VLGYKQ1mMwI/AAAAAAAFXTA/Zp1BfNhJBT4/s1600/2015-01-10%2B21.17.39.png" caption="" %}

3. Tap on "More Map Sources..."

{% include image.html src="http://2.bp.blogspot.com/-3n9glK4vAsk/VLGYKYoOBfI/AAAAAAAFXTE/lfjd_S2LXEc/s1600/2015-01-10%2B21.17.50.png" caption="" %}

4. Tap on "Use Mobile Atlas" and select the file.

{% include image.html src="http://1.bp.blogspot.com/-Z4-AVvbS6Jo/VLGYLEiLBOI/AAAAAAAFXTI/oLZ7SYtAAJ8/s1600/2015-01-10%2B21.18.03.png" caption="" %}

You will now have good quality topographical maps all along the trail, from Mexico to Canada. All you have to do now, is import the GPX files from Halfmile's site, and see the trail, side trails and waypoints, directly on the map.

###And now, to the technical bits -
At first, I looked around the internet for the source of the file I originally had. I quickly found [OpenStreetMap](https://www.openstreetmap.org/) and [OpenCycleMap](http://opencyclemap.org/) as available map tile resources (though they do not freely allow bulk download of tiles). The OpenCycleMap project does show elevation lines, and would be appropriate for navigation while hiking.

I needed to go over the whole trail (a collection of lat/long coordinates), and for each such coordinate, download the appropriate map tiles, on different zoom levels (zoom level 0 is the entire world. zoom level 15 is a very well detailed map of about 4.7 meters per pixel, or 5.2 yards per pixel). Since the trail is continuous, many coordinates will appear on the same tile, so I'll only have to download tiles I haven't downloaded before.

Searching some more on the internet, I found the excellent free application [Mobile Atlas Creator](http://mobac.sourceforge.net/) (MOBAC), which is doing exactly what I was looking for - it can take in data from GPX files (but not Google Earth KML/KMZ), select a map source, and pick all the needed tiles to download from the source. Then, it can create an Atlas, for different navigation applications. It already has a setting for BackCountry Navigator sqlite format, which was just what I was looking for. But if anybody here needs the offline file for a different mapping application, I will gladly help with creating it as well.

I had one major problem with using MOBAC - it did not contain the tile server source I was looking for.

Searching around some more, I ran into [CalTopo](http://caltopo.com/), another nice site which allows different tiling servers to be displayed inside the browser. I finally found the source I was looking for, while looking around in their different options. It was [ArcGIS USA Topo Maps](http://www.arcgis.com/home/item.html?id=99cd5fbd98934028802b4f797c4b1732). Success!

That was the bit where I started writing my own code, and putting up a simple application that reads a KML/KMZ file, calculates all the tiles it needs to download, and downloads it all from a selected map source. I had fun writing this app, and I think I will still improve upon it. But two days ago I realized I can just add this map source to use in MOBAC, and it deal with the entire downloading and packaging the result for me.

So yesterday and today I did just that. I let MOBAC do the heavy lifting. Another annoying thing in MOBAC is that it only lets you select tiles along a single track every time, so I downloaded the code, and changed it a bit to allow adding multiple tracks at the same time. It made making the Atlas much easier.

I kept getting a huge Atlas as a result, though. My original file was ~500Mb, and I kept getting files that were more around 4000Mb. That's quite a big difference. I kept fighting with it today, until I finally realized that MOBAC was downloading the tiles as JPG files from the tile server, and then converts them into PNG files, which increases their size (And not their quality). After realizing that, I've finally been able to create this file here, for the enjoyment of every future PCT hiker!

I will make similar files for other trails as well (AT, CDT, JMT, for start. And also the INT and some trails in Europe, but with different map sources). I will also gladly help anyone needing those files to be in different output format, for other mobile navigation apps. Don't hesitate to ask!
