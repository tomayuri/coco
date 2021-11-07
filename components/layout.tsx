import Head from 'next/head'
import Link from 'next/link'
import { Container, Image, List, Grid } from 'semantic-ui-react'
import styles from './layout.module.css'
import { Menu } from 'semantic-ui-react'

export const Layout = ({ children }): JSX.Element => (
  <div>
    <Head>
      <title>fm.Coconuts.tech</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <Grid container columns={1}>
        <Grid.Row>
          <Grid.Column columns={1}>
            <Menu text>
              <Menu.Item href="/">Top</Menu.Item>
              <Menu.Item href="/profile">Profile</Menu.Item>
              <Menu.Item href="/contact">Contact</Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </header>
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
                <Link href="/">
                  <a>Top</a>
                </Link>
              </List.Item>
              <List.Item>
                <Link href="/profile">
                  <a>Profile</a>
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
