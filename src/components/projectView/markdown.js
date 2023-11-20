import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import { Webp } from '../../hooks/config';
import { localhost } from '../../hooks/config';

export default function Markdown({ main }) {


  const transformImageUrl = (src) => `${localhost}${src}${Webp(1200)}`;

  const transform = (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        const originalSrc = node.properties.src;
        const transformedSrc = transformImageUrl(originalSrc);
        node.properties.src = transformedSrc;
        node.properties.loading = 'lazy';
      }
    });
  };

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(() => transform)
    .use(rehypeStringify);

  const changeUrl = processor.processSync(main).toString();

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: changeUrl }} />
    </div>
  );
}
