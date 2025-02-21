import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService();
  });

  it('should not have any message at starting', () => {
    // arrange
    // const service = new LoggerService();

    // act
    let count = service.messages.length;

    // assert
    expect(count).toBe(0);
  });

  it('should add the message when log is called', () => {
    // const service = new LoggerService();

    service.log('message');

    expect(service.messages.length).toBe(1);
  });

  it('should clear all messages when clear is called', () => {
    // arrange
    // const service = new LoggerService();

    // act
    service.clear();

    // assert
    expect(service.messages.length).toBe(0);
  });
});
