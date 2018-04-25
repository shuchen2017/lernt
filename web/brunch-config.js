// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'},
};

exports.server = {
  hostname: '0.0.0.0'
}

exports.plugins = {
  babel: {presets: ['env', 'react', 'stage-2']}
};
