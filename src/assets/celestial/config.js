export const config = {
  width: 0, // Default width, 0 = full parent width; height is determined by projection
  projection: "kavrayskiy7", // eckert3, kavrayskiy7, patterson,
  transform: "equatorial", // Coordinate transformation: equatorial (default), ecliptic, galactic, supergalactic
  center: null, // Initial center coordinates in equatorial transformation [hours, degrees, degrees],
  // otherwise [degrees, degrees, degrees], 3rd parameter is orientation, null = default center
  orientationfixed: true, // Keep orientation angle the same as center[2]
  background: { fill: "#000000", stroke: "#000000", opacity: 1 }, // Background style
  adaptable: true, // Sizes are increased with higher zoom-levels
  zoomlevel: 2.4,
  interactive: true, // Enable zooming and rotation with mousewheel and dragging
  form: false, // Display settings form
  follow: "zenith",
  formFields: {
    location: false,
    general: false,
    stars: false,
    dsos: false,
    constellations: false,
    lines: false,
    other: false,
  },
  advanced: false,
  controls: true, // Display zoom controls
  lang: "fr", // Language for names, so far only for constellations: de: german, es: spanish
  // Default:en or empty string for english
  container: "celestial-map", // ID of parent element, e.g. div
  datapath: "./celestial/data/", // Path/URL to data files, empty = subfolder 'data'
  stars: {
    show: true, // Show stars
    limit: 5, // Show only stars brighter than limit magnitude
    colors: true, // Show stars in spectral colors, if not use "color"
    style: { fill: "#ffffff", opacity: 1 }, // Default style for stars
    names: false, // Show star names (Bayer, Flamsteed, Variable star, Gliese, whichever applies first)
    proper: false, // Show proper name (if present)
    desig: false, // Show all names, including Draper and Hipparcos
    namelimit: 2.5, // Show only names for stars brighter than namelimit
    namestyle: {
      fill: "#ddddbb",
      font: "11px Georgia, Times, 'Times Roman', serif",
      align: "left",
      baseline: "top",
    },
    propernamestyle: {
      fill: "#ddddbb",
      font: "11px Georgia, Times, 'Times Roman', serif",
      align: "right",
      baseline: "bottom",
    },
    propernamelimit: 1.5, // Show proper names for stars brighter than propernamelimit
    size: 7, // Maximum size (radius) of star circle in pixels
    exponent: -0.28, // Scale exponent for star size, larger = more linear
    data: "stars.6.json", // Data source for stellar data
    //data: 'stars.8.json' // Alternative deeper data source for stellar data
  },
  dsos: {
    show: false, // Show Deep Space Objects
    limit: 6, // Show only DSOs brighter than limit magnitude
    names: true, // Show DSO names
    desig: true, // Show short DSO names
    namelimit: 4, // Show only names for DSOs brighter than namelimit
    namestyle: {
      fill: "#cccccc",
      font: "11px Helvetica, Arial, serif",
      align: "left",
      baseline: "top",
    },
    size: null, // Optional seperate scale size for DSOs, null = stars.size
    exponent: 1.4, // Scale exponent for DSO size, larger = more non-linear
    data: "dsos.bright.json", // Data source for DSOs
    //data: 'dsos.6.json'  // Alternative broader data source for DSOs
    //data: 'dsos.14.json' // Alternative deeper data source for DSOs
    symbols: {
      //DSO symbol styles
      gg: { shape: "circle", fill: "#ff0000" }, // Galaxy cluster
      g: { shape: "ellipse", fill: "#ff0000" }, // Generic galaxy
      s: { shape: "ellipse", fill: "#ff0000" }, // Spiral galaxy
      s0: { shape: "ellipse", fill: "#ff0000" }, // Lenticular galaxy
      sd: { shape: "ellipse", fill: "#ff0000" }, // Dwarf galaxy
      e: { shape: "ellipse", fill: "#ff0000" }, // Elliptical galaxy
      i: { shape: "ellipse", fill: "#ff0000" }, // Irregular galaxy
      oc: {
        shape: "circle",
        fill: "#ffcc00",
        stroke: "#ffcc00",
        width: 1.5,
      }, // Open cluster
      gc: { shape: "circle", fill: "#ff9900" }, // Globular cluster
      en: { shape: "square", fill: "#ff00cc" }, // Emission nebula
      bn: { shape: "square", fill: "#ff00cc", stroke: "#ff00cc", width: 2 }, // Generic bright nebula
      sfr: {
        shape: "square",
        fill: "#cc00ff",
        stroke: "#cc00ff",
        width: 2,
      }, // Star forming region
      rn: { shape: "square", fill: "#00ooff" }, // Reflection nebula
      pn: { shape: "diamond", fill: "#00cccc" }, // Planetary nebula
      snr: { shape: "diamond", fill: "#ff00cc" }, // Supernova remnant
      dn: { shape: "square", fill: "#999999", stroke: "#999999", width: 2 }, // Dark nebula grey
      pos: {
        shape: "marker",
        fill: "#cccccc",
        stroke: "#cccccc",
        width: 1.5,
      }, // Generic marker
    },
  },
  constellations: {
    show: true, // Show constellations
    names: true, // Show constellation names
    desig: false, // Show short constellation names (3 letter designations)
    nameStyle: {
      fill: "#cccc99",
      align: "center",
      baseline: "middle",
      opacity: 0.8,
      font: [
        "bold 15px Helvetica, Arial, sans-serif", // Different fonts for brighter &
        "bold 13px Helvetica, Arial, sans-serif", // sdarker constellations
        "bold 11px Helvetica, Arial, sans-serif",
      ],
    },
    lines: true, // Show constellation lines
    linestyle: { stroke: "#cccccc", width: 1, opacity: 0.6 },
    bounds: true, // Show constellation boundaries
    boundstyle: {
      stroke: "#cccc00",
      width: 0.7,
      opacity: 0.8,
      dash: [2, 5],
    },
  },
  planets: {
    show: false,
    names: false,
    nameStyle: {
      fill: "#00ccff",
      font: "16px 'Lucida Sans Unicode', Consolas, sans-serif",
      align: "right",
      baseline: "top",
    },
    namesType: "desig",
  },
  mw: {
    show: false, // Show Milky Way as filled polygons
    style: { fill: "#ffffff", opacity: "0.15" },
  },
  lines: {
    graticule: {
      show: false,
      stroke: "#cccccc",
      width: 0.6,
      opacity: 0.8, // Show graticule lines
      // grid values: "outline", "center", or [lat,...] specific position
      lon: {
        pos: ["center"],
        fill: "#eee",
        font: "10px Helvetica, Arial, sans-serif",
      },
      // grid values: "outline", "center", or [lon,...] specific position
      lat: {
        pos: ["center"],
        fill: "#eee",
        font: "10px Helvetica, Arial, sans-serif",
      },
    },
    equatorial: { show: true, stroke: "#aaaaaa", width: 1.3, opacity: 0.7 }, // Show equatorial plane
    ecliptic: { show: false, stroke: "#66cc66", width: 1.3, opacity: 0.7 }, // Show ecliptic plane
    galactic: { show: false, stroke: "#cc6666", width: 1.3, opacity: 0.7 }, // Show galactic plane
    supergalactic: {
      show: false,
      stroke: "#cc66cc",
      width: 1.3,
      opacity: 0.7,
    }, // Show supergalactic plane
  },
};
