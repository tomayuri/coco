import Layout from '../components/layout'
// import Image from 'next/image'
import { Image, Header, Grid, Segment, List, Label } from 'semantic-ui-react'

export const About = (): JSX.Element => (
  <Layout>
    <Header as="h2" dividing>
      About
    </Header>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Grid columns={2} textAlign="center">
              <Grid.Row verticalAlign="middle">
                <Grid.Column width={3}>
                  <Image
                    src="https://pbs.twimg.com/profile_images/920555484775514113/-UwMM-OX_400x400.jpg"
                    circular
                  />
                </Grid.Column>
                <Grid.Column width={13} textAlign="left">
                  <Header as="h3" dividing>
                    自己紹介
                  </Header>
                  <List as="ol">
                    <List.Item as="li" value="-">
                      株式会社フレクト勤務。IoTをメインにAWSを使った開発をしている。
                    </List.Item>
                    <List.Item as="li" value="-">
                      Scrumマスターをしている。
                    </List.Item>
                    <List.Item as="li" value="-">
                      体調崩しがち。
                    </List.Item>
                    <List.Item as="li" value="-">
                      Podcastは
                      <a href="https://www.shiganai.org">#しがないラジオ</a>,
                      <a href="">#aozorafm</a>にも出てたりする。
                    </List.Item>
                  </List>
                  <Header as="h3" dividing>
                    スキル
                  </Header>
                  <Label horizontal color="black">
                    java
                  </Label>
                  <Label horizontal color="black">
                    JavaScript
                  </Label>
                  <Label horizontal color="black">
                    TypeScript
                  </Label>
                  <Label horizontal color="black">
                    AWS
                  </Label>
                  <Label horizontal color="black">
                    Salesforce
                  </Label>
                  <Label horizontal color="black">
                    Golang(始めたばかり)
                  </Label>

                  <Header as="h3" dividing>
                    資格
                  </Header>
                  <Label horizontal color="blue">
                    Salesforce Certified Administrator
                  </Label>
                  <Label horizontal color="blue">
                    Salesforce Certified Platform App Builder
                  </Label>
                  <Label horizontal color="blue">
                    Salesforce Certified Platform Developer I
                  </Label>
                  <Label horizontal color="blue">
                    Salesforce Certified Service Cloud Consultant
                  </Label>
                  <Label horizontal color="blue">
                    Salesforce Certified Platform App Builder
                  </Label>
                  <Label horizontal color="orange">
                    AWS Certified Solutions Architect - Associate (SAA)
                  </Label>
                  <Label horizontal color="red">
                    Scrum Inc.認定スクラムマスター（LSM）
                  </Label>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
)

export default About
