/*********************** 
 * Theory-Of-Mind Test *
 ***********************/


// store info about the experiment session:
let expName = 'theory-of-mind';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'Audio': ['Yes', 'No'], 'Debug': ['No', 'Yes'], 'Show boxes': ['No', 'Yes']};

// Start code blocks for 'Before Experiment'

function make_button(name, text, pos, size) {
    return new visual.ButtonStim({"win": psychoJS.window, "text": text, "pos": pos, "letterHeight": 0.05, "size": size, "borderWidth": 0.005, "fillColor": "lightgrey", "borderColor": "darkgrey", "color": "black", "colorSpace": "rgb", "opacity": null, "bold": true, "italic": false, "padding": null, "anchor": "center", "name": name});
}

function make_sound(name, filepath) {
    return new sound.Sound({"win": psychoJS.window, "value": filepath, "secs": (- 1), "stereo": true, "hamming": true, "name": name});
}

function make_img(name, file_name, pos, size, opacity) {
    return new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_name, "pos": pos, "size": size, "opacity": opacity});
}

function make_slide(name, pos = [0, 0], size = SLIDE_SIZE) {
    return make_img(name, `${SLIDES_DIR}/${name}.png`, pos, size, 1);
}

var fillColor;
var lineColor;
function make_rect(name, pos, size, opacity, lineColor = "green", lineWidth = 3, fillColor = null) {
    if ((fillColor !== null)) {
        fillColor = new util.Color(fillColor);
    }
    if ((lineColor !== null)) {
        lineColor = new util.Color(lineColor);
    }
    return new visual.Rect({"win": psychoJS.window, "name": name, "width": size[0], "height": size[1], "pos": pos, "lineWidth": lineWidth, "lineColor": lineColor, "fillColor": fillColor, "opacity": opacity});
}

var cimgs;
function make_boxes(names, xys, sizes, opacity = CLICK_BOX_OPACITY, lineColor = "green") {
    var cimgs;
    cimgs = [];
    for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        cimgs.push(make_rect(names[i], xys[i], sizes[i], opacity, lineColor));
    }
    return cimgs;
}

function make_circle(name, pos, size, fillColor = "black", lineColor = "black", lineWidth = 3, opacity = 1) {
    if ((lineColor !== null)) {
        lineColor = new util.Color(lineColor);
    }
    if ((fillColor !== null)) {
        fillColor = new util.Color(fillColor);
    }
    return new visual.Polygon({"win": psychoJS.window, "name": name, "edges": 360, "size": size, "pos": pos, "lineWidth": lineWidth, "lineColor": lineColor, "fillColor": fillColor, "opacity": opacity});
}

function make_radio0(name, pos) {
    return make_circle(name, pos, [0.03, 0.03], null, "black");
}

function make_radio1(name, pos) {
    return make_circle(name, pos, [0.023, 0.023], "black", null, 0);
}

var min_y;
function find_min_y(cimgs) {
    var min_y, y;
    min_y = 0.5;
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        y = (cimg.pos[1] - (cimg.height / 2));
        if ((min_y > y)) {
            min_y = y;
        }
    }
    return min_y;
}

