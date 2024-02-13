export async function GET(
    request: Request,
    { params }: { params: { id: string } },
  ) {
  
    const id = String(params.id)
  
    // const userInfo = await getUser(id);
    return new Response(JSON.stringify('asdf'));
  }