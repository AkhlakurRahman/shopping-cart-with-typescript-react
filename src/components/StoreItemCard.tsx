import { Card } from 'react-bootstrap'

type StoreItemCardProps = {
	id: number
	name: string
	price: number
	imgUrl: string
}

export default function StoreItemCard({
	id,
	name,
	price,
	imgUrl,
}: StoreItemCardProps) {
	return (
		<Card>
			<Card.Img
				variant='top'
				height='200px'
				src={imgUrl}
				style={{ objectFit: 'cover' }}
			/>
		</Card>
	)
}
