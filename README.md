# Sri Venkateswara Homeo Stores Website

Static website for Sri Venkateswara Homeo Stores, built with plain HTML, CSS, and JavaScript.

## Files

- `index.html` - page content and sections
- `site-data.js` - real clinic details, testimonials, map query, and photo list
- `styles.css` - responsive layout and visual design
- `script.js` - mobile menu, year, and appointment form behavior
- `assets/hero-homeopathy.png` - generated hero image used on the homepage
- `assets/photos/` - add real store, clinic, medicine, or doctor photos here

## Edit Real Details

Most real details are editable in `site-data.js`:

- `storeName`
- `practitionerName`
- `logoImage`
- `phoneDisplay`
- `phoneHref`
- `whatsappDisplay`
- `whatsappNumber`
- `address`
- `mapQuery`
- `heroImage`
- `photos`
- `testimonials`

## Add Photos

1. Copy real photos into `assets/photos/`.
2. Use simple file names, for example `store-front.jpg` or `medicine-counter.png`.
3. Add each photo in `site-data.js`:

```js
photos: [
  {
    src: "assets/photos/store-front.jpg",
    alt: "Sri Venkateswara Homeo Stores front view",
    title: "Store Front"
  }
]
```

## Before Publishing

Replace the placeholder phone number, WhatsApp number, address, map query, and sample testimonials.

## Preview

Open `index.html` in a browser. No build step is required.

## GitHub Pages

Upload these files to the repository root and enable GitHub Pages from the repository settings.
