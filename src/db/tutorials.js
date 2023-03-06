const Deta = require('deta')
const deta = Deta(process.env.TOKEN)
const db = deta.Base('sessions')
const tutos = deta.Base('tutorials')

let isConnected 
let sessionId = localStorage.getItem('sessionId')
const fetchSessions = await db.fetch()
const sessions = fetchSessions.items
sessions.forEach(session => {
	if (!isConnected) { isConnected = newBoolean(session.key == localStorage.getItem('sessionId')) }
})

const createTutorial = (tutorial, author) => {
	if (tutorial.title && tutorial.description && tutorial.body && tutorial.title.length < 64 && tutorials.descrition.length < 256 && tutorials.body.length < 7160 && isConnected) {
		tutorial.author = author
		tutos.put(tutorial, sessions.length)
	}
}
