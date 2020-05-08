---
path: "/blog/budget-hotdog-breakdown"
date: "2019-07-17"
title: "Budget Dancing Hot Dog Breakdown"
image: "budget_hotdog.jpg"
---

The dancing hot dog. It was before my time as a Snapchat user, but its popularity was such that I had seen it before.

One day I was browsing the r/SnapLenses subereddit when I came across [this post](https://www.reddit.com/r/SnapLenses/comments/ccimbu/budget_dancing_hotdog/) asking for a poorly drawn, poorly animated dancing hot dog. I thought the idea was interesting, and I'm not great at 3D yet so most of my stuff is poorly made and poorly animated. This sounded like the perfect project!

As I approached this lens, I first considered hand drawing a few different frames for the animation. This would certainly make the whole thing pretty bad, but I just wasn't feeling it.

I next considered using the new Grease Pencil features in Blender 2.8, but I haven't used the grease pencil before and I wasn't in the mood to learn.

So finally I settled on creating a bootleg version of the dancing hot dog in 3D, animating it, and then making it look hand-drawn.

I modeled and textured the hot dog easy enough, and then created a basic animation that mimics the original. I then exported everything and loaded it into Lens Studio. My original plan was to apply some post effects to just the hot dog to make it look like a drawing. I made sure the materials for the hot dog were unlit (so they were flat) and then used the edge detection, pixelization, and distortion post effects to make the final look. But I couldn't isolate my effects to just the hot dog. I tried all sorts of combinations of layers and render targets, but I just couldn't figure it out (if it even is possible).

Feeling somewhat defeated, I took a short break.

After working on something else for a few hours, I came back to the hot dog. This time I decided to do everything in Blender. I used emission shaders for all the materials to make the hot dog look flat. Then I turned on Freestyle, added a modifier to make the strokes a little jagged, and added in a blue background.

Once I rendered out the animation to an mp4, I imported it into the 3D animated object template in Lens Studio, [followed this excellent tutorial](https://www.youtube.com/watch?v=rQHXgSVO_xM) to add in a chroma key material on my animation (to remove the background), and added a few finishing touches like the shadow and making sure the hot dog always faces the camera.

Overall the budget dancing hot dog has received favorable reviews on Reddit. One user did recommend making the animation simpler, but I didn't like the result when I tried it so I stuck with the original.

You can [find the lens here.](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d12b8fd3cb614804bb6c4b5e96c4197a&metadata=01)
