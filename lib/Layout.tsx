import { Inter } from 'next/font/google'
import styles from './Layout.module.css'
import { cc } from './cc'
import ErrorBoundary from './ErrorBoundary'
import { DebugOutput } from './DebugOutput'
import { Navigation } from './Navigation'
const inter = Inter({ subsets: ['latin'] })

export function Layout({children}: React.PropsWithChildren) {
  return (
    <div className={cc([styles.layout, inter.className])}>
      <header><h1>ISR Regex Issue Reproduction</h1></header>
      <ErrorBoundary name='main'>
        <div className={styles.main}>
          <Navigation />
          <main>
            {children}
          </main>
        </div>
      </ErrorBoundary>
      <DebugOutput />
    </div>
  )
}