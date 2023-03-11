var stk = {};

// Define state object
stk.state = {};

stk.getData = function(url, successCallback, errorCallback, type) {
  var xhr = new XMLHttpRequest();
  xhr.open(type, url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback(xhr.responseText);
      } else {
        errorCallback(xhr.statusText);
      }
    }
  };
  xhr.onerror = function() {
    errorCallback("Error occurred while making request");
  };
  xhr.send();
};

stk.renderTemplate = function(templateString, data) {
  try {
    var regex = /{{\s*([\w.]+)\s*}}/g;
    return templateString.replace(regex, function(match, property) {
      return data[property];
    });
  } catch (error) {
    console.error(error);
    return "";
  }
};

stk.bindData = function(templateString, data, containerId) {
  var container = document.getElementById(containerId);
  if (!container) {
    console.error("Container with ID " + containerId + " not found");
    return;
  }
  container.innerHTML = stk.renderTemplate(templateString, data);
};

stk.bindDataToCustomTag = function(tagName, templateString, data) {
  var elements = document.getElementsByTagName(tagName);
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var attributes = element.attributes;
    for (var j = 0; j < attributes.length; j++) {
      var attribute = attributes[j];
      if (attribute.name === "data-bind") {
        element.innerHTML = stk.renderTemplate(templateString, data);
      }
    }
  }
};

stk.navigateTo = function(url) {
  window.location.href = url;
};

stk.listener = function(id, event, func, usecapture) {
  var element = document.getElementById(id);
  if (!element) {
    console.error("Element with ID " + id + " not found");
    return;
  }
  element.addEventListener(event, func, usecapture);
};

stk.createElement = function(tagName, attributes, content) {
  var element = document.createElement(tagName);
  if (attributes) {
    for (var attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {
        element.setAttribute(attr, attributes[attr]);
      }
    }
  }
  if (content) {
    element.innerHTML = content;
  }
  return element;
};

stk.appendElement = function(parentElement, childElement) {
  parentElement.appendChild(childElement);
};

stk.removeElement = function(element) {
  element.parentNode.removeChild(element);
};

stk.addClass = function(element, className) {
  element.classList.add(className);
};

stk.removeClass = function(element, className) {
  element.classList.remove(className);
};

stk.setStyle = function(element, styleName, styleValue) {
  element.style[styleName] = styleValue;
};

stk.getComputedStyle = function(element, styleName) {
  return window.getComputedStyle(element)[styleName];
};

// Update state
stk.updateState = function(newState) {
  Object.assign(stk.state, newState);
};

// Get state
stk.getState = function() {
  return stk.state;
};
stk.showcon = function(element) {
    document.body.insertAdjacentHTML('beforeend', element);
  };
  
