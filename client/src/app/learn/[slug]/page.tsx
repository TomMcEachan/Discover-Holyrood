"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

type Props = {
    slug: string;
    markdown: MDXRemoteSerializeResult;
};

export default function ArticlePage() {
    return <div>{/* <MDXRemote {...markdown} /> */}</div>;
}
