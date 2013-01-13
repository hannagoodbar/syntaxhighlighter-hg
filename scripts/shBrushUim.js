/**
 *
 * IBM i5/OS UIM (user interface manager) brush file.
 *
 * Written by Hanna Goodbar <hanna.goodbar@gmail.com>
 * (formerly Loyd Goodbar <loyd@blackrobes.net>), 2009, 2011.
 * getFunctions() code from helen at alexgorbatchev.com forums.
 *
 * Adapted for SyntaxHighlighter v3.
 *
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
{
	// Tags with corresponding end tag.
	var etags = ':e?(cit|class|data(grp|slt)?|dl|fig|help|hp[0-9]|info|keyl|'+
		'lines|link|list(grp)?|mbarc?|menu(grp)?|note|nt|panel|parml|'+
		'pdfld|pk|pnlgrp|prthead|prtpnl|pv|ol|rt|sl|tl|tt|ul|xmp)[.]?';

	// Standalone tags.
	var tags = ':(appfmt|botinst|check|cmdline|cond|copyr|datac(ol)?|dataix?|'+
		'datasltc|(dd|dt)(hd)?|figcap|h[1-4]|imhelp|import|isch(syn)?|'+
		'keyi|li|list(act|col|def|view)|lp|menui|mi|optline|pc|'+
		'pd(accel|fldc)?|prttrail|pt|p|text|ti|topinst|ttrow|var(rcd)?|'+
		'xh[1-4])[.]?';

	var symbols = '&(amp;)?(amp|colon|cont|msg|period|slr)[.]';

	var comments = '^[.*].*$';

	this.regexList = [
		{ regex: new RegExp(comments, 'gmi'), css: 'comments' },
		{ regex: new RegExp(tags, 'gmi'), css: 'keyword' },
		{ regex: new RegExp(etags, 'gmi'), css: 'keyword' },
		{ regex: new RegExp(symbols, 'gmi'), css: 'color3' }
	];
};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['uim'];

	SyntaxHighlighter.brushes.Uim = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
