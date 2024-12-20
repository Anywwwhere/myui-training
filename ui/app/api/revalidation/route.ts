
export async function POST(req: Request) {
    const body = await req.json()
    const { event } = body

    console.log(event)
    return new Response('revalidated', {
        status: 200,

    })
}