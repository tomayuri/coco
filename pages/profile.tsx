import Layout from '../components/layout'
import { profiles } from '../domain/profile'
import { Image, Header, Grid, Segment, List, Label } from 'semantic-ui-react'

export const About = (): JSX.Element => (
  <Layout>
    <Header as="h2" dividing>
      Profile
    </Header>
    <Grid>
      {profiles.map((profile, index) => (
        <Grid.Row key={index}>
          <Grid.Column>
            <Segment>
              <Grid columns={2} textAlign="center">
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Header as="h2" dividing>
                      {profile.name}{' '}
                      {profile.twitter ? (
                        <a href={profile.twitter.url}>{profile.twitter.name}</a>
                      ) : null}
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign="middle">
                  <Grid.Column width={3}>
                    <Image
                      src={
                        profile.iconPath
                          ? profile.iconPath
                          : '/icons/anonymous.png'
                      }
                      circular
                      centered
                    />
                  </Grid.Column>
                  <Grid.Column width={13} textAlign="left">
                    <Header as="h3" dividing>
                      自己紹介
                    </Header>
                    <List as="ol">
                      {profile.introductions.map((introduction, index) => (
                        <List.Item as="li" value="-" key={index}>
                          <div
                            dangerouslySetInnerHTML={{ __html: introduction }}
                          ></div>
                        </List.Item>
                      ))}
                    </List>
                    {profile.skills ? (
                      <Header as="h3" dividing>
                        スキル
                      </Header>
                    ) : null}
                    {profile.skills?.map((skill, index) => (
                      <Label horizontal color="grey" key={index}>
                        {skill}
                      </Label>
                    ))}
                    {profile.skills ? (
                      <Header as="h3" dividing>
                        資格
                      </Header>
                    ) : null}
                    {profile.certified?.map((certified, index) => (
                      <Label horizontal color="grey" key={index}>
                        {certified}
                      </Label>
                    ))}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  </Layout>
)

export default About
