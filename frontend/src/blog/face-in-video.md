---
path: "/blog/face-in-video-tracking-with-blender"
date: "2019-09-03"
title: "Face in Video Tracking With Blender"
image: "assets/face-in-video.jpg"
---

This is a quick tutorial on how to export face in video tracking data from Blender for use in Lens Studio. This is not a tutorial on how to use Blender, Python, or Lens Studio. That being said, the script is set up to provide a mostly painless experience. This tracking script replaces the use of After Effects in [this Lens Studio guide](https://lensstudio.snapchat.com/templates/face/face-in-video/).

First things first, download the [Blender template file from here](https://drive.google.com/open?id=1iHWmUKXBoQHXCjymChzohAAIkWxZanfd). Also, make sure you have at least [Blender 2.8 installed](https://www.blender.org). The scripting API changed between versions 2.79 and 2.80, so if you are using an older version of Blender you may have to squash out some bugs.

Once you have the file opened in Blender, make sure your video settings are correct. Check your x and y resolution, your framerate, and your start/end frames to make sure everything matches. Once all that looks good, let's get started with the tracking.

To make things easier for you, I've already added an empty named "LS_Tracker" that you can use for the tracking. The script will pull the location, y rotation, and scale of the empty for each frame. My recommended workflow is to import your video as a plane and then track the empty to the video. By tracking I don't mean the built-in camera tracker, I mean keyframing the empty (just in case there was any confusion). Once your empty is tracked to the video, head over to the scripting tab.

At the top of the script, there are a few variables that may need to be changed. The 'cam' variable is the name of the camera. This probably won't need to change. The 'tracker' variable refers to the object that is tracking to the video. Lastly, 'outfile_name' is the full path and name of the output tracking data. Set this to be whatever you want. If you are on Windows and you copy a folder path, make sure you escape the backslashes or convert them all to forward slashes.

Now all you have to do is hit the 'Run Script' button. The script runs really quick, so by the time you switch over to Lens Studio, the tracking data will be ready to import. At this point you can pick up where you left off in the official Face in Video guide.

To see an example of this script in action, [check out this lens](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=18780ea636234f15b040ec05eae0b39b&metadata=01). My tracking isn't great, but that's my fault, not the script's.

There are a few things to be aware of here.

-   Theoretically the tracking will still work even if the camera is moving, but I haven't tried it. I create the video separately and then track that.
-   Only rotation around the y-axis in Blender is being exported. If you are moving the camera during the tracking, be aware that your rotation values won't be good when you export.
-   Scaling happens on all three axes together. While you can scale each axis separately in Blender, I make the assumption in the script that you'll never actually do that.
