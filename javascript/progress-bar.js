
      //create checkpoints
      var checkpoints = createCheckPoints(stages, stageWidth, currentStageIndex);
      wrapper.appendChild(checkpoints);

      return wrapper;
    };

    var validateParameters = function(stages, currentStage, container) {
      if(!(typeof stages === 'object' && stages.length && typeof stages[0] === 'string')) {
        console.error('Expecting Array of strings for "stages" parameter.');
        return false;
      }
      if(typeof currentStage !== 'string') {
        console.error('Expecting string for "current stage" parameter.');
        return false;
      }
      if(typeof container !== 'string' && typeof container !== 'undefined') {
        console.error('Expecting string for "container" parameter.');
        return false;
      }
      return true;
    };

    //exposing this function to user;
    ProgressBar.init = function (stages, currentStage, container) {
      if(validateParameters(stages, currentStage, container)) {
        var wrapper = document.getElementsByClassName(container);
        if(wrapper.length > 0) {
          wrapper = wrapper[0];
        } else {
          wrapper = createElement('div', 'progressbar-wrapper', { }, '');
          document.body.appendChild(wrapper);
        }
        createHTML(wrapper, stages, currentStage);
      }
    };
    return ProgressBar;
  }

  if (typeof ProgressBar === 'undefined') {
    window.ProgressBar = initProgressBar();
  } else {
    console.log('Progress bar loaded');
  }

})(window);