function make_radios(func, cimgs, res = [], offset = (- 0.05)) {
    var min_y, radio_y;
    min_y = find_min_y(cimgs);
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        radio_y = (min_y + offset);
        res.push(func(cimg.name, [cimg.pos[0], radio_y]));
    }
    return res;
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(beginRoutineBegin());
flowScheduler.add(beginRoutineEachFrame());
flowScheduler.add(beginRoutineEnd());
flowScheduler.add(slide_titleRoutineBegin());
flowScheduler.add(slide_titleRoutineEachFrame());
flowScheduler.add(slide_titleRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/imgs/slides/slide-08.png', 'path': 'resources/imgs/slides/slide-08.png'},
    {'name': 'resources/imgs/slides/slide-04.png', 'path': 'resources/imgs/slides/slide-04.png'},
    {'name': 'resources/imgs/slides/o-slide-03.png', 'path': 'resources/imgs/slides/o-slide-03.png'},
    {'name': 'resources/aud/slide-04.m4a', 'path': 'resources/aud/slide-04.m4a'},
    {'name': 'resources/aud/slide-22.m4a', 'path': 'resources/aud/slide-22.m4a'},
    {'name': 'resources/aud/slide-05.m4a', 'path': 'resources/aud/slide-05.m4a'},
    {'name': 'resources/imgs/slides/slide-09.png', 'path': 'resources/imgs/slides/slide-09.png'},
    {'name': 'resources/imgs/slides/slide-18.png', 'path': 'resources/imgs/slides/slide-18.png'},
    {'name': 'resources/imgs/slides/slide-23.png', 'path': 'resources/imgs/slides/slide-23.png'},
    {'name': 'resources/aud/slide-11.m4a', 'path': 'resources/aud/slide-11.m4a'},
    {'name': 'resources/imgs/slides/slide-00-intr.png', 'path': 'resources/imgs/slides/slide-00-intr.png'},
    {'name': 'resources/imgs/slides/slide-05.png', 'path': 'resources/imgs/slides/slide-05.png'},
    {'name': 'resources/aud/slide-13.m4a', 'path': 'resources/aud/slide-13.m4a'},
    {'name': 'resources/imgs/slides/slide-10.png', 'path': 'resources/imgs/slides/slide-10.png'},
    {'name': 'resources/imgs/slides/slide-17.png', 'path': 'resources/imgs/slides/slide-17.png'},
    {'name': 'resources/imgs/slides/slide-07.png', 'path': 'resources/imgs/slides/slide-07.png'},
    {'name': 'resources/imgs/slides/slide-03.png', 'path': 'resources/imgs/slides/slide-03.png'},
    {'name': 'resources/aud/slide-03b.m4a', 'path': 'resources/aud/slide-03b.m4a'},
    {'name': 'resources/imgs/slides/slide-24.png', 'path': 'resources/imgs/slides/slide-24.png'},
    {'name': 'resources/imgs/slides/slide-14.png', 'path': 'resources/imgs/slides/slide-14.png'},
    {'name': 'resources/imgs/slides/slide-22.png', 'path': 'resources/imgs/slides/slide-22.png'},
    {'name': 'resources/aud/slide-06b.m4a', 'path': 'resources/aud/slide-06b.m4a'},
    {'name': 'resources/aud/slide-07.m4a', 'path': 'resources/aud/slide-07.m4a'},
    {'name': 'resources/imgs/slides/slide-06.png', 'path': 'resources/imgs/slides/slide-06.png'},
    {'name': 'resources/aud/slide-15.m4a', 'path': 'resources/aud/slide-15.m4a'},
    {'name': 'resources/imgs/slides/slide-03b.png', 'path': 'resources/imgs/slides/slide-03b.png'},
    {'name': 'resources/imgs/slides/slide-12.png', 'path': 'resources/imgs/slides/slide-12.png'},
    {'name': 'resources/aud/slide-03.m4a', 'path': 'resources/aud/slide-03.m4a'},
    {'name': 'resources/aud/slide-02.m4a', 'path': 'resources/aud/slide-02.m4a'},
    {'name': 'resources/seqs/conditions.csv', 'path': 'resources/seqs/conditions.csv'},
    {'name': 'resources/aud/slide-06.m4a', 'path': 'resources/aud/slide-06.m4a'},
    {'name': 'resources/imgs/slides/slide-02.png', 'path': 'resources/imgs/slides/slide-02.png'},
    {'name': 'resources/imgs/next.png', 'path': 'resources/imgs/next.png'},
    {'name': 'resources/aud/slide-19.m4a', 'path': 'resources/aud/slide-19.m4a'},
    {'name': 'resources/imgs/slides/slide-13.png', 'path': 'resources/imgs/slides/slide-13.png'},
    {'name': 'resources/imgs/slides/slide-16.png', 'path': 'resources/imgs/slides/slide-16.png'},
    {'name': 'resources/imgs/slides/slide-15.png', 'path': 'resources/imgs/slides/slide-15.png'},
    {'name': 'resources/imgs/slides/slide-20.png', 'path': 'resources/imgs/slides/slide-20.png'},
    {'name': 'resources/imgs/slides/slide-11.png', 'path': 'resources/imgs/slides/slide-11.png'},
    {'name': 'resources/aud/slide-00-intr.m4a', 'path': 'resources/aud/slide-00-intr.m4a'},
    {'name': 'resources/aud/slide-23.m4a', 'path': 'resources/aud/slide-23.m4a'},
    {'name': 'resources/aud/slide-08.m4a', 'path': 'resources/aud/slide-08.m4a'},
    {'name': 'resources/aud/slide-14.m4a', 'path': 'resources/aud/slide-14.m4a'},
    {'name': 'resources/aud/slide-17.m4a', 'path': 'resources/aud/slide-17.m4a'},
    {'name': 'resources/aud/slide-21.m4a', 'path': 'resources/aud/slide-21.m4a'},
    {'name': 'resources/imgs/slides/slide-19.png', 'path': 'resources/imgs/slides/slide-19.png'},
    {'name': 'resources/aud/slide-01.m4a', 'path': 'resources/aud/slide-01.m4a'},
    {'name': 'resources/aud/slide-12.m4a', 'path': 'resources/aud/slide-12.m4a'},
    {'name': 'resources/aud/slide-18.m4a', 'path': 'resources/aud/slide-18.m4a'},
    {'name': 'resources/aud/slide-24.m4a', 'path': 'resources/aud/slide-24.m4a'},
    {'name': 'resources/imgs/slides/slide-01.png', 'path': 'resources/imgs/slides/slide-01.png'},
    {'name': 'resources/aud/slide-16.m4a', 'path': 'resources/aud/slide-16.m4a'},
    {'name': 'resources/aud/slide-00-title.m4a', 'path': 'resources/aud/slide-00-title.m4a'},
    {'name': 'resources/imgs/slides/slide-21.png', 'path': 'resources/imgs/slides/slide-21.png'},
    {'name': 'resources/aud/slide-20.m4a', 'path': 'resources/aud/slide-20.m4a'},
    {'name': 'resources/aud/slide-10.m4a', 'path': 'resources/aud/slide-10.m4a'},
    {'name': 'resources/imgs/slides/slide-00-title.png', 'path': 'resources/imgs/slides/slide-00-title.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var beginClock;
var expVersion;
var AUD_DIR;
var IMGS_DIR;
var SLIDES_DIR;
var SEQ_FILE;
var SHOW_DEBUG;
var USE_AUDIO;
var SHOW_BOUND_BOX;
var CLICK_BOX_OPACITY;
var BOUND_BOX_OPACITY;
var SLIDE_H;
var SLIDE_W;
var SLIDE_SIZE;
var NEXT_POS;
var NEXT_SIZE;
var NEXT;
var REPLAY_POS;
var REPLAY_SIZE;
var REPLAY;
var COVER_SIZE;
var COVER;
var MOUSE;
var MOUSE_L;
var MOUSE_L_prev;
var SOUND;
var q_slides;
var begin_text;
var slide_titleClock;
var NEXT_BUTTON_POS;
var NEXT_BUTTON_SIZE;
var NEXT_BUTTON;
var slide_title_text;
var trialClock;
var y_offset;
var control_scores;
var current_total_score;
var SLIDE_GROUPS;
var trial_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  expVersion = "2022.09.26";
  AUD_DIR = "resources/aud";
  IMGS_DIR = "resources/imgs";
  SLIDES_DIR = `${IMGS_DIR}/slides`;
  SEQ_FILE = "resources/seqs/conditions.csv";
  SHOW_DEBUG = (expInfo["Debug"] === "Yes");
  USE_AUDIO = (expInfo["Audio"] === "Yes");
  SHOW_BOUND_BOX = (expInfo["Show boxes"] === "Yes");
  CLICK_BOX_OPACITY = (SHOW_DEBUG ? 0.2 : 0);
  BOUND_BOX_OPACITY = (SHOW_BOUND_BOX ? 1 : 0);
  /*
  Slides are 1001 x 563 pixels.
  Positions and sizes of clickable areas are hard
  coded, so changing this will break _everything_!
  */
  SLIDE_H = 0.75;
  SLIDE_W = ((SLIDE_H / 563) * 1001);
  SLIDE_SIZE = [SLIDE_W, SLIDE_H];
  NEXT_POS = [0.573, 0.315];
  NEXT_SIZE = [0.165, 0.075];
  NEXT = make_rect("next", NEXT_POS, NEXT_SIZE, CLICK_BOX_OPACITY);
  REPLAY_POS = [(- 0.376), 0.265];
  REPLAY_SIZE = [0.165, 0.075];
  REPLAY = make_rect("replay", REPLAY_POS, REPLAY_SIZE, CLICK_BOX_OPACITY);
  COVER_SIZE = [0.17, 0.08];
  COVER = make_rect("cover", NEXT_POS, COVER_SIZE, null, "white", 0, "white");
  MOUSE = new core.Mouse({"win": psychoJS.window});
  MOUSE_L = 0;
  MOUSE_L_prev = 0;
  SOUND = null;
  
  function get_slide02() {
      var names, sizes, xys;
      names = ["cake", "lollipop", "cookie", "chocolate_bar"];
      xys = [[(- 0.13), 0.145], [0.0925, 0.1475], [(- 0.1375), (- 0.0625)], [0.0825, (- 0.06125)]];
      sizes = [[0.15, 0.13], [0.07, 0.14], [0.18, 0.08], [0.14, 0.09]];
      return make_boxes(names, xys, sizes);
  }
  function get_slide03() {
      var names, sizes, xys;
      names = ["scared", "angry", "happy", "sad"];
      xys = [[(- 0.16), 0.18], [0.126, 0.18], [(- 0.152), (- 0.103)], [0.126, (- 0.105)]];
      sizes = [[0.19, 0.288], [0.19, 0.288], [0.18, 0.27], [0.193, 0.278]];
      return make_boxes(names, xys, sizes);
  }
  function get_slide05() {
      var names, sizes, xys;
      names = ["table", "chair", "desk", "drawer"];
      xys = [[(- 0.1675), 0.155], [0.1125, 0.17], [(- 0.1675), (- 0.06)], [0.13, (- 0.0525)]];
      sizes = [[0.24, 0.12], [0.125, 0.21], [0.26, 0.13], [0.2, 0.14]];
      return make_boxes(names, xys, sizes);
  }
  function get_slide11() {
      var names, sizes, xys;
      names = ["table", "chair", "desk", "drawer"];
      xys = [[(- 0.1275), 0.1425], [0.09, 0.15], [(- 0.125), (- 0.06)], [0.095, (- 0.05)]];
      sizes = [[0.19, 0.11], [0.11, 0.19], [0.205, 0.12], [0.14, 0.13]];
      return make_boxes(names, xys, sizes);
  }
  function get_slide18() {
      var names, sizes, xys;
      names = ["train", "wagon", "truck", "airplane"];
      xys = [[(- 0.15), 0.205], [0.1675, 0.2025], [(- 0.16), (- 0.06)], [0.17, (- 0.055)]];
      sizes = [[0.34, 0.12], [0.23, 0.18], [0.2, 0.135], [0.245, 0.145]];
      return make_boxes(names, xys, sizes);
  }
  function get_slide20() {
      var names, sizes, xys;
      names = ["happy", "sad", "scared", "mad"];
      xys = [[(- 0.14), 0.19], [0.13, 0.19], [(- 0.14), (- 0.06)], [0.13, (- 0.06)]];
      sizes = [[0.2, 0.23], [0.2, 0.23], [0.2, 0.23], [0.2, 0.23]];
      return make_boxes(names, xys, sizes);
  }
  function get_slide22() {
      var names, sizes, xys;
      names = ["train", "wagon", "truck", "airplane"];
      xys = [[(- 0.16), 0.175], [0.155, 0.17], [(- 0.17), (- 0.09)], [0.155, (- 0.085)]];
      sizes = [[0.34, 0.12], [0.23, 0.18], [0.2, 0.135], [0.245, 0.145]];
      return make_boxes(names, xys, sizes);
  }
  function get_slide23() {
      var names, sizes, xys;
      names = ["happy", "sad", "scared", "mad"];
      xys = [[(- 0.15), 0.185], [0.13, 0.185], [(- 0.15), (- 0.065)], [0.13, (- 0.065)]];
      sizes = [[0.2, 0.23], [0.2, 0.23], [0.2, 0.23], [0.2, 0.23]];
      return make_boxes(names, xys, sizes);
  }
  q_slides = {"slide-02": get_slide02, "slide-03": get_slide03, "slide-05": get_slide05, "slide-11": get_slide11, "slide-12": get_slide11, "slide-13": get_slide11, "slide-18": get_slide18, "slide-19": get_slide18, "slide-20": get_slide20, "slide-22": get_slide22, "slide-23": get_slide23, "slide-24": get_slide23};
  
  begin_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "slide_title"
  slide_titleClock = new util.Clock();
  NEXT_BUTTON_POS = [0, (- 0.38)];
  NEXT_BUTTON_SIZE = [((0.1 / 127) * 192), 0.1];
  NEXT_BUTTON = make_img("next", `${IMGS_DIR}/next.png`, NEXT_POS, NEXT_SIZE, null);
  
  slide_title_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'slide_title_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  y_offset = (- 0.02);
  control_scores = [];
  current_total_score = 0;
  SLIDE_GROUPS = [null, [1, 2], [3], [4, 5], [6, 7, 8, 9, 10, 11], [12], [13], [14, 15, 16, 17, 18], [19], [20], [21, 22], [23], [24]];
  
  trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var slide;
var aud_file;
var SOUND_DUR;
var SOUND_T;
var beginComponents;
function beginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin'-------
    t = 0;
    beginClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slide = make_slide(`slide-00-intr`);
    slide.autoDraw = true;
    NEXT.autoDraw = true;
    if (USE_AUDIO) {
        aud_file = `${AUD_DIR}/slide-00-intr.m4a`;
        SOUND = make_sound("slide-00-intr", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND_T = 0;
        SOUND.play();
    }
    
    // keep track of which components have finished
    beginComponents = [];
    beginComponents.push(begin_text);
    
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function beginRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin'-------
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        MOUSE_L_prev = MOUSE_L;
        if (((MOUSE_L === 1) && NEXT.contains(MOUSE))) {
            continueRoutine = false;
        }
    }
    
    
    // *begin_text* updates
    if (t >= 0.0 && begin_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text.tStart = t;  // (not accounting for frame time here)
      begin_text.frameNStart = frameN;  // exact frame index
      
      begin_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginRoutineEnd() {
  return async function () {
    //------Ending Routine 'begin'-------
    beginComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    slide.autoDraw = false;
    NEXT.autoDraw = false;
    NEXT.pos = NEXT_POS;
    if (USE_AUDIO) {
        SOUND.stop();
    }
    
    // the Routine "begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var slide_titleComponents;
function slide_titleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'slide_title'-------
    t = 0;
    slide_titleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slide = make_slide(`slide-00-title`);
    slide.autoDraw = true;
    NEXT_BUTTON.pos = [0, (- 0.2)];
    NEXT_BUTTON.autoDraw = true;
    if (USE_AUDIO) {
        aud_file = `${AUD_DIR}/slide-00-title.m4a`;
        SOUND = make_sound("slide-00-title", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND_T = 0;
        SOUND.play();
    }
    
    // keep track of which components have finished
    slide_titleComponents = [];
    slide_titleComponents.push(slide_title_text);
    
    slide_titleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function slide_titleRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'slide_title'-------
    // get current time
    t = slide_titleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        MOUSE_L_prev = MOUSE_L;
        if (((MOUSE_L === 1) && NEXT_BUTTON.contains(MOUSE))) {
            continueRoutine = false;
        }
    }
    
    
    // *slide_title_text* updates
    if (t >= 0.0 && slide_title_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slide_title_text.tStart = t;  // (not accounting for frame time here)
      slide_title_text.frameNStart = frameN;  // exact frame index
      
      slide_title_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    slide_titleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function slide_titleRoutineEnd() {
  return async function () {
    //------Ending Routine 'slide_title'-------
    slide_titleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    slide.autoDraw = false;
    NEXT_BUTTON.autoDraw = false;
    if (USE_AUDIO) {
        SOUND.stop();
    }
    
    // the Routine "slide_title" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, SEQ_FILE, '0:'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var cimg_names;
var mouse_over;
var slide_t;
var response;
var response_time;
var slide_nums;
var slides;
var n_slides;
var idx;
var idx_prev;
var play_6b_once;
var auto_9_once;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trials.addData("expVersion", expVersion);
    cimgs = null;
    cimg_names = [];
    mouse_over = "_";
    slide_t = 0;
    response = null;
    response_time = null;
    slide_nums = SLIDE_GROUPS[Number.parseInt(trialNum)];
    slides = [];
    for (var i, _pj_c = 0, _pj_a = slide_nums, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        i = ((i > 9) ? i : `0${i}`);
        slides.push(make_slide(`slide-${i}`));
    }
    n_slides = slide_nums.length;
    idx = 0;
    idx_prev = null;
    slides[idx].autoDraw = true;
    NEXT_BUTTON.pos = NEXT_BUTTON_POS;
    NEXT_BUTTON.opacity = ((n_slides > 1) ? 1 : 0.1);
    NEXT_BUTTON.autoDraw = true;
    if (USE_AUDIO) {
        play_6b_once = true;
        auto_9_once = true;
        aud_file = `${AUD_DIR}/${slides[idx].name}.m4a`;
        SOUND = make_sound(slides[idx].name, aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND_T = 0;
        SOUND.play();
    }
    for (var qn_num, _pj_c = 0, _pj_a = [2, 6, 7], _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        qn_num = _pj_a[_pj_c];
        if (((Number.parseInt(testQn) === qn_num) && (control_scores.slice((- 1))[0] !== 1))) {
            continueRoutine = false;
        }
    }
    for (var qn_num, _pj_c = 0, _pj_a = [4, 5], _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        qn_num = _pj_a[_pj_c];
        if ((((Number.parseInt(testQn) === qn_num) && (control_scores.slice((- 1))[0] !== 1)) && (control_scores.slice((- 2))[0] !== 1))) {
            continueRoutine = false;
        }
    }
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_text);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var radio0s;
var radio1s;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (USE_AUDIO) {
        if (((play_6b_once && (slides[idx].name === "slide-06")) && ((t - SOUND_T) > SOUND_DUR))) {
            play_6b_once = false;
            aud_file = `${AUD_DIR}/${slides[idx].name}b.m4a`;
            SOUND = make_sound(slides[idx].name, aud_file);
            SOUND_DUR = SOUND.getDuration();
            SOUND_T = t;
            SOUND.play();
        }
        if (((auto_9_once && (slides[idx].name === "slide-08")) && ((t - SOUND_T) > 8))) {
            auto_9_once = false;
            idx_prev = idx;
            idx += 1;
            slides[idx_prev].autoDraw = false;
            slides[idx].autoDraw = true;
            NEXT_BUTTON.autoDraw = false;
            NEXT_BUTTON.autoDraw = true;
            NEXT_BUTTON.opacity = 0.1;
            if (((n_slides - idx) !== 1)) {
                NEXT_BUTTON.opacity = 1;
            }
        }
    }
    if (((cimgs === null) && ((n_slides - idx) === 1))) {
        slide_t = t;
        cimgs = q_slides[slides[idx].name]();
        y_offset = (- 0.02);
        if ((slides[idx].name === "slide-03")) {
            y_offset = 0.02;
        }
        for (var i, _pj_c = 0, _pj_a = [20, 23, 24], _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((slides[idx].name === `slide-${i}`)) {
                y_offset = (- 0.01);
                break;
            }
        }
        radio0s = make_radios(make_radio0, cimgs.slice(0, 2), [], y_offset);
        radio0s = make_radios(make_radio0, cimgs.slice(2), radio0s, y_offset);
        radio1s = make_radios(make_radio1, cimgs.slice(0, 2), [], y_offset);
        radio1s = make_radios(make_radio1, cimgs.slice(2), radio1s, y_offset);
        for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            radio0s[i].autoDraw = true;
            cimgs[i].autoDraw = true;
            cimg_names.push(cimgs[i].name);
        }
    }
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        MOUSE_L_prev = MOUSE_L;
        if ((MOUSE_L === 1)) {
            if (((n_slides - idx) === 1)) {
                if (((response !== null) && NEXT_BUTTON.contains(MOUSE))) {
                    continueRoutine = false;
                }
                for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    i = _pj_a[_pj_c];
                    if ((cimgs[i].contains(MOUSE) || radio0s[i].contains(MOUSE))) {
                        response = cimgs[i].name;
                        response_time = (t - slide_t);
                        NEXT_BUTTON.opacity = 1;
                    }
                    for (var radio, _pj_f = 0, _pj_d = radio1s, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                        radio = _pj_d[_pj_f];
                        radio.autoDraw = false;
                        if ((response === radio.name)) {
                            radio.autoDraw = true;
                        }
                    }
                }
            } else {
                if (NEXT_BUTTON.contains(MOUSE)) {
                    idx_prev = idx;
                    idx += 1;
                    slides[idx_prev].autoDraw = false;
                    slides[idx].autoDraw = true;
                    if ((USE_AUDIO && (slides[idx].name !== "slide-09"))) {
                        if (((t - SOUND_T) < SOUND_DUR)) {
                            SOUND.stop();
                        }
                        aud_file = `${AUD_DIR}/${slides[idx].name}.m4a`;
                        SOUND = make_sound(slides[idx].name, aud_file);
                        SOUND_DUR = SOUND.getDuration();
                        SOUND_T = t;
                        SOUND.play();
                    }
                    NEXT_BUTTON.autoDraw = false;
                    NEXT_BUTTON.autoDraw = true;
                    NEXT_BUTTON.opacity = 0.1;
                    if (((n_slides - idx) !== 1)) {
                        NEXT_BUTTON.opacity = 1;
                    }
                }
            }
        }
    }
    mouse_over = "_";
    if ((cimgs !== null)) {
        for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            cimg = _pj_a[_pj_c];
            if (cimg.contains(MOUSE)) {
                mouse_over = cimg.name;
                cimg.opacity = BOUND_BOX_OPACITY;
            } else {
                cimg.opacity = CLICK_BOX_OPACITY;
            }
        }
    }
    if (SHOW_DEBUG) {
        trial_text.text = `
    taskNum = ${taskNum}
    qnNum = ${qnNum}
    aud_file = ${aud_file}
    SOUND_DUR = ${round(SOUND_DUR, 3)}
    slides[${idx}].name = ${slides[idx].name}
    cimg_names = ${cimg_names}
    corrAns1 = ${corrAns1}
    response = ${response}
    mouse_over = ${mouse_over}
    response_time = ${round(response_time, 3)}
    t = ${round(t, 3)}
    current_total_score = ${current_total_score}`
    ;
    }
    
    
    // *trial_text* updates
    if (t >= 0.0 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var is_correct;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        cimg.size = [0, 0];
        cimg.autoDraw = false;
    }
    slides[idx].size = [0, 0];
    slides[idx].autoDraw = false;
    NEXT_BUTTON.autoDraw = false;
    if (USE_AUDIO) {
        SOUND.stop();
    }
    is_correct = ((response === corrAns1) ? 1 : 0);
    if (((is_correct !== 1) && (corrAns2 !== "NA"))) {
        is_correct = ((response === corrAns2) ? 1 : 0);
    }
    trials.addData("response", response);
    if ((controlQn !== "NA")) {
        control_scores.push(is_correct);
        trials.addData("control_score", is_correct);
        trials.addData("test_score", null);
        trials.addData("current_total_score", null);
    }
    if ((testQn !== "NA")) {
        current_total_score += is_correct;
        trials.addData("control_score", null);
        trials.addData("test_score", is_correct);
        trials.addData("current_total_score", current_total_score);
    }
    trials.addData("response_time", response_time);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
