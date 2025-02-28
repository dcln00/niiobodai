import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
		},
		extend: {
			colors: {
				brand: {
					black: '#191a17',
					accent: '#9cc741',
					dark: '#131410',
					red: '#5c4732',
					bg: '#eef0f3'
				}
			}
		},
	},
}