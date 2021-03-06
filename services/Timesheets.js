import graphqlRequest from "./index";
import * as TimesheetQuery from "shared/graphql/typedefs/timesheet.gql";
class Timesheets {
  static async getAll({ filters, orders } = {}) {
    return graphqlRequest.getAll("timeSheets", TimesheetQuery.timeSheets, {
      filters,
      orders
    });
  }
}

export default Timesheets;
