export type Token = [
  string,
  { [key in string]: string } | {},
  (Token | string)[]
];

class Tokenizer {
  private tokenizerState: string;

  constructor() {
    // NOTE - temporary state
    this.tokenizerState = 'temporaryState';
  }

  // message
  getToken(rawXml: string): Token {
    const temporaryToken: Token = [
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

    return temporaryToken;
  }
}

export default Tokenizer;
