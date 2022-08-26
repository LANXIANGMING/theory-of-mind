/*********************** 
 * Theory-Of-Mind Test *
 ***********************/


// store info about the experiment session:
let expName = 'theory-of-mind';  // from the Builder filename that created this script
let expInfo = {'ID': '', 'Debug': ['No', 'Yes']};

// Start code blocks for 'Before Experiment'

function make_img(name, file_path, pos = [0, 0], size = [0, 0], opacity = 1) {
    var img;
    [img] = [new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_path, "pos": pos, "size": size, "opacity": opacity})];
    return img;
}

function hide(obj) {
    obj.size = [0, 0];
    obj.autoDraw = false;
}

function unhide(obj, size) {
    obj.size = size;
    obj.autoDraw = true;
}

function make_box(name, pos, size, opacity = CLICK_BOX_OPACITY) {
    var img;
    [img] = [make_img(name, `resources/imgs/transparent-box.png`, pos, size, opacity)];
    img.autoDraw = true;
    return img;
}

var names;
var xys;
var sizes;
var cimgs;
function make_boxes(dct, opacity = CLICK_BOX_OPACITY) {
    var cimgs, names, sizes, xys;
    names = dct["names"];
    xys = dct["xys"];
    sizes = dct["sizes"];
    cimgs = [];
    for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        cimgs.push(make_box(names[i], xys[i], sizes[i], opacity));
    }
    return cimgs;
}

