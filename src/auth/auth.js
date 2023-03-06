const cryto = require('crypto')
const Deta = require('deta')
const deta = Deta(process.env.TOKEN)
const db = deta.Base('sessions')

let sessionId = localStorage.getItem('sessionId')

const login = () => {
	let redirectLocation = new Buffer('https://scratchtutorials.pages.dev/handle').toString('base64');
	res.redirect(`https://auth.itinerary.eu.org/auth/?redirect=${redirectLocation}&name=Scratch%20Tutorials`);

	const { privateCode } = req.query;

	fetch(`https://auth.itinerary.eu.org/api/auth/verifyToken?privateCode=${privateCode}`, { method: 'GET' })
		.then((response) => response.json())
		.then((data) => {
			if (data.valid === true) {
				let sessionId = crypto.randomUUID();
				db.put(data.username, data.sessionId)
				localStorage.setItem('sessionId', sessionId)
			} else {
				res.status(403).json({ error: 'Authentication failed' })
			}
		});
}

const logout = () => {
	localStorage.removeItem('sessionId')
}

const loadPageWithUsername = username => {
	// Do everything you want
}

const fetchSessions = await db.fetch()
const sessions = fetchSessions.items
let i = 0
sessions.forEach(session => {
	if (session.key == sessionId) {
		loadPageWithUsername(session.value)
	} else {
		i += 1
	}
}
if (!sessionId || i == sessions.length) {
	login()
}
