var stk = {}
stk.route = function(route, callback, exactMatch) {
    var currentPath = window.location.pathname;
    if (exactMatch) {
      if (currentPath === route) {
        callback();
      }
    } else {
      if (currentPath.indexOf(route) !== -1) {
        callback();
      }
    }
  };

  stk.redirectTo = function(url) {
    window.location.href = url;
  };

  stk.initRoutes = function(routes) {
    routes.forEach(function(route) {
      stk.route(route.path, route.callback, route.exactMatch);
    });
  };
  