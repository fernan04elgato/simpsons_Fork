interface ParamsCharacters{
    params: Promise<{
        idcharacter: string
    }>
}

export default async function IdCharacter ({params} : ParamsCharacters ) {
    const {idcharacter} = await params;
    return (
        <>
        <h1>{idcharacter}</h1>
        </>
    )
}
