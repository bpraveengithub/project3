(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*--------------------------------------------------------------\nCSS Reset\n--------------------------------------------------------------*/\nhtml {\n\tfont-family: sans-serif;\n\t-webkit-text-size-adjust: 100%;\n\t-ms-text-size-adjust:     100%;\n}\nbody {\n\tmargin: 0;\n}\nbody{\n    background-color: #000;\n    background-image:url('MainBackground.jpg');\n    background-position:center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n\tdisplay: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n\tdisplay: inline-block;\n\tvertical-align: baseline;\n}\naudio:not([controls]) {\n\tdisplay: none;\n\theight: 0;\n}\n[hidden],\ntemplate {\n\tdisplay: none;\n}\na {\n\tbackground-color: transparent;\n}\na:active,\na:hover {\n\toutline: 0;\n}\nabbr[title] {\n\tborder-bottom: 1px dotted;\n}\nb,\nstrong {\n\tfont-weight: bold;\n}\ndfn {\n\tfont-style: italic;\n}\nh1 {\n\tfont-size: 2em;\n\tmargin: 0.67em 0;\n}\nmark {\n\tbackground: #ff0;\n\tcolor: #000;\n}\nsmall {\n\tfont-size: 80%;\n}\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\nsup {\n\ttop: -0.5em;\n}\nsub {\n\tbottom: -0.25em;\n}\nimg {\n\tdisplay: block;\n\tborder: 0;\n\twidth: 100%;\n\theight: auto;\n}\nsvg:not(:root) {\n\toverflow: hidden;\n}\nfigure {\n\tmargin: 1em 40px;\n}\nhr {\n\tbox-sizing: content-box;\n\theight: 0;\n}\npre {\n\toverflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n\tfont-family: monospace, monospace;\n\tfont-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tcolor: inherit;\n\tfont: inherit;\n\tmargin: 0;\n}\nbutton {\n\toverflow: visible;\n}\nbutton,\nselect {\n\ttext-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n\t-webkit-appearance: button;\n\tcursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n\tcursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}\ninput {\n\tline-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n\tbox-sizing: border-box;\n\tpadding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n\theight: auto;\n}\ninput[type=\"search\"] {\n\t-webkit-appearance: textfield;\n\tbox-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\nfieldset {\n\tborder: 1px solid #c0c0c0;\n\tmargin: 0 2px;\n\tpadding: 0.35em 0.625em 0.75em;\n}\nlegend {\n\tborder: 0;\n\tpadding: 0;\n\t\n}\ntextarea {\n\toverflow: auto;\n}\noptgroup {\n\tfont-weight: bold;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ntd,\nth {\n\tpadding: 0;\n}\n/*index css */\nbody{\n    color:white;\n  }\nheader,footer{\n    height:3em;\n  }\n@media screen  and (min-width:1120px){\n      .content-area{\n\t\tdisplay:flex;\n\t\t\t\t\n      }\n      .side-bar{\n        flex:0 0 20%;\n      }\n      .content{\n        flex-grow:1;\n      }\n\n    }\n/*button css */\n.btn-green{\n    background-image: linear-gradient(to top, #087700, #358a00, #549d00, #73b000, #92c300);\n    border:none;\n    text-transform: uppercase;\n    padding:.3em 1em;\n    width:100%;\n    color:#000;\n    text-shadow: #000;\n    font-weight:bold;\n    font-size:1.5em;\n}\n.btn-green>span{\n\tdisplay:block;\n\tcolor:#fff;\n\tfont-size:.5em;\n\t\n}\n.c-y{\n\tcolor:yellow;\n}\n.c-w{\n\tcolor:#fff;\n}\n.m-tb-p5{\n\tmargin:.5em 0;\n}\n.align-center{\n\ttext-align:center;\n}\n.gradiant-back-sec{\n    background-image: linear-gradient(to bottom, #180101, #2b0907, #3f0a0b, #53090b, #680707);\n    padding:2em .5em 4em .5em;\n}\n.dark-background{\n\tpadding:.2em .2em;\n    color:#fff;\n    background-color:#0f0000;\n    border:1px solid #6a0000;\n}\n/*faq*/\n.faq-wrapper{\n    display:flex;\n\tflex-wrap: wrap;\n\t\n}\n.faq-section .sidebar-left{\n    flex:0 0 30%;\n}\n.faq-main-content{\n    flex:1 1 65%;\n   padding:0 0 0 1em;\n    text-align: justify;\n}\n.faq-nav ul {\n    list-style: none;\n    padding: 0;\n    background-color: #400000;\n    border:1px solid #930202;\n  }\n.faq-nav ul li {\n    padding-left: 1.3em;\n\tcolor:yellow;\n\tcursor: pointer;\n  }\n.faq-nav ul li a:before {\n    content: \"\\f04b\"; /* FontAwesome Unicode */\n    font-family: FontAwesome;\n    display: inline-block;\n    margin-left: -1.3em; /* same as padding-left set on li */\n    width: 1.3em; /* same as padding-left set on li */\n    font-size:.5em;\n   \n    \n  }\n.faq-nav ul li a{\n      color:yellow;\n      text-decoration: none;\n      display:block;\n      margin:1em;\n  }\n.faq-nav ul li a:hover{\n    color:#fff;\n    \n}\n.faq-section{\n\tbackground-color: #180101;\n\tpadding:0 1em;\n}\nh1{\n    margin:0;\n    padding:1em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,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Qix3QkFBd0I7QUFDNUI7QUFFQSxNQUFNO0FBQ047SUFDSSxZQUFZO0NBQ2YsZUFBZTs7QUFFaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7R0FDYixpQkFBaUI7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6Qix3QkFBd0I7RUFDMUI7QUFDQTtJQUNFLG1CQUFtQjtDQUN0QixZQUFZO0NBQ1osZUFBZTtFQUNkO0FBRUE7SUFDRSxnQkFBZ0IsRUFBRSx3QkFBd0I7SUFDMUMsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixtQkFBbUIsRUFBRSxtQ0FBbUM7SUFDeEQsWUFBWSxFQUFFLG1DQUFtQztJQUNqRCxjQUFjOzs7RUFHaEI7QUFDQTtNQUNJLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsYUFBYTtNQUNiLFVBQVU7RUFDZDtBQUNBO0lBQ0UsVUFBVTs7QUFFZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7QUFDZDtBQUNBO0lBQ0ksUUFBUTtJQUNSLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5DU1MgUmVzZXRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmh0bWwge1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuXHQtbXMtdGV4dC1zaXplLWFkanVzdDogICAgIDEwMCU7XG59XG5cbmJvZHkge1xuXHRtYXJnaW46IDA7XG59XG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoYXNzZXRzL2ltYWdlcy9NYWluQmFja2dyb3VuZC5qcGcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbm1haW4sXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnkge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdGhlaWdodDogMDtcbn1cblxuW2hpZGRlbl0sXG50ZW1wbGF0ZSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbmEge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYTphY3RpdmUsXG5hOmhvdmVyIHtcblx0b3V0bGluZTogMDtcbn1cblxuYWJiclt0aXRsZV0ge1xuXHRib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xufVxuXG5iLFxuc3Ryb25nIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRmbiB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuaDEge1xuXHRmb250LXNpemU6IDJlbTtcblx0bWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxubWFyayB7XG5cdGJhY2tncm91bmQ6ICNmZjA7XG5cdGNvbG9yOiAjMDAwO1xufVxuXG5zbWFsbCB7XG5cdGZvbnQtc2l6ZTogODAlO1xufVxuXG5zdWIsXG5zdXAge1xuXHRmb250LXNpemU6IDc1JTtcblx0bGluZS1oZWlnaHQ6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuXHR0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcblx0Ym90dG9tOiAtMC4yNWVtO1xufVxuXG5pbWcge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Ym9yZGVyOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG5zdmc6bm90KDpyb290KSB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmZpZ3VyZSB7XG5cdG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbmhyIHtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdGhlaWdodDogMDtcbn1cblxucHJlIHtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuXHRmb250LXNpemU6IDFlbTtcbn1cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdG1hcmdpbjogMDtcbn1cblxuYnV0dG9uIHtcblx0b3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbmJ1dHRvbixcbnNlbGVjdCB7XG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5idXR0b24sXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcblx0Y3Vyc29yOiBkZWZhdWx0O1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG5cdGJvcmRlcjogMDtcblx0cGFkZGluZzogMDtcbn1cblxuaW5wdXQge1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRwYWRkaW5nOiAwO1xufVxuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG5cdGhlaWdodDogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmZpZWxkc2V0IHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcblx0bWFyZ2luOiAwIDJweDtcblx0cGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xufVxuXG5sZWdlbmQge1xuXHRib3JkZXI6IDA7XG5cdHBhZGRpbmc6IDA7XG5cdFxufVxuXG50ZXh0YXJlYSB7XG5cdG92ZXJmbG93OiBhdXRvO1xufVxuXG5vcHRncm91cCB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcblx0cGFkZGluZzogMDtcbn1cblxuLyppbmRleCBjc3MgKi9cbmJvZHl7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbiAgaGVhZGVyLGZvb3RlcntcbiAgICBoZWlnaHQ6M2VtO1xuICB9XG4gICAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6MTEyMHB4KXtcbiAgICAgIC5jb250ZW50LWFyZWF7XG5cdFx0ZGlzcGxheTpmbGV4O1xuXHRcdFx0XHRcbiAgICAgIH1cbiAgICAgIC5zaWRlLWJhcntcbiAgICAgICAgZmxleDowIDAgMjAlO1xuICAgICAgfVxuICAgICAgLmNvbnRlbnR7XG4gICAgICAgIGZsZXgtZ3JvdzoxO1xuICAgICAgfVxuXG4gICAgfVxuXG5cbi8qYnV0dG9uIGNzcyAqL1xuXG4uYnRuLWdyZWVue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwODc3MDAsICMzNThhMDAsICM1NDlkMDAsICM3M2IwMDAsICM5MmMzMDApO1xuICAgIGJvcmRlcjpub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzouM2VtIDFlbTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGNvbG9yOiMwMDA7XG4gICAgdGV4dC1zaGFkb3c6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBmb250LXNpemU6MS41ZW07XG59XG5cbi5idG4tZ3JlZW4+c3Bhbntcblx0ZGlzcGxheTpibG9jaztcblx0Y29sb3I6I2ZmZjtcblx0Zm9udC1zaXplOi41ZW07XG5cdFxufVxuLmMteXtcblx0Y29sb3I6eWVsbG93O1xufVxuLmMtd3tcblx0Y29sb3I6I2ZmZjtcbn1cbi5tLXRiLXA1e1xuXHRtYXJnaW46LjVlbSAwO1xufVxuLmFsaWduLWNlbnRlcntcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG59XG4uZ3JhZGlhbnQtYmFjay1zZWN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE4MDEwMSwgIzJiMDkwNywgIzNmMGEwYiwgIzUzMDkwYiwgIzY4MDcwNyk7XG4gICAgcGFkZGluZzoyZW0gLjVlbSA0ZW0gLjVlbTtcbn1cbi5kYXJrLWJhY2tncm91bmR7XG5cdHBhZGRpbmc6LjJlbSAuMmVtO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGYwMDAwO1xuICAgIGJvcmRlcjoxcHggc29saWQgIzZhMDAwMDtcbn1cblxuLypmYXEqL1xuLmZhcS13cmFwcGVye1xuICAgIGRpc3BsYXk6ZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRcbn1cblxuLmZhcS1zZWN0aW9uIC5zaWRlYmFyLWxlZnR7XG4gICAgZmxleDowIDAgMzAlO1xufVxuXG4uZmFxLW1haW4tY29udGVudHtcbiAgICBmbGV4OjEgMSA2NSU7XG4gICBwYWRkaW5nOjAgMCAwIDFlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uZmFxLW5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDAwMDA7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjOTMwMjAyO1xuICB9XG4gIC5mYXEtbmF2IHVsIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuM2VtO1xuXHRjb2xvcjp5ZWxsb3c7XG5cdGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuIFxuICAuZmFxLW5hdiB1bCBsaSBhOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYwNGJcIjsgLyogRm9udEF3ZXNvbWUgVW5pY29kZSAqL1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjNlbTsgLyogc2FtZSBhcyBwYWRkaW5nLWxlZnQgc2V0IG9uIGxpICovXG4gICAgd2lkdGg6IDEuM2VtOyAvKiBzYW1lIGFzIHBhZGRpbmctbGVmdCBzZXQgb24gbGkgKi9cbiAgICBmb250LXNpemU6LjVlbTtcbiAgIFxuICAgIFxuICB9XG4gIC5mYXEtbmF2IHVsIGxpIGF7XG4gICAgICBjb2xvcjp5ZWxsb3c7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgbWFyZ2luOjFlbTtcbiAgfVxuICAuZmFxLW5hdiB1bCBsaSBhOmhvdmVye1xuICAgIGNvbG9yOiNmZmY7XG4gICAgXG59XG4uZmFxLXNlY3Rpb257XG5cdGJhY2tncm91bmQtY29sb3I6ICMxODAxMDE7XG5cdHBhZGRpbmc6MCAxZW07XG59XG5oMXtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjFlbSAwO1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularProject\project\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map