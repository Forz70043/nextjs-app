import Head from 'next/head'

export default function Head() {
    return (
    <>
    <Head>
        <title>{process.env.TITLE_APP}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    </>
    )
}