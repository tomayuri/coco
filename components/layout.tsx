import Head from 'next/head'
import Link from 'next/link'
import { Container, Image, List, Grid } from 'semantic-ui-react'
import styles from './layout.module.css'

export const Layout = ({ children }): JSX.Element => (
  <div>
    <Head>
      <title>fm.Coconuts.tech</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Image src="/Coconuts-logo3.svg" className={styles.topLogo} />
    <main className={styles.mainContainer}>
      <Container>{children}</Container>
    </main>
    <footer className={styles.footer}>
      <Grid container columns={1}>
        <Grid.Row>
          <Grid.Column columns={1}>
            <List bulleted>
              <List.Item>
                <Link href="../">
                  <a>Top</a>
                </Link>
              </List.Item>
              <List.Item>
                <Link href="../about">
                  <a>About</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center" columns={1}>
          <Grid.Column>Coconuts.tech all rights reserved.</Grid.Column>
        </Grid.Row>
      </Grid>
    </footer>
  </div>
)

export default Layout
