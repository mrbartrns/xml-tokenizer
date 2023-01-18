import Tokenizer from '.';
import { Token } from '.';

describe('Tokenizer test', () => {
  let tokenizer: Tokenizer;

  beforeEach(() => {
    tokenizer = new Tokenizer();
  });

  it('returns token while input xml string', () => {
    const xmlString = `
      <html>
        <head>
          <title>My HTML Page</title>
        </head>
        <body>
          <p style="special">This paragraph has special style</p>
          <p>This paragraph is not special</sp>
        </body>
      </html>
    `;

    const token: Token = [
      '<html>',
      {},
      [
        ['<head>', {}, [['<title>', {}, ['My HTML Page']]]],
        [
          '<body>',
          {},
          [
            ['<p>', { style: 'special' }, ['This paragraph has special style']],
            ['<p>', {}, ['This paragraph is not special']],
          ],
        ],
      ],
    ];

    expect(tokenizer.getToken(xmlString)).toEqual(token);
  });
});
