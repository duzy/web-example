all: .CHECK.react \
  hello.js

.CHECK.react:
#	npm list react react-dom babelify babel-preset-react
#	npm install --save react react-dom babelify babel-preset-react marked
#	@touch $@

hello.js: hello.jsx
	browserify -t [ babelify --presets [ react ] ] $< -o $@
