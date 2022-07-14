Graphics.prototype.setFontFiraSansCondensed = function(scale) {
  // Actual height 65 (64 - 0)
  this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('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'))),
    46,
    atob("ECAlHSAgIyEkHSQjEA=="),
    69+(scale<<8)+(1<<16)
  );
  return this;
}

Graphics.prototype.setFontHaxorNarrow = function(scale) {
  // Actual height 16 (15 - 0)
  this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob("ABH/5k/+YVRh/AgfwBBoAEhgNBmEP//D//wBBgaEnkwj+Oh1x4cMmH//k//4FB4eOuFx/EMngaE+Ewnkch8OgfHgEDwEB4EA8fAuHwnE8hkPGovwj/+h154eemF/5kPn8Ag4fB8EA/kAmZwJFwNwgH4EoK4TE4N/wE4uEch0OgPDgCCFUpEA4eAuFwnEOjkB/0AKgIAImEwCIXOLoShDgHMgFzHwUMFYIADgZpDIgIMBn/wh5XBBAYREHZUAjkAn0AWYoANFhAIDACQdEGJxLBhzrBC4LtBGoLvBcAM4HI8P4EH/EDw4VB8Hgjk4g8HD4Ph4Ef8ED+A4IJAPA4EwXghuEJ5E8jkfh0O4cHmHDxgCBhgCBzkwv0Mh50FFwLzBhkB4YiBC4cM+HDv1w/P4nk8JgvAgJZB9kAuZ9B4AbBh//4f/BoJUH/kwn41B4PDHYPMhkzgcM4HDnFw4/4mH8UIvwg/+gex4PMmHjKAYCBh1wgP4gBQFHoZ3BQwJlBwExKQK3Ba4IZHAwPwj/+h15QYgCEz1wv/4h4bFAoMfwBEBC4vHNwODxvAv/gMgLbIAAkMhkDZwoAON4Mchk+gcPChopBgPgYILXBwC1BjkOhz7DI5PAgYMB5kAmYIODxEAXINwuE4h0cgPOgE/gEHwDRCMo0AhxWCDoPMmPza4ScBvAqCAAk/a4ZiD5/MmYaB5nD2cwv/AXg0P/kH/8DxgbC8HAnEwg4vB8bnB/kD/4aE//8n//d4gCGz1wv/4h88KBvAC4MDR4z9BGpIRBDRQ1Cc4JQTAQIjDDRQvDHA7UBeIxrNhnDwcwuH8hj3BGo4mCFgJECF4YIBCIgAHJoiPICxAKCh0AgIvFHAlw//4n6hJC4UegEP4EHnEDw4kB8HgjihKMo5uIDRIJC8EAj8Ag/AgeADYSGIBAgPBnAYBD4ccGAQaIa5qhBwFwv/4h6GJCgodFzkAvyRBXYo1J5kwn8Mg+DwPgv/8h/zGp3AmH4hk3GoPgv0ch6hFnkwj+Oh1x4YdBAQ2OuFxEIM8DQjIIHwjaHKAvwn/+gEBeRVw//4n6hFAoM/c4N8SgIEDeoM+AYQpBn41NuEA/AYCBAY1I+E8n0fgPOFAUHwEB8BDCueA/F8njYF+ArFnAaB/kB/8ADgI9DUAp3BXoUMh3Dg62BxkxXgPg4dwboU8a4oADh//4ZyB4D4FVQIIDCwi0BhxQGBYJOBjjABVQJTBEQJQEFhY+EJhAWBFwIpBG4QyBHJIbIBIQZBLAIINABbFGDIIAJBYMegHP4EzmEM5kDmcA5nAncwcAMAcAIAD//8n4IB4HAmAaBhkDI4IIBnFwg7zBDgIADgfwgP+gHhDRIIGDSpHEDRHtNZiLBbZKwEn/8j//hz+DABBQF5kwmZQB4cDmHABAM3h//wf/HAKhIeJM4gC8IAAh9D5/8mYRCeZoADGQMH5//2ZHFABhdB4f/SgIXBvCLBgEc8EOjjXGGYvDI4LOFKBcP/kDQwZ9DgIIB8CGLDQyhTa4qhCa4JiCVQM4uEH/EADgKCIXgYaRGp4IBV4oAHaAM/+AXBgJpBQwJ0GGokMgPjIAPAmY1B5kDmcA5gIB+EMvATBeZKhDIgM/LIPBKATXJJIIRBJQS9INYLODDQgQBMAMfAgccaIINBwEH4ADBgYgBGpdwgCzBnwIEh/4ga8FWYWHgFzwEP4EBG4N4gE/HYPgh0cYoQ1J5kAToMM4EDOAIIBm7XBwbMBGowjB4fAmKzB9kDuZUB4E8fYoAIFoMeJYPwj8+h0B4YLB4EMmAaKAAf8/k/NIIAMEYbRB4eAuF8/DQBRAQLBJZTPBhzWBwC9CAwLEEnAeH/5HB/6TB4f/+AIMLJoARA="))),
    33, 12, 18
  );
  return this;
}

