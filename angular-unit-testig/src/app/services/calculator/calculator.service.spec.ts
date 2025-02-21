import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const calculatorService = new CalculatorService();
    const result = calculatorService.add(1, 2);
    expect(result).toBe(3);
  });

  it('should subtract two numbers', () => {
    let calculator = new CalculatorService();
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
  });
});
