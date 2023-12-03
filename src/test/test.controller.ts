import {
  BadGatewayException,
  Controller,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { sleep } from 'src/util';

@Controller('test-1')
export class TestController {
  @Get('service-1')
  getOneItem() {
    console.log('service 1' + Date.now());
    return {
      test: 'as\n',
      cat: [
        {
          name: 'cat1 aaa aaaservice',
        },
        {
          name: 'cat2\n service',
        },
      ],
      dog: [
        {
          name: 'dog1 service',
        },
        {
          name: 'dog2 service',
        },
        {
          name: 'dog3 service',
        },
      ],
    };
  }
  @Get('v1-traffic')
  getTestTraffic(@Req() req: Request) {
    console.log(req.headers);

    console.log('v1 traffic');
    return {
      cat: [
        {
          name: 'cat1 service',
          age: 12,
        },
        {
          name: 'cat2 service',
          age: 18,
        },
      ],
      dog: [
        {
          name: 'dog1 service',
          age: 120,
        },
        {
          name: 'dog2 service',
          age: 123,
        },
        {
          name: 'dog3 service',
        },
      ],
    };
  }
  @Get('v2-traffic')
  getTestV2Traffic() {
    console.log('v2 traffic');
    // throw Error('error');
    return {
      cat: [
        {
          name: 'cat1 service v2 4',
          age: 12,
          description: 'data.anc',
        },
        {
          name: 'cat2 service v2',
          age: 18,
          description: 'test',
        },
      ],
      dog: [
        {
          name: 'dog1 service v2',
          age: 120,
          description: 'test',
        },
        {
          name: 'dog2 service v2',
          age: 123,
          description: 'test',
        },
        {
          name: 'dog3 service v2',
          description: 'test',
        },
      ],
    };
  }

  @Get('v2-random-id/:id')
  getIdTraffic(@Param('id') id: string) {
    const ids = [1, 2, 3];
    console.log('check random');

    return {
      id: ids[id],
    };
  }

  @Get('circuit-breaker')
  getCircuitBreaker() {
    console.log('circuit-breaker' + Date.now());
    throw new BadGatewayException('bad gateway');
    return {
      test: 'as\n',
      cat: [
        {
          name: 'cat1 aaa aaaservice',
        },
        {
          name: 'cat2\n service',
        },
      ],
      dog: [
        {
          name: 'dog1 service',
        },
        {
          name: 'dog2 service',
        },
        {
          name: 'dog3 service',
        },
      ],
    };
  }
  @Get('bot-detection')
  getBotBetection() {
    console.log('bot-detection' + Date.now());
    return {
      test: 'as\n',
      cat: [
        {
          name: 'cat1 aaa aaaservice',
        },
        {
          name: 'cat2\n service',
        },
      ],
      dog: [
        {
          name: 'dog1 service',
        },
        {
          name: 'dog2 service',
        },
        {
          name: 'dog3 service',
        },
      ],
    };
  }

  @Post('validate-collection')
  getValidateCollection() {
    console.log('validate-collection request' + Date.now());
    return {
      number: 'as\n',
      street_name: 'check',
    };
  }

  @Get('validate-collection-response')
  validateCollectionResponse() {
    console.log('validate-collection-response' + Date.now());
    return {
      user: {
        user_id: '178989',
        status: 'registered',
      },
    };
  }
  @Get('concurrent-requests')
  async concurrentRequests() {
    console.log("service 1");

    await sleep(4000);
    return { name: 'service 1' };
  }
}
