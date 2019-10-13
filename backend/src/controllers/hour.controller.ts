import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Hour} from '../models';
import {HourRepository} from '../repositories';

/**
 * Controller responsável por responder as requisições referentes ao modelo Hour.
 */
export class HourController {
  constructor(
    @repository(HourRepository)
    public hourRepository: HourRepository,
  ) {}

  /**
   * Endpoint para a ação de Criar novo registro de hora
   * @param hour
   */
  @post('/hours', {
    responses: {
      '200': {
        description: 'Instância de modelo Hour',
        content: {'application/json': {schema: getModelSchemaRef(Hour)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hour, {
            title: 'NewHour',
            exclude: ['id'],
          }),
        },
      },
    })
    hour: Omit<Hour, 'id'>,
  ): Promise<Hour> {
    return this.hourRepository.create(hour);
  }

  /**
   * Endpoint para buscar dados de Hour.
   * @param filter
   */
  @get('/hours', {
    responses: {
      '200': {
        description: 'Array de Hour',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Hour)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Hour))
    filter?: Filter<Hour>,
  ): Promise<Hour[]> {
    return this.hourRepository.find(filter);
  }

  //   @patch('/hours', {
  //     responses: {
  //       '200': {
  //         description: 'Hour PATCH success count',
  //         content: {'application/json': {schema: CountSchema}},
  //       },
  //     },
  //   })
  //   async updateAll(
  //     @requestBody({
  //       content: {
  //         'application/json': {
  //           schema: getModelSchemaRef(Hour, {partial: true}),
  //         },
  //       },
  //     })
  //     hour: Hour,
  //     @param.query.object('where', getWhereSchemaFor(Hour)) where?: Where<Hour>,
  //   ): Promise<Count> {
  //     return this.hourRepository.updateAll(hour, where);
  //   }

  /**
   * Busca pelo id retorna uma insância de Hour
   * @param id
   */
  @get('/hours/{id}', {
    responses: {
      '200': {
        description: 'Hour model instance',
        content: {'application/json': {schema: getModelSchemaRef(Hour)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Hour> {
    return this.hourRepository.findById(id);
  }

  //   @patch('/hours/{id}', {
  //     responses: {
  //       '204': {
  //         description: 'Hour PATCH success',
  //       },
  //     },
  //   })
  //   async updateById(
  //     @param.path.string('id') id: string,
  //     @requestBody({
  //       content: {
  //         'application/json': {
  //           schema: getModelSchemaRef(Hour, {partial: true}),
  //         },
  //       },
  //     })
  //     hour: Hour,
  //   ): Promise<void> {
  //     await this.hourRepository.updateById(id, hour);
  //   }

  /**
   * Atualiza dados de uma instância de Hour
   * @param id
   * @param hour
   */
  @put('/hours/{id}', {
    responses: {
      '204': {
        description: 'Hour PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() hour: Hour,
  ): Promise<void> {
    await this.hourRepository.replaceById(id, hour);
  }

  /**
   * Remove um registro de Hour
   * @param id
   */
  @del('/hours/{id}', {
    responses: {
      '204': {
        description: 'Hour DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.hourRepository.deleteById(id);
  }
}
