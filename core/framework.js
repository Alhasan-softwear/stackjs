// stk-framework.js
// A lightweight JavaScript framework for building web applications

(function(window) {
    'use strict';
var stk = {};

// Define state object
stk.state = {};
stk.data = {};
stk.socket = null;

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



stk.render = function(id, data) {
    document.getElementById(id).innerHTML = data;
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
  
  stk.lazyLoad = function() {
    var lazyElements = document.querySelectorAll('[data-lazy]');
    
    if (!('IntersectionObserver' in window)) {
      // Intersection Observer API not supported
      lazyElements.forEach(function(element) {
        element.src = element.dataset.lazy;
        element.removeAttribute('data-lazy');
      });
      return;
    }
    
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var element = entry.target;
          element.src = element.dataset.lazy;
          element.removeAttribute('data-lazy');
          observer.unobserve(element);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // trigger the loading when 10% of the element is visible
    });
    
    lazyElements.forEach(function(element) {
      observer.observe(element);
    });
  };
  
  window.addEventListener('load', stk.lazyLoad);
  stk.prefetchPages = function() {
    var links = document.querySelectorAll('a');
  
    if (!('IntersectionObserver' in window)) {
      // Intersection Observer API not supported, prefetch all links
      links.forEach(function(link) {
        var prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = link.href;
        document.head.appendChild(prefetchLink);
      });
      return;
    }
  
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var link = entry.target;
          var prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = link.href;
          document.head.appendChild(prefetchLink);
          observer.unobserve(link);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // prefetch when at least 50% of the link is visible
    });
  
    links.forEach(function(link) {
      observer.observe(link);
    });
  };
  
  window.addEventListener('load', stk.prefetchPages);


  stk.setData = function(key, value) {
    stk.data[key] = value;
  };
  
  stk.getData = function(key) {
    return stk.data[key];
  };
  
  stk.updateData = function(key, value) {
    if (stk.data[key]) {
      Object.assign(stk.data[key], value);
    } else {
      stk.setData(key, value);
    }
  };
  
  stk.deleteData = function(key) {
    delete stk.data[key];
  };
  


  stk.connect = function(url, onMessage) {
    if (stk.socket !== null) {
      console.warn("Socket already connected");
      return;
    }
    
    stk.socket = new WebSocket(url);
    
    stk.socket.onopen = function() {
      console.log("Socket connected");
    };
    
    stk.socket.onmessage = function(event) {
      onMessage(JSON.parse(event.data));
    };
    
    stk.socket.onclose = function() {
      console.log("Socket closed");
      stk.socket = null;
    };
    
    stk.socket.onerror = function(error) {
      console.error("Socket error:", error);
    };
  };
  
  stk.disconnect = function() {
    if (stk.socket === null) {
      console.warn("Socket not connected");
      return;
    }
    
    stk.socket.close();
  };
  
  stk.send = function(data) {
    if (stk.socket === null) {
      console.warn("Socket not connected");
      return;
    }
    
    stk.socket.send(JSON.stringify(data));
  };
  
  stk.reuse = function(id,filePath){
    // Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();



// Define a function to handle the response from the server
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Get the HTML content of the response
    var htmlContent = xhr.responseText;

    // Find the element in the DOM where you want to inject the HTML content
    var targetElement = document.getElementById(id);

    // Inject the HTML content into the target element
    targetElement.innerHTML = htmlContent;
  }
};

// Send a GET request to fetch the HTML template
xhr.open('GET', filePath, true);
xhr.send();

  }

  window.stk = stk;
})(window);