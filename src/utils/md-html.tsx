import { marked } from "marked";

export function ParseHTML(data: string) {
  return marked.parse(data);
}
