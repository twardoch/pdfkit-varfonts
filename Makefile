.PHONY: js



browser: lib/**/*.js
	mkdir -p build/
	./node_modules/.bin/browserify \
		--standalone PDFDocument \
		--debug \
		lib/document.js \
		| ./node_modules/.bin/exorcist build/pdfkit.js.map > build/pdfkit.js

browser-demo: docs/browser.js
	./node_modules/.bin/browserify docs/browser.js -o demo/bundle.js

docs: website browser-demo
	cd docs && npx coffee test.coffee



website:
	mkdir -p docs/img
	npx coffee srcdocs/generate_website.coffee

clean:
	rm -rf js build demo/bundle.js
