import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import FlatButton from 'material-ui/FlatButton';

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
  } from 'material-ui/Card';

import React from 'react';

const style = {
  color: 'green'
};

const Earth = React.createClass({
  render() {
    return (

        <div>
          <h1>Earth</h1>
          <div>
          <FlatButton label="earth" default={true} href="/"/>
          <FlatButton label="moon" primary={true} href="/moon"/>
          <FlatButton label="mars" secondary={true} href="/mars"/>
          </div>
          <Grid fluid>
          <Row>
          <Col xs={12} sm={6} md={3}>
            <Card id="child">
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
              Lorem ipsum dolor.
              </CardText>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card id="child">
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
              Lorem ipsum dolor.
              </CardText>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card id="child">
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
              Lorem ipsum dolor.
              </CardText>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card id="child">
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
              Lorem ipsum dolor.
              </CardText>
            </Card>
          </Col>
          </Row>
          </Grid>
        </div>
    )
  }
});

export default Earth;
