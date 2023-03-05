const cryto = require('crypto')
const Deta = require('deta')
const deta = Deta(process.env.TOKEN)
const db = deta.Base('sessions')

const login = () => {
	let redirectLocation = new Buffer('https://scratchtutorials.pages.dev/handle').toString('base64');
	res.redirect(`https://auth.itinerary.eu.org/auth/?redirect=${redirectLocation}&name=Scratch%20Tutorials`);

	const { privateCode } = req.query;

	fetch(`https://auth.itinerary.eu.org/api/auth/verifyToken?privateCode=${privateCode}`, { method: 'GET' })
		.then((response) => response.json())
		.then((data) => {
			if (data.valid === true) {
				let sessionId = crypto.randomUUID();
				db.put({ sessionId: sessionId, username: data.username });
				res.status(200).json({ sessionId: sessionId });
			} else {
				res.status(403).json({ error: 'Authentication failed' });
			}
		});
}