drawBackgroundImage = function() {
  g.drawImage({
  width : 176, height : 152, bpp : 3,
  buffer : require("heatshrink").decompress(atob("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"))
}, 0, 24);
};

var timerclk = require("timerclk.lib.js");

var stopwatches = [], timers = [];
stopwatches = require("Storage").readJSON("timerclk.stopwatch.json") || [];
stopwatches = stopwatches.filter(e=>e.start||e.time);
timers = require("Storage").readJSON("timerclk.timer.json") || [];
timers = timers.filter(e=>e.start||e.timeAdd);

function isoStr(date) {
  return date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
}

// timeout used to update every minute
var drawTimeout;
var drawSpecialTimeout;


function drawShadowed(text, x, y) {
    g.setColor(g.theme.bg);
    g.drawString(text, x+1, y+1);
    g.drawString(text, x-1, y-1);
    g.drawString(text, x+1, y-1);
    g.drawString(text, x-1, y+1);
    g.setColor(g.theme.fg);
    g.drawString(text, x, y);
}

// schedule a draw for the next minute
function queueDraw(timeout, interval, func) {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(function() {
    timeout = undefined;
    func();
  }, interval - (Date.now() % interval));
}

function drawSpecial() {
  var interval = 60000;
  var stopwatch = 0, timer = 0, time;
  var x = g.getWidth()/2;
  g.setColor(g.theme.fg);
  g.setFontAlign(0,0).setFont("HaxorNarrow", 1);
  var y = Bangle.appRect.y + g.stringMetrics("00:00").height/2;
  if (stopwatches.length) {
    time = timerclk.getTime(stopwatches[stopwatch]);
    drawShadowed(timerclk.formatTime(time, true), x, y);
    if (Math.floor(time/3600000) === 0) interval = 1000;
    stopwatch++;
  } else if (timers.length > 1) {
    time = timers[timer].time - timerclk.getTime(timers[timer]);
    drawShadowed(timerclk.formatTime(time, true), x, y);
    if (Math.floor(time/3600000) === 0) interval = 1000;
    timer++;
  }

  if (timers.length) {
    time = timers[timer].time - timerclk.getTime(timers[timer]);
    drawShadowed(timerclk.formatTime(time, true), x, y);
    if (Math.floor(time/3600000) === 0) interval = 1000;
  } else if (stopwatches.length > 1) {
    time = timerclk.getTime(stopwatches[stopwatch]);
    drawShadowed(timerclk.formatTime(time, true), x, y);
    if (Math.floor(time/3600000) === 0) interval = 1000;
  }
  queueDraw(drawSpecialTimeout, interval, drawSpecial);
}

var drawCount=0;

function draw() {
  var x = g.getWidth()/2;
  var y = g.getHeight()/2;
  g.reset();
  var date = new Date();
  var timeStr = require("locale").time(date,1);
  var dateStr = isoStr(date);
  var dowStr = require("locale").dow(date).toUpperCase();

  // draw pretty background
  drawBackgroundImage();

  // draw time
  g.setColor(g.theme.bg);
  g.setFontAlign(0,0).setFont("FiraSansCondensed");
  g.drawString(timeStr,x+3,y+3);
  g.drawString(timeStr,x-3,y-3);
  g.drawString(timeStr,x+3,y-3);
  g.drawString(timeStr,x-3,y+3);
  g.setColor(g.theme.fg);
  g.drawString(timeStr,x,y);
  // draw date
  y += g.stringMetrics(timeStr).height/2;
  g.setFontAlign(0,0).setFont("HaxorNarrow", 1);
  y += g.stringMetrics(dateStr).height/2;
  drawShadowed(dateStr,x+1,y+1);
  //draw day of week
  y += g.stringMetrics(dateStr).height/2;
  g.setFontAlign(0,0).setFont("HaxorNarrow", 1);
  y += g.stringMetrics(dowStr).height/2;
  g.setColor(g.theme.bg);
  drawShadowed(dowStr,x+1,y+1);
  // queue draw in one minute
  queueDraw(drawTimeout, 60000, draw);
}

var absY, lastX, lastY;
Bangle.on('drag', e=>{
if (!e.b) {
  if (lastX > 50) { // right
    load("timerclk.timer.js");
  } else if (lastX < -50) { // left
    load("timerclk.stopwatch.js");
  } else if (lastY > 50) { // down
  } else if (lastY < -50) { // up
  }
  lastX = 0;
  lastY = 0;
} else {
  lastX = lastX + e.dx;
  lastY = lastY + e.dy;
  absY = e.y;
}
});

Bangle.setUI("clock"); // Show launcher when middle button pressed
g.clear();
Bangle.loadWidgets();
Bangle.drawWidgets();
draw();
if (stopwatches || timers) drawSpecial();
