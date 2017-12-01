import React, { Component } from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Button,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem,
  Badge
} from 'reactstrap';
import classnames from 'classnames';

export default class TaskMgt extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.tabToggle = this.tabToggle.bind(this);
    this.createTask = this.createTask.bind(this);

    this.state = { collapse: false, activeTab: '1' };
  }

  componentDidMount() {}

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  tabToggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  createTask() {
    console.log('Create task...');
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card className="b-panel">
          <CardHeader>
            <h3 className="b-panel-title">
              <i className="icon-notebook b-icon" />
              Search parameters
            </h3>
            <span className="b-panel-actions">
              <i className="icon-plus b-icon" onClick={this.toggle} />
            </span>
          </CardHeader>

          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === '1'
                    })}
                    onClick={() => {
                      this.tabToggle('1');
                    }}
                  >
                    Pending
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === '2'
                    })}
                    onClick={() => {
                      this.tabToggle('2');
                    }}
                  >
                    Assigned
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === '3'
                    })}
                    onClick={() => {
                      this.tabToggle('3');
                    }}
                  >
                    Completed
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="6">
                      <ListGroup>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked /> &nbsp;Overdue{' '}
                          <Badge pill className="pull-right">
                            14
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" /> &nbsp;As Soon As Possible{' '}
                          <Badge pill className="pull-right">
                            2
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked /> &nbsp;Today{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" /> &nbsp;Tomorrow{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                    <Col sm="6">
                      <ListGroup>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" /> &nbsp;This Week{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked /> &nbsp;Next
                          Week{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked />{' '}
                          &nbsp;Sometime Later{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="6">
                      <ListGroup>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" /> &nbsp;Overdue{' '}
                          <Badge pill className="pull-right">
                            14
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked /> &nbsp;As Soon
                          As Possible{' '}
                          <Badge pill className="pull-right">
                            2
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked /> &nbsp;Today{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" /> &nbsp;Tomorrow{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                    <Col sm="6">
                      <ListGroup>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked /> &nbsp;This
                          Week{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" /> &nbsp;Next Week{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked />{' '}
                          &nbsp;Sometime Later{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="6">
                      <ListGroup>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" /> &nbsp;Today{' '}
                          <Badge pill className="pull-right">
                            14
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked />{' '}
                          &nbsp;Yesterday{' '}
                          <Badge pill className="pull-right">
                            2
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" /> &nbsp;Last week{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                    <Col sm="6">
                      <ListGroup>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" /> &nbsp;This month{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                        <ListGroupItem className="justify-content-between">
                          <input type="checkbox" defaultChecked /> &nbsp;Last
                          month{' '}
                          <Badge pill className="pull-right">
                            1
                          </Badge>
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
              <div>
                <p className="text-muted">Total Pending Tasks: 100</p>
              </div>
            </CardBody>
          </Collapse>
        </Card>
        <Card className="b-panel">
          <CardHeader>
            <h3 className="b-panel-title">
              <i className="icon-notebook b-icon" />
              Tasks
            </h3>
            <span className="b-panel-actions">
              <Button
                color="success"
                className="pull-right"
                onClick={this.createTask}
              >
                <i className="icon-plus b-icon" />Create Task
              </Button>
            </span>
          </CardHeader>
          <CardBody className="card-body">
            <Row>
              <Col>
                <h5>Overdue</h5>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <Badge pill className="pull-left">
                      Meeting
                    </Badge>
                    &nbsp;<a href="#">Jacky</a>: Inpsect athletic fields re:{' '}
                    <a href="#">Account 1</a> - 1 day late, was due on Nov 29 at
                    7:00PM
                  </ListGroupItem>
                </ListGroup>
                <hr />
                <h5>As Soon As Possible</h5>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <Badge pill className="pull-left">
                      Meeting
                    </Badge>
                    &nbsp;<a href="#">Jacky</a>: Inpsect athletic fields re:{' '}
                    <a href="#">Account 1</a> - 1 day late, was due on Nov 29 at
                    7:00PM
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge pill color="success" className="pull-left">
                      Presentation
                    </Badge>
                    &nbsp;<a href="#">Lena</a>: Do a presentation about
                    ReactJS for the team - 2 day late, was due on Nov 22 at
                    6:30PM
                  </ListGroupItem>
                </ListGroup>
                <hr />
                <h5>Tomorrow</h5>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <Badge pill className="pull-left">
                      Meeting
                    </Badge>
                    &nbsp;<a href="#">Jacky</a>: Inpsect athletic fields re:{' '}
                    <a href="#">Account 1</a> - 1 day late, was due on Nov 29 at
                    7:00PM
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge pill color="danger" className="pull-left">
                      Follow-up
                    </Badge>
                    &nbsp;<a href="#">Chris</a>: Et exercitationem eaque
                    commodi dolorem tenetur aut re:{' '}
                    <a href="#"> Officiis distinctio est nam illum official</a>{' '}
                    - about 2 months late, was due on Oct 10 at 12:00AM
                  </ListGroupItem>
                </ListGroup>
                <hr />
                <h5>Sometime Later</h5>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <Badge pill className="pull-left">
                      Meeting
                    </Badge>
                    &nbsp;<a href="#">Jacky</a>: Inpsect athletic fields re:{' '}
                    <a href="#">Account 1</a> - 1 day late, was due on Nov 29 at
                    7:00PM
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Badge pill color="warning" className="pull-left">
                      Follow-up
                    </Badge>
                    &nbsp;<a href="#">Lena</a>: Et exercitationem eaque
                    commodi dolorem tenetur aut re:{' '}
                    <a href="#"> Officiis distinctio est nam illum official</a>{' '}
                    - about 2 months late, was due on Oct 10 at 12:00AM
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
