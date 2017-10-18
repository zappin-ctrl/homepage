# homepage (Clean time/date homepage)
https://alexflipnote.xyz/homepage

This website was made because of a request, so why not share it as well to the
public.

You can also download my [Chrome](https://chrome.google.com/webstore/detail/alexflipnotehomepage/apilabeffmpplallenlcommnigaafgfb) plugin to use it as your default homepage when you open a new tab or open chrome in general

### Adding backgrounds
1. Add image file as `.jpg` to `assets/backgrounds` directory with a filename
   conforming to the rest of the image files (last index)
2. Bump the multiplier on line 47 of `assets/script.js` so the JavaScript can
   see it

### Using custom background on live version
To do this, you simply add ?bg at the end of the URL and define the background you want.

**Requirements**
- HTTPS
- Uploaded background

Example:
`https://alexflipnote.xyz/homepage/?bg=https://i.alexflipnote.xyz/fd20ed.jpg`

### Credits
- @AlexFlipnote: main developer
- @TTtie: improved Firefox compatibility
- @deansheather: added localization support, improved code, and added fadein
  onload for background image

### License
A copy of the MIT license can be found in `LICENSE`.
