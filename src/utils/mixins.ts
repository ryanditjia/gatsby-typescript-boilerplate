import { css } from '@emotion/core'
import { hexToRGB, numberFormat } from './helpers'

const scrimStops = [
	[1, 0],
	[0.738, 19],
	[0.541, 34],
	[0.382, 47],
	[0.278, 56.5],
	[0.194, 65],
	[0.126, 73],
	[0.075, 80.2],
	[0.042, 86.1],
	[0.021, 91],
	[0.008, 95.2],
	[0.002, 98.2],
	[0, 100],
].map(stop => ({
	alpha: stop[0],
	stopPositionInPercent: stop[1],
}))

export function scrimGradient({
	color,
	direction,
	startAlpha = 1,
}: {
	color: string
	direction: string
	startAlpha?: number
}) {
	const stopsWithRecomputedAlphas = scrimStops.map(
		({ alpha, stopPositionInPercent }) => ({
			alpha: numberFormat(alpha * startAlpha, 3),
			stopPositionInPercent,
		}),
	)

	return css`
		background-image: linear-gradient(
			${direction},
			${stopsWithRecomputedAlphas
				.map(
					({ alpha, stopPositionInPercent }) =>
						`${hexToRGB(color, alpha)} ${stopPositionInPercent}%`,
				)
				.join(',')}
		);
	`
}
