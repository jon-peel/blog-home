import { FC } from 'react';

type Frontmatter = Readonly<{ title: string; path: string; date: Date }>;
type Post = Readonly<{
	frontmatter: Frontmatter;
	html: string;
	id: number;
	excerpt: string;
}>;

type MarkdownRemarkType = Readonly<{ markdownRemark: Post }>;
type AllMarkdownRemarkType = Readonly<{
	allMarkdownRemark: { edges: ReadonlyArray<{ node: Post }> };
}>;

type PageComponent<Props = {}> = FC<{ data: MarkdownRemarkType } & Props>;

type StaticPageComponent<Props = {}> = FC<
	{ data: AllMarkdownRemarkType } & Props
>;
