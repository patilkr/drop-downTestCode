var data = require("self").data;

// Create a panel whose content is defined in "text-entry.html".
var userUI = require("panel").Panel({
  width: 800,
  height: 600,
  contentURL: data.url("user_UI.html"),
});

// Create a widget, and attach the panel to it, so the panel is
// shown when the user clicks the widget.
require("widget").Widget({
  label: "UserUI",
  id: "userUIPolicy",
  contentURL: data.url("CSP_logo-48*54.jpg"),
  panel: userUI
});