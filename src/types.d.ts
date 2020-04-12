import { FC } from 'react';

type PageComponent<Data, Props = {}> = FC<{ data: Data } & Props>;
