import { SortOptions } from '../RegisteredHandler';

export interface IRoomListingData {
  clients: number;
  locked: boolean;
  private: boolean;
  maxClients: number;
  metadata: any;
  name: string;
  processId: string;
  roomId: string;
  unlisted: boolean;
  [property: string]: any;
}

export interface RoomListingData<Metadata= any> extends IRoomListingData {
  metadata: Metadata;

  updateOne(operations: any);
  save();
  remove();
}

export interface QueryHelpers<T> {
  then: Promise<T>['then'];
  sort(options: SortOptions);
}

export interface MatchMakerDriver {
  createInstance(initialValues: any): RoomListingData;

  find(
    conditions: Partial<IRoomListingData>,
    additionalProjectionFields?: any,
  ): Promise<RoomListingData[]> | RoomListingData[];

  findOne(conditions: any): QueryHelpers<RoomListingData>;
}
