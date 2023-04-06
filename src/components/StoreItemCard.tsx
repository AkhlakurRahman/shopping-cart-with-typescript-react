import { Button, Card } from 'react-bootstrap'
import { currencyFormatter } from '../utilities/currencyFormatter'

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
	const quantity = 1

	return (
		<Card className='h-100'>
			<Card.Img
				variant='top'
				height='200px'
				src={imgUrl}
				style={{ objectFit: 'cover' }}
			/>

			<Card.Body className='d-flex flex-column'>
				<Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
					<span className='fs-2'>{name}</span>
					<span className='ml-2 text-muted'>
						{currencyFormatter(price)}
					</span>
				</Card.Title>
				<div className='mt-auto'>
					{quantity === 0 ? (
						<Button className='w-100'>+ Add To Cart</Button>
					) : (
						<div
							className='d-flex flex-column align-items-center'
							style={{ gap: '0.5rem' }}
						>
							<div
								className='d-flex justify-content-center align-items-certer'
								style={{ gap: '0.5rem' }}
							>
								<Button>-</Button>
								<div>
									<span className='fs-2'>{quantity}</span> in
									cart
								</div>
								<Button>+</Button>
							</div>
							<Button variant='danger' size='sm'>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	)
}
