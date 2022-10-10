const dev = process.env.NODE_ENV !== 'production'

export const SERVER = {
	FRONTEND: {
		URL: (
			(dev)
			? 'http://localhost:3014/'
			: 'https://taslim-eniolla.vercel.app/'
		)
	},
	BACKEND: {
		URL: (
			(dev)
			? 'http://unknown/'
			: 'http://unknown/'
		)
	}
}

export const API_ROUTES = {
    PROJECTS: `${SERVER.FRONTEND.URL}/api/projects`
}
