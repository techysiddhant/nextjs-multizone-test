
const BlogPost = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;
    return (
        <div>BlogPost {id}</div>
    )
}

export default BlogPost