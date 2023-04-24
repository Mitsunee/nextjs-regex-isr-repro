import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useIsClient } from '../lib/useIsClient';

export function getStaticProps() {
  return {
    props: {
      renderDate: Date.now()
    }
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function SSRPage(props: Props) {
  const date = new Date(props.renderDate);
  const isClient = useIsClient();

  return (
    <>
      <Head>
        <title>ISR Regex Issue Reproduction - SSG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      This page is statically generated with SSR at build time. It should have no issues highlighting itself.<br/>
      This page was generated at {isClient ? date.toLocaleTimeString() : date.toISOString()}.
    </>
  )
}