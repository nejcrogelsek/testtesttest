import { render, screen } from '@testing-library/react'

import CardList from '../CardList'

describe('CardList', () => {
    it('renders correctly', async () => {
        const data = [
            {
                id: '1',
                name: 'fdsfs',
                image: '/neki.png',
                rating: { average: 2.3 },
                show: {
                    id: '1',
                    name: 'Test',
                    image: {
                        medium: 'fd',
                        original: 'fd',
                    },
                    summary: 'fd',
                    genres: ['ju', 'jo'],
                    status: 'fd',
                    rating: {
                        average: 1,
                    },
                    schedule: {
                        days: ['ju', 'jo'],
                    },
                    network: {
                        name: 'fd'
                    },
                }
            },
            {
                id: '2',
                name: 'fdsfs',
                image: '/neki.png',
                rating: { average: 2.3 },
                show: {
                    id: '1',
                    name: 'Test',
                    image: {
                        medium: 'fd',
                        original: 'fd',
                    },
                    summary: 'fd',
                    genres: ['ju', 'jo'],
                    status: 'fd',
                    rating: {
                        average: 1,
                    },
                    schedule: {
                        days: ['ju', 'jo'],
                    },
                    network: {
                        name: 'fd'
                    },
                }
            },
            {
                id: '3',
                name: 'fdsfs',
                image: '/neki.png',
                rating: { average: 2.3 },
                show: {
                    id: '1',
                    name: 'Test',
                    image: {
                        medium: 'fd',
                        original: 'fd',
                    },
                    summary: 'fd',
                    genres: ['ju', 'jo'],
                    status: 'fd',
                    rating: {
                        average: 1,
                    },
                    schedule: {
                        days: ['ju', 'jo'],
                    },
                    network: {
                        name: 'fd'
                    },
                }
            }
        ]

        render(<CardList schedules={data} />)

        const list = screen.getByRole('list')
        expect(list).toBeInTheDocument()

        const listitem = await screen.findAllByRole('listitem')
        expect(listitem).toHaveLength(3)
    })
})
