import Head from 'next/head'
import Link from 'next/link'
import { Container, Image, List } from 'semantic-ui-react'
import styles from './layout.module.css'

export const Layout = ({ children }): JSX.Element => (
  <div>
    <Head>
      <title>fm.Coconuts.tech</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Image src="/Coconuts-logo3.svg" className={styles.topLogo} />
    <Container>{children}</Container>
    <footer className={styles.footer}>
      <Container>
        <List className={styles.footerLink}>
          <List.Item>
            <Link href="../about">
              <a>About</a>
            </Link>
          </List.Item>
        </List>
        Coconuts.tech all rights reserved.
      </Container>
    </footer>
  </div>
)

export default Layout
