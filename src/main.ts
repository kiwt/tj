import { parser } from './parser';
import { tokenizer } from './tokenizer';

console.log(
  parser(
    tokenizer(`{
    "id": "647ceaf3657eade56f8224eb",
    "index": 0,
    "anArray": [],
    "boolean": true,
    "nullValue": null
  }
  `)
  )
);
