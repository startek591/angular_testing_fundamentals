import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  function setUp() {
    const mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: mockLoggerService },
      ],
    });

    const calculator = TestBed.inject(CalculatorService);
    const loggerServiceSpy = TestBed.inject(
      LoggerService
    ) as jasmine.SpyObj<LoggerService>;
    return { calculator, loggerServiceSpy };
  }

  describe('CalculatorService', () => {
    it('should add two numbers', () => {
      const { calculator, loggerServiceSpy } = setUp();
      let result = calculator.add(1, 2);
      expect(result).toBe(3);
      expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', () => {
      const { calculator, loggerServiceSpy } = setUp();
      let result = calculator.subtract(2, 1);
      expect(result).toBe(1);
      expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
    });
  });
});
