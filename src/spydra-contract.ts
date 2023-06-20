'use strict';

import { Contract, Context } from 'fabric-contract-api';
import { Utils } from 'fabric-common';

// SpydraContract defines the utility functions that are provided by the Spydra base smart contract for Hyperledger Fabric.
class SpydraContract extends Contract {
  constructor(name: string) {
    super(name);
  }

  // ReadDataFromQueryString executes a Couch DB rich query and provides paginated response.
  // The function accepts a Couch DB rich query string, the page size for the results and a bookmark.
  public async ReadDataFromQueryString(ctx: Context, queryString: string, pageSize: number, bookmark: string) {
    const logger = Utils.getLogger('BaseContract');

    const queryData = [];
    const response: any = {};
    try {
      const queryResponse: any = await ctx.stub.getQueryResultWithPagination(queryString, pageSize, bookmark);
      for await (const queryRecord of queryResponse) queryData.push(queryRecord.value.toString('utf8'));

      response.records = queryData;
      response.count = queryResponse.metadata.fetchedRecordsCount;
      if (queryResponse.metadata.fetchedRecordsCount >= pageSize) {
        response.bookmark = queryResponse.metadata.bookmark;
      }
    } catch (err) {
      logger.error(`Query failed. Error: ${err}`);
      throw new Error(`Query failed. Error: ${err}`);
    }

    return response;
  }
}

export { SpydraContract };