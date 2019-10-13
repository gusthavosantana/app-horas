import {DefaultCrudRepository} from '@loopback/repository';
import {Hour} from '../models';
import {DbhoursDataSource} from '../datasources';
import {inject} from '@loopback/core';

/**
 * Repository de Hour - responsável por manipular dados do modelo Hour
 */
export class HourRepository extends DefaultCrudRepository<
  Hour,
  typeof Hour.prototype.id
> {
  constructor(@inject('datasources.dbhours') dataSource: DbhoursDataSource) {
    super(Hour, dataSource);
  }
}
