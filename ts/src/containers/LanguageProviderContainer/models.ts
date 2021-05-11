export interface LanguageProviderProps {
  readonly locale: string;
  readonly messages: { [id: string]: {} };
  readonly children: JSX.Element | JSX.Element[];
}
