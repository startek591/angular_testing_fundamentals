import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    let loggerService = new LoggerService();
    const calculatorService = new CalculatorService(loggerService);
    const result = calculatorService.add(1, 2);

    expect(result).toBe(3);
  });

  it('should subtract two numbers', () => {
    let loggerService = new LoggerService();
    let calculator = new CalculatorService(loggerService);
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
  });
});
