import {Entity, model, property} from '@loopback/repository';

/**
 * Model que representa a entidade Hour
 */
@model()
export class Hour extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  start: string;

  @property({
    type: 'string',
    required: true,
  })
  end: string;

  @property({
    type: 'string',
    id: true,
    required: false,
    generated: true,
  })
  id: string;

  constructor(data?: Partial<Hour>) {
    super(data);
  }
}
