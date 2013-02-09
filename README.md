# videoloop.js: Unobtrusive HTML5 Video Loop Shim

  The [HTML5 video][HTML5Video] element supports the `loop` _boolean_ attribute where if specified, will, cause the video player to upon reaching the end of the video, automatically seek back to the start. Some earlier HTML5 capable browsers (looking at you Firefox) do not honor the attribute.

## Using

Include the script file before any videos have ended...that's it.

```
<video src="http://media.w3.org/2010/05/sintel/trailer.webm" loop/>
<script src="lib/loopvideo.js"></script>
```

## Installation

  component(1)

    % ...

  bower

    % ...

  volo(1)

    % ...

  jam(1)

    % ...

  npm(1)

    % ...

## LICENSE

    (The MIT License)

    Copyright (c) 2012 Wil Moore III <wil.moore@wilmoore.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is furnished
    to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.


[HTML5Video]: https://developer.mozilla.org/en-US/docs/HTML/Element/video
