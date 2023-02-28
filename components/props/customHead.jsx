import Head from "next/head"

export default function CustomHead({ title, description, keywords, url }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={url} />
                <meta property="og:title" content={title} />
                <meta property="og:url" content={url} />
                <meta property="og:description" content={description} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="robots" content="index,follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:type" content="website" />
                {/* <meta property="og:image" content="https://www.example.com/image.jpg" /> */}
                <meta property="og:site_name" content="Rola Spare Parts" />
                <meta property="og:locale" content="en_US" />
                {/* <meta name="twitter:image" content="https://www.example.com/image.jpg" /> */}
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            </Head>
        </div>
    )
}