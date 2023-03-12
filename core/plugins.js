stk.plugins = {};

stk.registerPlugin = function(plugin) {
    // Check if plugin is already registered
    if (stk.plugins[plugin.name]) {
      console.error('Plugin "' + plugin.name + '" already registered.');
      return;
    }
  
    // Register plugin
    stk.plugins[plugin.name] = plugin;
    console.log('Plugin "' + plugin.name + '" registered.');
  };

  stk.loadPlugins = function() {
    for (var pluginName in stk.plugins) {
      if (stk.plugins.hasOwnProperty(pluginName)) {
        var plugin = stk.plugins[pluginName];
        console.log('Loading plugin "' + plugin.name + '".');
        for (var methodName in plugin) {
          if (plugin.hasOwnProperty(methodName) && methodName !== 'name') {
            stk[methodName] = plugin[methodName];
            console.log('Method "' + methodName + '" added to the framework.');
          }
        }
      }
    }
  };
  