import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    const calculatorService = new CalculatorService(mockLoggerService);
    const result = calculatorService.add(1, 2);

    expect(result).toBe(3);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    let calculator = new CalculatorService(mockLoggerService);
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