function make_rect(name, size, pos, opacity = POLYGON_OPACITY) {
    var height, img, width;
    [width, height] = size;
    [img] = [new visual.Rect({"win": psychoJS.window, "name": name, "width": width, "height": height, "pos": pos, "lineWidth": 0, "fillColor": new util.Color("white"), "opacity": opacity})];
    img.autoDraw = true;
    return img;
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
flowScheduler.add(adminRoutineBegin());
flowScheduler.add(adminRoutineEachFrame());
flowScheduler.add(adminRoutineEnd());
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
    {'name': 'resources/conditions.csv', 'path': 'resources/conditions.csv'},
    {'name': 'resources/imgs/next.png', 'path': 'resources/imgs/next.png'},
    {'name': 'resources/imgs/slide-01.png', 'path': 'resources/imgs/slide-01.png'},
    {'name': 'resources/imgs/slide-02.png', 'path': 'resources/imgs/slide-02.png'},
    {'name': 'resources/imgs/slide-03.png', 'path': 'resources/imgs/slide-03.png'},
    {'name': 'resources/imgs/slide-04.png', 'path': 'resources/imgs/slide-04.png'},
    {'name': 'resources/imgs/slide-05.png', 'path': 'resources/imgs/slide-05.png'},
    {'name': 'resources/imgs/slide-06.png', 'path': 'resources/imgs/slide-06.png'},
    {'name': 'resources/imgs/slide-07.png', 'path': 'resources/imgs/slide-07.png'},
    {'name': 'resources/imgs/slide-08.png', 'path': 'resources/imgs/slide-08.png'},
    {'name': 'resources/imgs/slide-09.png', 'path': 'resources/imgs/slide-09.png'},
    {'name': 'resources/imgs/slide-10.png', 'path': 'resources/imgs/slide-10.png'},
    {'name': 'resources/imgs/slide-11.png', 'path': 'resources/imgs/slide-11.png'},
    {'name': 'resources/imgs/slide-12.png', 'path': 'resources/imgs/slide-12.png'},
    {'name': 'resources/imgs/slide-13.png', 'path': 'resources/imgs/slide-13.png'},
    {'name': 'resources/imgs/slide-14.png', 'path': 'resources/imgs/slide-14.png'},
    {'name': 'resources/imgs/slide-15.png', 'path': 'resources/imgs/slide-15.png'},
    {'name': 'resources/imgs/slide-16.png', 'path': 'resources/imgs/slide-16.png'},
    {'name': 'resources/imgs/slide-17.png', 'path': 'resources/imgs/slide-17.png'},
    {'name': 'resources/imgs/slide-18.png', 'path': 'resources/imgs/slide-18.png'},
    {'name': 'resources/imgs/slide-19.png', 'path': 'resources/imgs/slide-19.png'},
    {'name': 'resources/imgs/slide-20.png', 'path': 'resources/imgs/slide-20.png'},
    {'name': 'resources/imgs/slide-21.png', 'path': 'resources/imgs/slide-21.png'},
    {'name': 'resources/imgs/slide-22.png', 'path': 'resources/imgs/slide-22.png'},
    {'name': 'resources/imgs/slide-23.png', 'path': 'resources/imgs/slide-23.png'},
    {'name': 'resources/imgs/slide-24.png', 'path': 'resources/imgs/slide-24.png'},
    {'name': 'resources/imgs/transparent-box.png', 'path': 'resources/imgs/transparent-box.png'},
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


var adminClock;
var IMGS_DIR;
var SHOW_DEBUG;
var CLICK_BOX_OPACITY;
var NEXT_SIZE;
var SLIDE_SIZE;
var SLIDES;
var SLIDE_GROUPS;
var GLOBAL_NEXT;
var GLOBAL_BLANK;
var GLOBAL_MOUSE;
var GLOBAL_MOUSE_prev_state;
var GLOBAL_MOUSE_state;
var SLIDE_ATTRS;
var instClock;
var inst_slide_idxs;
var prev_slide_idx;
var slide_idx;
var inst_counter;
var inst_debug;
var trialClock;
var control_scores;
var current_total_score;
var trialMouse;
var trial_debug;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "admin"
  adminClock = new util.Clock();
  IMGS_DIR = "resources/imgs";
  SHOW_DEBUG = (expInfo["Debug"] === "Yes");
  CLICK_BOX_OPACITY = (SHOW_DEBUG ? 0.25 : 0);
  NEXT_SIZE = [0.146, 0.1];
  SLIDE_SIZE = [1.333, 0.75];
  SLIDES = [null];
  for (var i, _pj_c = 0, _pj_a = util.range(1, (1 + 24)), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      if ((i < 10)) {
          i = `0${i}`;
      }
      name = `slide-${i}`;
      SLIDES.push(make_img(name, `${IMGS_DIR}/${name}.png`, [0, 0], [0, 0]));
  }
  SLIDE_GROUPS = [null, [1, 2], [3], [4, 5], [6, 7, 8, 9, 10, 11], [12], [13], [14, 15, 16, 17, 18], [19], [20], [21, 22], [23], [24]];
  GLOBAL_NEXT = make_img("GLOBAL_NEXT", `${IMGS_DIR}/next.png`, [0, (- 0.4)], NEXT_SIZE);
  GLOBAL_BLANK = make_img("GLOBAL_BLANK", `${IMGS_DIR}/next.png`, [0, 0], [0, 0]);
  GLOBAL_MOUSE = new core.Mouse({"win": psychoJS.window});
  GLOBAL_MOUSE_prev_state = 0;
  GLOBAL_MOUSE_state = 0;
  
  SLIDE_ATTRS = {};
  SLIDE_ATTRS["slide-02"] = {"names": ["cake", "lollipop", "cookie", "chocolate_bar"], "xys": [[(- 0.13), 0.145], [0.0925, 0.1475], [(- 0.1375), (- 0.0625)], [0.0825, (- 0.06125)]], "sizes": [[0.15, 0.13], [0.07, 0.14], [0.18, 0.08], [0.14, 0.09]]};
  SLIDE_ATTRS["slide-03"] = {"names": ["happy", "sad", "scared", "angry"], "xys": [[(- 0.17), 0.15], [0.06, 0.15], [(- 0.17), (- 0.05)], [0.06, (- 0.05)]], "sizes": [[0.19, 0.19], [0.19, 0.19], [0.19, 0.19], [0.19, 0.19]]};
  SLIDE_ATTRS["slide-05"] = {"names": ["table", "chair", "desk", "drawer"], "xys": [[(- 0.1675), 0.155], [0.1125, 0.17], [(- 0.1675), (- 0.06)], [0.13, (- 0.0525)]], "sizes": [[0.24, 0.12], [0.125, 0.21], [0.26, 0.13], [0.2, 0.14]]};
  SLIDE_ATTRS["slide-11"] = {"names": ["table", "chair", "desk", "drawer"], "xys": [[(- 0.1275), 0.1425], [0.09, 0.15], [(- 0.125), (- 0.06)], [0.095, (- 0.05)]], "sizes": [[0.19, 0.11], [0.11, 0.19], [0.205, 0.12], [0.14, 0.13]]};
  SLIDE_ATTRS["slide-18"] = {"names": ["train", "wagon", "truck", "airplane"], "xys": [[(- 0.15), 0.205], [0.1675, 0.2025], [(- 0.16), (- 0.06)], [0.17, (- 0.055)]], "sizes": [[0.34, 0.12], [0.23, 0.18], [0.2, 0.135], [0.245, 0.145]]};
  SLIDE_ATTRS["slide-20"] = {"names": ["happy", "sad", "scared", "mad"], "xys": [[(- 0.14), 0.19], [0.13, 0.19], [(- 0.14), (- 0.06)], [0.13, (- 0.06)]], "sizes": [[0.2, 0.23], [0.2, 0.23], [0.2, 0.23], [0.2, 0.23]]};
  SLIDE_ATTRS["slide-22"] = {"names": ["train", "wagon", "truck", "airplane"], "xys": [[(- 0.16), 0.175], [0.155, 0.17], [(- 0.17), (- 0.09)], [0.155, (- 0.085)]], "sizes": [[0.34, 0.12], [0.23, 0.18], [0.2, 0.135], [0.245, 0.145]]};
  SLIDE_ATTRS["slide-23"] = {"names": ["happy", "sad", "scared", "mad"], "xys": [[(- 0.15), 0.185], [0.13, 0.185], [(- 0.15), (- 0.065)], [0.13, (- 0.065)]], "sizes": [[0.2, 0.23], [0.2, 0.23], [0.2, 0.23], [0.2, 0.23]]};
  
  // Initialize components for Routine "inst"
  instClock = new util.Clock();
  inst_slide_idxs = [];
  prev_slide_idx = null;
  slide_idx = null;
  inst_counter = 0;
  
  inst_debug = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_debug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  cimgs = [null, null, null, null];
  control_scores = [];
  current_total_score = 0;
  
  trialMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialMouse.mouseClock = new util.Clock();
  trial_debug = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_debug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var adminComponents;
function adminRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'admin'-------
    t = 0;
    adminClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    adminComponents = [];
    
    adminComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function adminRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'admin'-------
    // get current time
    t = adminClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    adminComponents.forEach( function(thisComponent) {
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


function adminRoutineEnd() {
  return async function () {
    //------Ending Routine 'admin'-------
    adminComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "admin" was not non-slip safe, so reset the non-slip timer
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
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'resources/conditions.csv', '0:'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(instRoutineBegin(snapshot));
      trialsLoopScheduler.add(instRoutineEachFrame());
      trialsLoopScheduler.add(instRoutineEnd());
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


var slide_size;
var slide_idxs;
var instComponents;
function instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'inst'-------
    t = 0;
    instClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slide_size = SLIDE_SIZE;
    slide_idxs = SLIDE_GROUPS[Number.parseInt(trialNum)];
    if ((slide_idxs.length < 2)) {
        continueRoutine = false;
    } else {
        inst_slide_idxs = slide_idxs.slice(0, (- 1));
        inst_counter = 0;
        prev_slide_idx = null;
        slide_idx = inst_slide_idxs[inst_counter];
        unhide(SLIDES[slide_idx], slide_size);
        unhide(GLOBAL_NEXT, NEXT_SIZE);
    }
    
    // keep track of which components have finished
    instComponents = [];
    instComponents.push(inst_debug);
    
    instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'inst'-------
    // get current time
    t = instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((inst_counter >= inst_slide_idxs.length)) {
        continueRoutine = false;
    } else {
        if ((prev_slide_idx !== slide_idx)) {
            prev_slide_idx = slide_idx;
            unhide(SLIDES[slide_idx], slide_size);
            GLOBAL_NEXT.autoDraw = true;
        }
    }
    GLOBAL_MOUSE_state = GLOBAL_MOUSE.getPressed()[0];
    if ((GLOBAL_MOUSE_prev_state !== GLOBAL_MOUSE_state)) {
        GLOBAL_MOUSE_prev_state = GLOBAL_MOUSE_state;
        if ((GLOBAL_MOUSE_state === 1)) {
            if (GLOBAL_NEXT.contains(GLOBAL_MOUSE)) {
                inst_counter += 1;
                slide_idx = inst_slide_idxs[inst_counter];
                hide(SLIDES[prev_slide_idx]);
                GLOBAL_NEXT.autoDraw = false;
            }
        }
    }
    if (SHOW_DEBUG) {
        inst_debug.text = `inst
    taskNum = ${taskNum}
    inst_counter = ${inst_counter}
    slide_idx = ${slide_idx}
    prev_slide_idx = ${prev_slide_idx}
    inst_slide_idxs = ${inst_slide_idxs}`
    ;
    }
    
    
    // *inst_debug* updates
    if (t >= 0.0 && inst_debug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_debug.tStart = t;  // (not accounting for frame time here)
      inst_debug.frameNStart = frameN;  // exact frame index
      
      inst_debug.setAutoDraw(true);
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
    instComponents.forEach( function(thisComponent) {
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


function instRoutineEnd() {
  return async function () {
    //------Ending Routine 'inst'-------
    instComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    hide(GLOBAL_NEXT);
    
    // the Routine "inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var response;
var response_time;
var show_next;
var qn_slide_idx;
var qnSlide;
var cimg_names;
var mouse_over;
var gotValidClick;
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
    response = null;
    response_time = null;
    show_next = false;
    if (((((Number.parseInt(testQn) === 2) || (Number.parseInt(testQn) === 6)) || (Number.parseInt(testQn) === 7)) && (control_scores.slice((- 1))[0] !== 1))) {
        continueRoutine = false;
    } else {
        if ((((Number.parseInt(testQn) === 4) || (Number.parseInt(testQn) === 5)) && ((control_scores.slice((- 1))[0] !== 1) && (control_scores.slice((- 2))[0] !== 1)))) {
            continueRoutine = false;
        }
    }
    qn_slide_idx = slide_idxs.slice((- 1))[0];
    if ((qn_slide_idx > 9)) {
        qnSlide = `slide-${qn_slide_idx}`;
    } else {
        qnSlide = `slide-0${qn_slide_idx}`;
    }
    if (((qnSlide === "slide-12") || (qnSlide === "slide-13"))) {
        qnSlide = "slide-11";
    }
    if ((qnSlide === "slide-19")) {
        qnSlide = "slide-18";
    }
    if ((qnSlide === "slide-24")) {
        qnSlide = "slide-23";
    }
    unhide(SLIDES[qn_slide_idx], slide_size);
    cimgs = make_boxes(SLIDE_ATTRS[qnSlide], CLICK_BOX_OPACITY);
    cimg_names = [];
    for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((cimgs[i] === null)) {
            cimgs[i] = GLOBAL_BLANK;
            cimg_names.push("_");
        } else {
            cimg_names.push(cimgs[i].name);
        }
    }
    if (SHOW_DEBUG) {
        mouse_over = "_";
    }
    
    // setup some python lists for storing info about the trialMouse
    trialMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialMouse);
    trialComponents.push(trial_debug);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((response === null)) {
        for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            cimg = _pj_a[_pj_c];
            if ((cimg.contains(trialMouse) && trialMouse.getPressed()[0])) {
                response = cimg.name;
                response_time = t;
                break;
            }
        }
    }
    if (((! show_next) && (response !== null))) {
        show_next = true;
        unhide(GLOBAL_NEXT, NEXT_SIZE);
    }
    GLOBAL_MOUSE_state = GLOBAL_MOUSE.getPressed()[0];
    if ((GLOBAL_MOUSE_prev_state !== GLOBAL_MOUSE_state)) {
        GLOBAL_MOUSE_prev_state = GLOBAL_MOUSE_state;
        if ((GLOBAL_MOUSE_state === 1)) {
            if (GLOBAL_NEXT.contains(GLOBAL_MOUSE)) {
                continueRoutine = false;
            }
        }
    }
    if (SHOW_DEBUG) {
        mouse_over = "_";
        for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            cimg = _pj_a[_pj_c];
            if (cimg.contains(trialMouse)) {
                mouse_over = cimg.name;
                break;
            }
        }
        trial_debug.text = `trial
    taskNum = ${taskNum}
    qnNum = ${qnNum}
    qnSlide = ${qnSlide}
    qn_slide_idx = ${qn_slide_idx}
    cimg_names = ${cimg_names}
    corrAns1 = ${corrAns1}
    mouse_over = ${mouse_over}
    response = ${response}
    response_time = ${round(response_time, 3)}
    t = ${round(t, 3)}
    current_total_score = ${current_total_score}`
    ;
    }
    
    
    // *trial_debug* updates
    if (t >= 0.0 && trial_debug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_debug.tStart = t;  // (not accounting for frame time here)
      trial_debug.frameNStart = frameN;  // exact frame index
      
      trial_debug.setAutoDraw(true);
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


var outcome;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((corrAns2 === "NA")) {
        outcome = ((response === corrAns1) ? 1 : 0);
    } else {
        outcome = (((response === corrAns1) || (response === corrAns2)) ? 1 : 0);
    }
    trials.addData("response", response);
    if ((controlQn !== "NA")) {
        control_scores.push(outcome);
        trials.addData("control_score", outcome);
        trials.addData("test_score", null);
        trials.addData("current_total_score", null);
    }
    if ((testQn !== "NA")) {
        current_total_score += outcome;
        trials.addData("test_score", outcome);
        trials.addData("current_total_score", current_total_score);
    }
    trials.addData("response_time", response_time);
    hide(SLIDES[qn_slide_idx]);
    hide(GLOBAL_NEXT);
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        hide(cimg);
    }
    trials.addData("expVersion", "2022.08.26");
    
    // store data for psychoJS.experiment (ExperimentHandler)
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
