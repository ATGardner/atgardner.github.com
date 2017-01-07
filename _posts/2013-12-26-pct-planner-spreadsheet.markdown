---
layout: post
title: PCT Planner Spreadsheet
date: '2013-12-26T13:08:00.002-08:00'
author: Noam Gal
tags:
- PCTPlanner
modified_time: '2015-06-17T13:07:27.840-07:00'
blogger_id: tag:blogger.com,1999:blog-8715620883377891841.post-5144151615507804020
blogger_orig_url: http://pct14.blogspot.com/2013/12/pct-planner-spreadsheet.html
---

I was playing around with the wonderful [PCT Planner](http://www.pctplanner.com/) web site, and I looked at the exported data it gave me. The file was in a simple [CSV](http://en.wikipedia.org/wiki/Comma-separated_values) format, which contained all the text and numbers of my plan, but without all the dependencies between them, so I imported it into Google Sheets, and started adding formulas in relevant places.

At first I went for the easy ones - The start point of every section, is the end point of the previous section. Easy enough. The Section Distance is the Base + Extra Distance. OK... And so it went. When I tried calculating the Base Hiking Days as the Base Distance / Daily Pace, I found out I got a different result than the one in the original CSV. Looking into the numbers and columns, I realized the days were factoring in that strange Elevation Gain Compensation value over there. It wasn't easy to wrap my head around it, but I finally figured out how to add it into my calculation -
_Base Hiking Days_ = (_Base Distance_ / (_Pace_ * _Hiking Hours_)) + (_Base EG_/1000)*(_EG Comp_/(60 * 8))
Phew. That's quite a mouthful. Good thing we have the Sheets engine to do it for us.

I added another 2 columns to the table, instead of the Exit Distance column, separating the distance between walking distance (Exit Walk) and hitching a ride distance (Exit Ride). I added the Exit Walk distance to the section's total.

To use it, first change the Start Date at the top row, and set the Pace/Hiking Hours and EG Comp values to your own. Changing each value will also change all the following rows, so it's also easy to change it during the hike, and see how your plan updates according to your new speed.

The best "trick" I added, was the first column - changing the value from TRUE would skip that section's end point, and combine its distance and elevation gain with the next row. This way it is easy to switch between different plans, and see how different town stops would effect the end result.

There are several small bugs, and I hope to improve it a bit more. But feel free to create a copy in your own Google Drive accounts, or just download it as an xlsx (Microsoft Excel) file, to play with, and plan your own hike.

[PCT Planner Spreadsheet](http://goo.gl/qdrKVH) 

{% include image.html src='http://3.bp.blogspot.com/-kYNKEn6kSzY/Ur092zhPbRI/AAAAAAADHMM/EO0YB_tVkGI/s1600/2013-12-26+19.50.24.jpg' caption="Caldera Keg (with a spare keg), fuel bottle, spork and lighter, and the meal I'm going to eat xxx" %}


Share and enjoy.
