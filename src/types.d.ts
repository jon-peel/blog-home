import { FC } from "react";
import { PageProps } from "gatsby";

type Frontmatter = Readonly<{title: string, path: string, date: Date}>;
type Post = Readonly<{frontmatter: Frontmatter, html:string, id: number,excerpt:string }>

type MarkdownRemarkType = Readonly<{markdownRemark:Post}>;
type AllMarkdownRemarkType = Readonly<{allMarkdownRemark:{ edges: ReadonlyArray<{node:Post}> }}>;

type PageComponent = FC<PageProps<MarkdownRemarkType>>;
type StaticPageComponent = FC<PageProps<AllMarkdownRemarkType>>;
