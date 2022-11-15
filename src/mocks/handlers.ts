// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { rest } from 'msw'

// method, path, function that returns mock response
export const handlers = [
  rest.get(
    'https://api.tvmaze.com/schedule',
    (
      _: any,
      res: (arg0: any, arg1: any) => any,
      ctx: {
        status: (arg0: number) => any
        json: (arg0: { name: string }[]) => any
      },
    ) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            name: 'Title 1',
          },
          {
            name: 'Title 2',
          },
          {
            name: 'Title 3',
          },
        ]),
      )
    },
  ),
]
