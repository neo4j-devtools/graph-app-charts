import React, {Component} from 'react';
import {Item,Rating,Card,Button,Statistic,Grid,Divider,Segment,Icon,List} from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme, VictoryStack, VictoryLine,VictoryLabel } from 'victory';

class PersonChart extends Component {
  render() {
    return(
      <div>
      <Item>
        <Item.Content verticalAlign='middle'>
          <Item.Header>Name: {this.props.name} </Item.Header>
          <Rating icon='star' defaultRating={3} maxRating={4} />

          <Item.Extra>
            <Statistic.Group color='teal'>
              <Statistic>
                <Statistic.Value>
                  <NumberFormat value={this.props.movieCount.toInt()} displayType={'text'}/>
                  </Statistic.Value>
                <Statistic.Label>Movies Acted In</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{this.props.coStaffCount.toInt()}</Statistic.Value>
                <Statistic.Label>Co-Staff (Actors, Directors, ...)</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value><NumberFormat value={this.props.firstYear.toInt()} displayType={'text'}/></Statistic.Value>
                <Statistic.Label>First Year</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{this.props.lastYear.toInt()}</Statistic.Value>
                <Statistic.Label>Last Year</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value><NumberFormat value={this.props.moviesPerYear} displayType={'text'}  decimalScale={2} /></Statistic.Value>
                <Statistic.Label>Movies Per Year Year</Statistic.Label>
              </Statistic>

            </Statistic.Group>
            {/*<div className='ui two buttons'>
              <Button basic color='green'>Approve</Button>
              <Button basic color='red'>Flag</Button>
            </div>
            */}
          </Item.Extra>
           {/*
          <Item.Meta>Name: {this.props.name}</Item.Meta>
          <Item.Meta>First Year: {this.props.firstYear.toInt()}</Item.Meta>
          <Item.Meta>Last Year: {this.props.lastYear.toInt()}</Item.Meta>
          <Item.Meta>Movie Count: {this.props.movieCount.toInt()}</Item.Meta>
          */}
          <Item.Extra
            floated='right'
            style={{"height": "25%"}}
          >

            <Grid columns={4}>

                <Grid.Column key={1}>
                  <Item>
                  <VictoryChart domainPadding={20} theme={VictoryTheme.material} style={{"width": "10%", "height": "10%"}} floated='right'>
                    <VictoryLabel text="Co-Actors Per Movie" x={200} y={30} textAnchor="middle"/>
                    <VictoryAxis
                      tickLabelComponent={<VictoryLabel angle={-45} dy={15} verticalAnchor='start'/>}
                      tickValues={this.props.movies.map((m)=>{ return m.title;})}
                      padding={50}
                    />
                    <VictoryAxis dependentAxis/>
                    <VictoryStack>
                      <VictoryBar
                        data={this.props.movies}
                        x="title"
                        y={(x) => (x.staff.length)}
                        label={(x) => (x.staff.join(" "))}
                      />
                    </VictoryStack>
                  </VictoryChart>
                  </Item>
                </Grid.Column>
                <Grid.Column key={2}>
                  <Item>
                    <VictoryChart theme={VictoryTheme.material}>
                    <VictoryAxis domain={[this.props.firstYear.toInt(), this.props.lastYear.toInt()]} tickCount={this.props.lastYear.toInt()-this.props.firstYear.toInt()} padding={100}/>
                    <VictoryAxis dependentAxis  padding={50}/>
                      <VictoryLabel text="Movies Per Year" x={200} y={30} textAnchor="middle"/>
                      <VictoryBar
                        data={this.props.movies}
                        x={(x) => x.released.toInt()}
                        y={(x) => this.props.movies.filter((m) => m.released.toInt() == x.released.toInt()).length}
                      />
                    </VictoryChart>
                  </Item>
              </Grid.Column>
{/*
                <Grid.Column key={3}>
                  <Item>
                    <VictoryChart
                      theme={VictoryTheme.material}
                    >
                      <VictoryLabel text="More Data" x={200} y={30} textAnchor="middle"/>
                      <VictoryLine
                        style={{
                          data: { stroke: "#261ec4" },
                          parent: { border: "1px solid #ccc"}
                        }}
                        data={this.props.incomingSeries}
                      />
                    </VictoryChart>
                  </Item>
              </Grid.Column>
                <Grid.Column key={4}>
                  <Item>
                    <VictoryChart
                      theme={VictoryTheme.material}
                    >
                      <VictoryLabel text="More data" x={200} y={30} textAnchor="middle"/>
                      <VictoryLine
                        style={{
                          data: { stroke: "#7fc42c" },
                          parent: { border: "1px solid #ccc"}
                        }}
                        data={this.props.allSeries}
                      />
                    </VictoryChart>
                  </Item>
              </Grid.Column>
*/}

            </Grid>
          </Item.Extra>
        </Item.Content>
      </Item>

      <Item divided="true">
        <Item.Extra>
        Movies:
        <Card.Group>
          {this.props.movies.map(movie => (
            <Card key={movie.title}>
              <Card.Content>

                <Card.Header>
                  {movie.title}
                </Card.Header>
                <Card.Meta>
                  {movie.tagline}
                </Card.Meta>
                <Card.Description>
                  Movie Staff: 
                  <List>
                  {movie.staff.map((st)=><List.Item><Icon name='user' />{st}</List.Item>)}
                  </List>

                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                 <Segment.Group horizontal>
                    <Segment basic><Icon name='user' />{movie.staff.length} Staff</Segment>
                    <Segment basic>{movie.released.toInt()}</Segment>
                 </Segment.Group>
              </Card.Content>
            </Card>
          ))}

        </Card.Group>
          </Item.Extra>
      </Item>
        <Divider horizontal>-----</Divider>
      </div>
    )
  }
}

export default PersonChart;