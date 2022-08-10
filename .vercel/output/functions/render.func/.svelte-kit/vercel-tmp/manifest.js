export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","favicon.png","images/A.png","images/Arrow.png","images/ArrowLeft.png","images/Book.png","images/C.png","images/E.png","images/Education.png","images/Experience.png","images/Githubcoin.gif","images/Githubcoin1.png","images/Linkedincoin.gif","images/Linkedincoin1.png","images/R.png","images/S.png","images/Socials.png","images/Stest.png","images/circle.png","images/logo.png","images/logo2.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif"},
	_: {
		entry: {"file":"_app/immutable/start-a81d1fee.js","imports":["_app/immutable/start-a81d1fee.js","_app/immutable/chunks/index-e7d4872c.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
