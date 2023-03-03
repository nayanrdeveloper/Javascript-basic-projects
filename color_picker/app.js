const colorInput = document.querySelector(".input-color");
const body = document.querySelector("body");
const hexText = document.querySelector(".hex-text");
const rgbText = document.querySelector(".rgb-text");
const hslText = document.querySelector(".hsl-text");

let rgbColor = "";
let hexColor = "";
let hslColor = "";

const onChangeInputColor = () => {
  let hexValue = colorInput.value;
  hexColor = hexValue;
  let rgbValue = hexToRGB(hexValue);
  rgbColor = rgbValue;
  let hslValue = hexToHSL(hexValue);
  hslColor = hslValue;
  body.style.background = hexValue;
  hexText.textContent = hexValue;
  rgbText.textContent = rgbValue.rgbString;
  hslText.textContent = hslValue;
};

function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return {
    rgb: {
      r: r,
      g: g,
      b: b,
    },
    rgbString: "rgb(" + +r + "," + +g + "," + +b + ")",
  };
}

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

colorInput.addEventListener("input", onChangeInputColor);

hexText.addEventListener("click", (event) => {
  navigator.clipboard.writeText(hexColor);
});

rgbText.addEventListener("click", (event) => {
  navigator.clipboard.writeText(rgbColor.rgbString);
});

hslText.addEventListener("click", (event) => {
  navigator.clipboard.writeText(hslColor);
});

onChangeInputColor();
