import { hello } from '../services/hello';

test('Hello World', () => {
  const service = hello({ name: 'World' });
  expect(service).toMatchSnapshot();
});
