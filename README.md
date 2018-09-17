# galleryLeftOrRight
a gallery plugin, you can easily construct a loop-sliding-gallery structure,set the data-direction of gallery element to determine which diection your gallery may slide.
to use it correctly please read the way it used in 'scrollLeftOrRight.html'. details listed below:
1. don't change the structure of a sliding-gallery,which include a 'my-gallery-class div' as the root, then a 'my-gallery-wrapper-class div' following,which contains the two contents--'my-gallery-loop-item'.you can put as many sub-itmes as you want in each contens, of course the width-dimension of the sub-items of each content must be larger than the root-element -'my gallery-class div',it is the basic condition to make a loop.
2.the default sliding-speed is set as 5, to make the sliding-speed lower, set the option's speed parameter larger, Conversely set it smaller. yes, the js code is in last line of file -'scrollLeftOrRight.js'.


