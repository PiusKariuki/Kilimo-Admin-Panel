import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../App/Common/components/Grid/GridItem.js";
import GridContainer from "../../App/Common/components/Grid/GridContainer.js";
import Table from "../../App/Common/components/Table/Table.js";
import Card from "../../App/Common/components/Card/Card.js";
import CardHeader from "../../App/Common/components/Card/CardHeader.js";

import CardBody from "../../App/Common/components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
