import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useIsClient } from '../lib/useIsClient';

export function getStaticProps() {
  return {
    props: {
      renderDate: Date.now()
    },
    revalidate: 60
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function SSRPage(props: Props) {
  const date = new Date(props.renderDate);
  const isClient = useIsClient();

  return (
    <>
      <Head>
        <title>ISR Regex Issue Reproduction - ISR</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      This page is page uses ISR and should start throwing Errors a minute after deployment/build.<br/>
      You may need to refresh the page to restart hydration as client routing does not use server-generated HTML.<br/>
      This page was generated at {isClient ? date.toLocaleTimeString() : date.toISOString()}.
    </>
  )
}
